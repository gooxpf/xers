import {
  ConfigClientDeviceActionType,
  ConfigClientDeviceStateInterface,
  ConfigAppLoaderStateInterface,
  ConfigAppLoaderActionType,
  ConfigContentLoaderStateInterface,
  ConfigContentLoaderActionType,
  ConfigAppHeaderStateInterface,
  ConfigAppHeaderActionType,
  ConfigAppModalActionType,
  ConfigAppModalStateInterface,
} from './interfaces';

import {
  ConfigAppLoaderActionTypes,
  ConfigClientDeviceActionTypes,
  ConfigAppHeaderActionTypes,
  ConfigAppModalActionTypes,
  ConfigContentLoaderActionTypes,
} from './actions';

import { configAppModalInitialState, initialModalInfo } from './initialState';

export const configAppViewportReducer = (
  state: ConfigClientDeviceStateInterface, action: ConfigClientDeviceActionType,
): ConfigClientDeviceStateInterface => {
  switch (action.type) {
    case ConfigClientDeviceActionTypes.SetSize:
      return { ...state, ...action.payload };

    case ConfigClientDeviceActionTypes.SetDeviceType:
      return { ...state, deviceType: action.payload };

    case ConfigClientDeviceActionTypes.SetOS:
      return {
        ...state,
        deviceOsName: action.payload.name,
        deviceOsVersion: action.payload.version,
      };

    case ConfigClientDeviceActionTypes.SetBrowser:
      return {
        ...state,
        deviceBrowserName: action.payload.name,
        deviceBrowserVersion: action.payload.version,
      };

    case ConfigClientDeviceActionTypes.SetTouch:
      return { ...state, deviceTouch: action.payload };
    default:
      return state;
  }
};

export const configAppLoaderReducer = (
  state: ConfigAppLoaderStateInterface, action: ConfigAppLoaderActionType,
): ConfigAppLoaderStateInterface => {
  switch (action.type) {
    case ConfigAppLoaderActionTypes.Open:
      return { ...state, isOpen: true };

    case ConfigAppLoaderActionTypes.Close:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export const configContentLoaderReducer = (
  state: ConfigContentLoaderStateInterface, action: ConfigContentLoaderActionType,
): ConfigContentLoaderStateInterface => {
  switch (action.type) {
    case ConfigContentLoaderActionTypes.Open:
      return { ...state, isOpen: true };

    case ConfigContentLoaderActionTypes.Close:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export const configAppModalReducer = (
  state: ConfigAppModalStateInterface, action: ConfigAppModalActionType,
): ConfigAppModalStateInterface => {
  switch (action.type) {
    case ConfigAppModalActionTypes.Open:
      return {
        ...state,
        isOpen: true,
        modalType: action.payload.type,
        modalInfo: action.payload.modalInfo,
        onSuccess: action.payload.onSuccess || undefined,
      };

    case ConfigAppModalActionTypes.Clear:
      return {
        ...configAppModalInitialState,
      };

    case ConfigAppModalActionTypes.Close:
      return {
        ...state,
        isOpen: false,
        modalInfo: { ...initialModalInfo },
      };
    default:
      return state;
  }
};

export const configAppHeaderReducer = (
  state: ConfigAppHeaderStateInterface, action: ConfigAppHeaderActionType,
): ConfigAppHeaderStateInterface => {
  switch (action.type) {
    case ConfigAppHeaderActionTypes.DesktopOpen:
      return { ...state, desktopLeftIsOpen: action.payload };

    case ConfigAppHeaderActionTypes.DesktopUserSettingsOpen:
      return { ...state, desktopUserSettingsIsOpen: action.payload };

    case ConfigAppHeaderActionTypes.MobileOpen:
      return { ...state, mobileIsOpen: action.payload };
    default:
      return state;
  }
};
