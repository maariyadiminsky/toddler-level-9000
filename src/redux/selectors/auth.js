import { DEFAULT } from '../../const';

export const getUserIdSelector = ({ auth: { userId = DEFAULT.STRING }}) => userId;