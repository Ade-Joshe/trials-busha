import { create } from 'zustand'
import { TAPPMODE, IUser, Nullable } from '../utils';
import userData from './data';

type Store = {
  user: Nullable<IUser>,
  mode: TAPPMODE,
  updateAppMode: (mode: TAPPMODE) => void
  updateUser: (user: IUser) => void
};

const useAppStore = create<Store>()((set) => ({
  mode: "TEST",
  user: userData[0],
  updateAppMode: (mode: TAPPMODE) => set((state) => ({ ...state, mode })),
  updateUser: (user: IUser) => set((state) => ({ ...state, user }))
}));

export {
  useAppStore
};