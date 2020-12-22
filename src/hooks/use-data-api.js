import { useState, useEffect, useCallback } from "react";
import StorageService from "../service/storage-service";

function useDataApi({ url, query, initialData }) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveData = useCallback(async (key, value, successCallBack) => {
    setIsLoading(true);
    let isSaveSucess = false;
    try {
      await StorageService.setItem(key, value);
      isSaveSucess = true;
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
    if (isSaveSucess && typeof successCallBack === "function") {
      successCallBack();
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);

      if (url === "getItem" && !query) {
        return;
      }

      setIsLoading(true);
      try {
        const result = await StorageService[url](query);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url, query]);

  return [{ data, isLoading, error }, saveData];
}

export default useDataApi;
