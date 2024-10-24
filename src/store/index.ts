import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'
import { TAPPMODE, IUser, Nullable } from '../utils';
import userData from './data';

type Store = {
  user: Nullable<IUser>,
  mode: TAPPMODE,
  hideSidebar: boolean,
  toggleSidebar: () => void,
  toggleAppMode: () => void,
  updateUser: (user: Nullable<IUser>) => void
};

const useAppStore = create<Store>()(
  persist(
    (set) => ({
      mode: "TEST",
      user: userData[0],
      hideSidebar: true,
      toggleSidebar: () => set((state) => ({ ...state, hideSidebar: !state.hideSidebar })),
      toggleAppMode: () => set((state) => ({ ...state, mode: state.mode === "TEST" ? "LIVE" : "TEST" })),
      updateUser: (user: Nullable<IUser>) => set((state) => ({ ...state, user }))
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export {
  useAppStore,
  userData
};