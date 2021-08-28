import React, { createContext, ReactElement, useReducer } from 'react';
import {
  ClientStateInterface,
  ClientStateContextInterface,
  ClientActionType,
} from './interfaces';
import { clientInitialState } from './initialState';
import clientStateReducer from './reducer';
import { ContextProviderPropsInterface, UseReducerType } from '../../interfaces';

export const ClientStateContext = createContext<ClientStateContextInterface>(
  {} as ClientStateContextInterface,
);

export const ClientStateProvider
: React.FC<ContextProviderPropsInterface> = ({ children }: ContextProviderPropsInterface): ReactElement => {
  const [
    clientState,
    dispatchClientState,
  ] = useReducer<
    UseReducerType<ClientStateInterface, ClientActionType>
    >(clientStateReducer, clientInitialState);

  return (
    <ClientStateContext.Provider
      value={{
        clientState,
        dispatchClientState,
      }}
    >
      {
        children
      }
    </ClientStateContext.Provider>
  );
};
