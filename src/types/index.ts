export * from './api';
export * from './profile';

export interface SelectOption {
  value: string | number;
  title: string;
}

export interface Tag {
  id: number;
  name: string;
}
