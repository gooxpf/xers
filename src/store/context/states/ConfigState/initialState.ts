import {
  ConfigAppModalStateInterface,
  ConfigClientDeviceStateInterface,
  ModalInfoInterface, ConfigAppLoaderStateInterface, ConfigContentLoaderStateInterface, ConfigAppHeaderStateInterface,
} from './interfaces';
import {
  ClientDeviceBrowserTypes,
  ClientDeviceOsTypes,
  ClientDeviceTypes,
  ModalTypes,
} from '../../../../config/UIConfig';

export const initialModalInfo: ModalInfoInterface = {
  title: '',
  description: '',
  path: '',
};

export const configAppViewportInitialState: ConfigClientDeviceStateInterface = {
  width: 0,
  height: 0,
  contentWidth: 0,
  contentHeight: 0,
  deviceType: ClientDeviceTypes.Desktop,
  deviceOsName: ClientDeviceOsTypes.Other,
  deviceOsVersion: '',
  deviceBrowserName: ClientDeviceBrowserTypes.Other,
  deviceBrowserVersion: '',
  deviceTouch: false,
};

export const configAppLoaderInitialState: ConfigAppLoaderStateInterface = {
  isOpen: true,
};

export const configContentLoaderInitialState: ConfigContentLoaderStateInterface = {
  isOpen: false,
};

export const configAppModalInitialState: ConfigAppModalStateInterface = {
  isOpen: false,
  modalType: ModalTypes.MessageModal,
  modalInfo: { ...initialModalInfo },
};

export const configAppHeaderInitialState: ConfigAppHeaderStateInterface = {
  desktopLeftIsOpen: false,
  desktopUserSettingsIsOpen: true,
  mobileIsOpen: false,
};
