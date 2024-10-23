import { create } from 'zustand'
import { IAPPMODE, IUser, Nullable } from '../utils';

type Store = {
  user: Nullable<IUser>,
  mode: IAPPMODE,
  updateAppMode: (mode: IAPPMODE) => void
}

const useAppStore = create<Store>()((set) => ({
  mode: "TEST",
  user: null,
  updateAppMode: (mode: IAPPMODE) => set((state) => ({ ...state, mode })),
}))

export {
  useAppStore
}