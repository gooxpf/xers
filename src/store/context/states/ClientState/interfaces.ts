import React from 'react';
import { ClientActionTypes } from './actions';
import { ClientRoleTypes } from '../../../../config/ClientConfig';

export interface ClientProfileStateInterface {
  firstName: string,
  lastName: string,
  email: string,
  id: string,
  avatar: string,
  role: ClientRoleTypes,
}

export type ClientActionType =
  | { type: ClientActionTypes.SetClient, payload: ClientProfileStateInterface }
  | { type: ClientActionTypes.ClearClient };

export interface ClientStateInterface {
  profile: ClientProfileStateInterface,
  isAuth: boolean,
}

export interface ClientStateContextInterface {
  clientState: ClientStateInterface,
  dispatchClientState: (props:ClientActionType) => void,
}

export interface ClientProviderInterface {
  children: React.FC | React.ReactElement,
}
