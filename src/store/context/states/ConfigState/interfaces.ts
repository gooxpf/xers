import {
  ConfigAppHeaderActionTypes,
  ConfigAppLoaderActionTypes,
  ConfigAppModalActionTypes,
  ConfigClientDeviceActionTypes,
  ConfigContentLoaderActionTypes,
} from './actions';
import {
  ClientDeviceBrowserTypes,
  ClientDeviceOsTypes,
  ClientDeviceTypes,
  ModalTypes
} from '../../../../config/UIConfig';

export interface ConfigClientDeviceStateInterface {
  width: number,
  height: number,
  deviceType: ClientDeviceTypes,
  contentWidth: number,
  contentHeight: number,
  deviceOS: ClientDeviceOsTypes,
  deviceBrowser: ClientDeviceBrowserTypes,
  deviceTouch: boolean,
}

export interface ConfigAppLoaderStateInterface {
  isOpen: boolean,
}

export interface ConfigContentLoaderStateInterface {
  isOpen: boolean,
}

export interface ModalInfoInterface {
  title?: string,
  description?: string,
  primaryButtonTitle?: string,
  secondaryButtonTitle?: string,
  path?: string,
  pageType?: string,
}

export interface ConfigAppModalStateInterface {
  isOpen: boolean,
  modalType?: ModalTypes,
  modalInfo: ModalInfoInterface,
  onSuccess?: (value?: FormData | undefined) => void | undefined,
}

export interface ConfigAppHeaderStateInterface {
  desktopLeftIsOpen: boolean,
  desktopUserSettingsIsOpen: boolean,
  mobileIsOpen: boolean,
}

export type ConfigClientDeviceActionType =
  | { type: ConfigClientDeviceActionTypes.SetSize, payload: { width: number, height: number } }
  | { type: ConfigClientDeviceActionTypes.SetDeviceType, payload: ClientDeviceTypes }
  | { type: ConfigClientDeviceActionTypes.SetOS, payload: ClientDeviceOsTypes }
  | { type: ConfigClientDeviceActionTypes.SetBrowser, payload: ClientDeviceBrowserTypes }
  | { type: ConfigClientDeviceActionTypes.SetTouch, payload: boolean };

export type ConfigAppLoaderActionType =
  | { type: ConfigAppLoaderActionTypes.Open }
  | { type: ConfigAppLoaderActionTypes.Close };

export type ConfigContentLoaderActionType =
  | { type: ConfigContentLoaderActionTypes.Open }
  | { type: ConfigContentLoaderActionTypes.Close };

export type ConfigAppModalActionType =
  | { type: ConfigAppModalActionTypes.Open, payload: {
      type?: ModalTypes,
      modalInfo: ModalInfoInterface,
      onSuccess?: (data?: FormData | undefined) => void,
    }
  }
  | { type: ConfigAppModalActionTypes.Close }
  | { type: ConfigAppModalActionTypes.Clear };

export type ConfigAppHeaderActionType =
  | { type: ConfigAppHeaderActionTypes.MobileOpen, payload: boolean }
  | { type: ConfigAppHeaderActionTypes.DesktopOpen, payload: boolean }
  | { type: ConfigAppHeaderActionTypes.DesktopUserSettingsOpen, payload: boolean };

export interface ConfigStateContextInterface {
  clientDevice: ConfigClientDeviceStateInterface,
  dispatchClientDevice: (props: ConfigClientDeviceActionType) => void,
  appLoader: ConfigAppLoaderStateInterface,
  dispatchAppLoader: (props: ConfigAppLoaderActionType) => void,
  contentLoader: ConfigContentLoaderStateInterface,
  dispatchContentLoader: (props: ConfigContentLoaderActionType) => void,
  appModal: ConfigAppModalStateInterface,
  dispatchAppModal: (props: ConfigAppModalActionType) => void,
  appHeader: ConfigAppHeaderStateInterface,
  dispatchAppHeader: (props: ConfigAppHeaderActionType) => void,
}
