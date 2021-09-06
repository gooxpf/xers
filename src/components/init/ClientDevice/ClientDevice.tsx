import React, { useContext, useEffect } from 'react';
import { ClientDeviceTypes, ClientDeviceBreakpoints } from '../../../config/UIConfig';
import { ConfigClientDeviceActionTypes, ConfigStateContext } from '../../../store';
import { getBrowserType, getOsType } from './helper';

const ClientDevice:React.FC = () => {
  const { dispatchClientDevice } = useContext(ConfigStateContext);
  const checkDeviceType = (width:number): ClientDeviceTypes => {
    switch (true) {
      case (width < ClientDeviceBreakpoints.Desktop.min):
        return ClientDeviceTypes.Mobile;
      default:
        return ClientDeviceTypes.Desktop;
    }
  };

  const getTouchScreen = () => {
    dispatchClientDevice({
      type: ConfigClientDeviceActionTypes.SetTouch,
      payload: (navigator.maxTouchPoints > 0),
    });
  };

  const getOS = () => {
    dispatchClientDevice({
      type: ConfigClientDeviceActionTypes.SetOS,
      payload: getOsType(),
    });
  };

  const getBrowser = () => {
    dispatchClientDevice({
      type: ConfigClientDeviceActionTypes.SetBrowser,
      payload: getBrowserType(),
    });
  };

  const getAppSizes = () => {
    const screenWidth = Number(window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth);

    const screenHeight = Number(window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight);

    const deviceType:ClientDeviceTypes = checkDeviceType(screenWidth);
    dispatchClientDevice({
      type: ConfigClientDeviceActionTypes.SetSize,
      payload: { width: screenWidth, height: screenHeight },
    });
    dispatchClientDevice({
      type: ConfigClientDeviceActionTypes.SetDeviceType,
      payload: deviceType,
    });
  };
  useEffect(() => {
    getAppSizes();
    getTouchScreen();
    getOS();
    getBrowser();
    window.addEventListener('resize', getAppSizes);
    return (() => {
      window.removeEventListener('resize', getAppSizes);
    });
  }, []);
  return (
    <></>
  );
};

export default ClientDevice;
