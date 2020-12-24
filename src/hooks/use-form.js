import { useReducer, useEffect } from "react";
import { reduce, keys, omit } from "lodash";

const ns = "src.hooks.useForm";
const SET_VALUE = `${ns}.setValue`;
const SET_STATE = `${ns}.setState`;
const SET_ERRORS = `${ns}.setErrors`;
const CLEAR_ERROR = `${ns}.clearError`;

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

const errorReducer = (state = {}, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ERRORS: {
      const { errors } = payload;
      return errors;
    }
    case CLEAR_ERROR: {
      const { field } = payload;
      return omit(state, field);
    }
    default: {
      return state;
    }
  }
};

function useForm(initialState = {}, callback, validations = {}) {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, dispatchError] = useReducer(errorReducer, {});

  useEffect(() => {
    dispatch({ type: SET_STATE, payload: { state: initialState } });
  }, [initialState]);

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: SET_VALUE, payload: { name, value } });
    dispatchError({ type: CLEAR_ERROR, payload: { field: name } });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    const errors = reduce(
      state,
      (errors, val, key) => {
        if (typeof validations[key] === "function") {
          const error = validations[key](val);
          if (error) {
            return { ...errors, [key]: error };
          }
        }
        return errors;
      },
      {}
    );

    if (keys(errors).length) {
      dispatchError({ type: SET_ERRORS, payload: { errors } });
      return;
    }
    callback();
  };

  return [state, onChange, handleSubmit, errors];
}

export default useForm;
