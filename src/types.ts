import type { ElementType } from 'react';

export interface MenuItemContext {
  pathId: string;
  title: string;
  path: string;
  exact?: boolean;
  icon: ElementType;
  component: ElementType;
}

export interface UserContext {
  userName: string;
}

export interface GlobalState {
  menuItem?: MenuItemContext;
  user: UserContext;
}