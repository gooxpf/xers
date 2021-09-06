import React from 'react';

export type UseReducerType<S, A> = (state: S, action: A) => S;

export interface ContextProviderPropsInterface {
  children: React.FC | React.ReactElement,
}
