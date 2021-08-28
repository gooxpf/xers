import { ClientStateInterface, ClientProfileStateInterface } from './interfaces';
import { ClientRoleTypes } from '../../../../config/ClientConfig';

export const profileInitialState: ClientProfileStateInterface = {
  firstName: '',
  lastName: '',
  email: '',
  id: '',
  avatar: '',
  role: ClientRoleTypes.Guest,
};

export const clientInitialState: ClientStateInterface = {
  profile: { ...profileInitialState },
  isAuth: false,
};
