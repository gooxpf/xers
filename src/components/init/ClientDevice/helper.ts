import {
  browserName, browserVersion,
  osName, osVersion,
} from 'react-device-detect';

export const getBrowserType = (): {name: string, version: string} => ({
  name: browserName,
  version: browserVersion,
});

export const getOsType = (): {name: string, version: string} => ({
  name: osName,
  version: osVersion,
});
