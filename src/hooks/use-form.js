import { useReducer, useEffect } from "react";

const ns = "src.hooks.useForm";
const SET_VALUE = `${ns}.setValue`;
const SET_STATE = `${ns}.setState`;

const formReducer = (state = {}, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_STATE: {
      return payload.state;
    }
    case SET_VALUE: {
      const { name, value } = payload;
      return { ...state, [name]: value };
    }
    default: {
      return state;
    }
  }
};

function useForm(initialState = {}) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    dispatch({ type: SET_STATE, payload: { state: initialState } });
  }, [initialState]);

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: SET_VALUE, payload: { name, value } });
  };
  return [state, onChange];
}

export default useForm;
