import localForage from "localforage";
import StorageError from "./storage-error";

//StorageService
//Used to read and write data to IndexDb.
//Uses localForage which handles read write operations async.
//By default localForage uses IndexDb fallbacks to local storage if it is not available.
class StorageService {
  static init(config = {}) {
    if (!this.storage) {
      this.storage = localForage.createInstance({
        name: "people-management",
        ...config,
      });
    }
  }

  static async setItem(key, value) {
    try {
      await this.storage.setItem(key, value);
    } catch (err) {
      throw new StorageError("Error in saving value");
    }
  }

  static async getItem(key) {
    let item = null;
    try {
      item = await this.storage.getItem(key);
    } catch (err) {
      throw new StorageError(`Error in getting value for key ${key}`);
    }
    return item;
  }

  static async getAll() {
    const result = {};
    try {
      await this.storage.iterate((value, key) => {
        result[key] = value;
      });
    } catch (err) {
      throw new StorageError("Error in getting all values");
    }
    return result;
  }
}

export default StorageService;
