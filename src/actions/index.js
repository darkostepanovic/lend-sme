import { HANDLE_FORM_DATA } from "./types";

export const handleFormData = (key, val) => dispatch => dispatch({type: HANDLE_FORM_DATA, payload: {key, val}});