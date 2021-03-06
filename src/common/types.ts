export type UserID = string;
export type GameID = string;

export interface User {
  id: UserID;
  displayName: string;
}

export interface GameSnapshot {
  gameId: GameID;
  name: string;
  owner: User;
  players: User[];
  ended: boolean;
}

export interface GameAction {
  playerId?: UserID;
}

export interface GomokuGameAction extends GameAction {
  x: number;
  y: number;
}

export interface GomokuSnapshot extends GameSnapshot {
  dimensions: [number, number];
  actions: GomokuGameAction[];
  winner: UserID | null;
}

// Websocket Requests
export type GamePlayRequest = {
  gameId: GameID;
  action: GameAction;
};
