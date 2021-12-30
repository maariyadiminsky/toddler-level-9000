import { DEFAULT } from '../../const';

export const hasKeyExistInLocalStorage = (key = DEFAULT.STRING) => localStorage.getItem(key);
