import { createAction } from '@reduxjs/toolkit';
import { WEBSOCKET_CONNECT, WEBSOCKET_EMIT } from '../constants';
import { createThunkAction } from '../utils';

export const websocketConnect = createThunkAction(
  WEBSOCKET_CONNECT,
  (_, thunkApi) => {
    const { websocketService } = thunkApi.extra;

    websocketService.connect();

    return new Promise<any>((resolve) => websocketService.on('connect', () => {
      resolve(null);
    }));
  }
);

export const websocketEmit = createAction(
  WEBSOCKET_EMIT,
  (event: any, ...args: any[]) => ({
    payload: {
      event, args
    }
  })
);
