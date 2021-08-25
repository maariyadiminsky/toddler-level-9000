import isEmpty from "lodash/isEmpty";

export const isArrayExistAndNotEmpty = (arr) => arr && arr.length !== 0;
export const isObjectExistAndNotEmpty = (obj) => obj !== undefined && !isEmpty(obj);