import { REDUCER_SCOPES } from 'src/constants';
import type { GlobalState, MenuItemContext, UserContext } from 'src/types';

export const selector = (state: any): GlobalState => state[REDUCER_SCOPES.GLOBAL];
export const selectedMenuSelector = (state: any): MenuItemContext | undefined => selector(state).menuItem;
export const userSelector = (state: any): UserContext => selector(state).user;
