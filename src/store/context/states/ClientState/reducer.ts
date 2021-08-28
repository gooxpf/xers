import {
  ClientActionType,
  ClientStateInterface,
} from './interfaces';

import { clientInitialState } from './initialState';
import { ClientActionTypes } from './actions';
import { UseReducerType } from '../../interfaces';

const clientStateReducer: UseReducerType<ClientStateInterface, ClientActionType> = (state, action)
:ClientStateInterface => {
  switch (action.type) {
    case ClientActionTypes.SetClient:
      return { ...state, isAuth: true, profile: { ...action.payload } };

    case ClientActionTypes.ClearClient:
      return { ...clientInitialState };

    default:
      return state;
  }
};

export default clientStateReducer;
