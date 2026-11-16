// AUTO-GENERATED - DO NOT EDIT
import { Models } from './contract.d';

type Prettify<T> = {
  [K in keyof T as K extends symbol ? never : K]: T[K];
} & {};

export type User = Prettify<Models.unbound_User>;
