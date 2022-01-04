import { DEFAULT } from '../../const';

export const getKeyExistInLocalStorage = (key = DEFAULT.STRING) => localStorage.getItem(key);
