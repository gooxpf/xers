import React, { createContext, ReactElement, useReducer } from 'react';

import {
  ContextProviderPropsInterface,
  UseReducerType,
} from '../../interfaces';
import {
  ConfigAppHeaderActionType,
  ConfigAppHeaderStateInterface,
  ConfigAppLoaderActionType,
  ConfigAppLoaderStateInterface,
  ConfigAppModalActionType,
  ConfigAppModalStateInterface,
  ConfigClientDeviceActionType,
  ConfigClientDeviceStateInterface,
  ConfigContentLoaderActionType,
  ConfigContentLoaderStateInterface,
  ConfigStateContextInterface,
} from './interfaces';
import {
  configAppHeaderReducer,
  configAppLoaderReducer,
  configAppModalReducer,
  configAppViewportReducer,
  configContentLoaderReducer,
} from './reducer';
import {
  configAppHeaderInitialState,
  configAppLoaderInitialState, configAppModalInitialState,
  configAppViewportInitialState,
  configContentLoaderInitialState,
} from './initialState';

export const ConfigStateContext = createContext<ConfigStateContextInterface>(
  {} as ConfigStateContextInterface,
);

export const ConfigStateProvider
: React.FC<ContextProviderPropsInterface> = ({ children }: ContextProviderPropsInterface): ReactElement => {
  const [clientDevice, dispatchClientDevice] = useReducer<
    UseReducerType<ConfigClientDeviceStateInterface, ConfigClientDeviceActionType>
    >(configAppViewportReducer, configAppViewportInitialState);
  const [appLoader, dispatchAppLoader] = useReducer<
    UseReducerType<ConfigAppLoaderStateInterface, ConfigAppLoaderActionType>
    >(configAppLoaderReducer, configAppLoaderInitialState);
  const [contentLoader, dispatchContentLoader] = useReducer<
    UseReducerType<ConfigContentLoaderStateInterface, ConfigContentLoaderActionType>
    >(configContentLoaderReducer, configContentLoaderInitialState);
  const [appModal, dispatchAppModal] = useReducer<
    UseReducerType<ConfigAppModalStateInterface, ConfigAppModalActionType>
    >(configAppModalReducer, configAppModalInitialState);
  const [appHeader, dispatchAppHeader] = useReducer<
    UseReducerType<ConfigAppHeaderStateInterface, ConfigAppHeaderActionType>
    >(configAppHeaderReducer, configAppHeaderInitialState);

  return (
    <ConfigStateContext.Provider
      value={{
        clientDevice,
        dispatchClientDevice,
        appLoader,
        dispatchAppLoader,
        contentLoader,
        dispatchContentLoader,
        appModal,
        dispatchAppModal,
        appHeader,
        dispatchAppHeader,
      }}
    >
      {
        children
      }
    </ConfigStateContext.Provider>
  );
};
