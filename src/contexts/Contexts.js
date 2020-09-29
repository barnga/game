import { createContext } from 'react';

export const AppContext = createContext({
  // Placeholder value
  isDark: false,
});

export const SocketContext = createContext({
  socket: null,
  namespace: null,
});

export const GameContext = createContext({
  gameState: null,
});

export const StrokesContext = createContext({
  strokesState: null,
});
