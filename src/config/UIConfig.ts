export const ClientDeviceBreakpoints = {
  Desktop: { min: 1101, max: Infinity },
  Mobile: { min: 0, max: 1100 },
};

export enum ClientDeviceTypes {
  Desktop = 'desktop',
  Mobile = 'mobile',
}

export enum ClientDeviceOsTypes {
  Windows = 'windows',
  Linux = 'linux',
  Unix = 'unix',
  Mac = 'mac',
  Other = 'other',
}

export enum ClientDeviceBrowserTypes {
  Opera = 'opera',
  Safari = 'safari',
  Chrome = 'chrome',
  Firefox = 'firefox',
  Ie = 'ie',
  Other = 'other',
}

export enum ModalTypes {
  MessageModal = 'MessageModal',
  ActionModal = 'ActionModal',
}
