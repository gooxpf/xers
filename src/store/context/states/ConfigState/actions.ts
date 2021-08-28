export enum ConfigClientDeviceActionTypes {
  SetSize = 'SetSize',
  SetDeviceType = 'SetDeviceType',
  SetOS = 'SetOS',
  SetBrowser = 'SetBrowser',
  SetTouch = 'SetTouch',
}

export enum ConfigAppLoaderActionTypes {
  Open = 'OpenAppLoader',
  Close = 'CloseAppLoader',
}

export enum ConfigContentLoaderActionTypes {
  Open = 'OpenContentLoader',
  Close = 'CloseContentLoader',
}

export enum ConfigAppModalActionTypes {
  Open = 'OpenAppModal',
  Close = 'CloseAppModal',
  Clear = 'ClearAppModal',
}

export enum ConfigAppHeaderActionTypes {
  DesktopOpen = 'DesktopOpen',
  MobileOpen = 'MobileOpen',
  DesktopUserSettingsOpen = 'DesktopUserSettingsOpen',
}
