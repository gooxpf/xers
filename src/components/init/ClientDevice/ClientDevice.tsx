import React, { useContext, useEffect } from 'react';
import { ClientDeviceTypes, ClientDeviceBreakpoints } from '../../../config/UIConfig';
import { ConfigClientDeviceActionTypes, ConfigStateContext } from '../../../store';

const ClientDevice:React.FC = () => {
  const { clientDevice, dispatchClientDevice } = useContext(ConfigStateContext);
  const checkDeviceType = (width:number): ClientDeviceTypes => {
    switch (true) {
      case (width < ClientDeviceBreakpoints.Desktop.min):
        return ClientDeviceTypes.Mobile;
      default:
        return ClientDeviceTypes.Desktop;
    }
  };

  const getTouchScreen = () => {
    console.log('touch', (navigator.maxTouchPoints > 0));
  };

  const getOS = () => {
    console.log(navigator.appVersion as string);
  };

  const getBrowser = () => {
    console.log(navigator.appVersion as string);
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
    console.log(deviceType, screenWidth, screenHeight);
  };
  useEffect(() => {
    getAppSizes();
    getTouchScreen();
    getOS();
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
