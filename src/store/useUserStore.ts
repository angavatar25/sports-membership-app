import { create } from "zustand";
import type { TUserData } from "../interface/userInterface";

type UserState = {
  userData: {},
  bookedSession: [],
  setUserData: (userData: TUserData) => void,
  setUserBookedSession: (userSession: any) => void,
}

export const useUserStore = create<UserState>((set) => ({
  userData: {},
  bookedSession: [],
  setUserData: (userData) => set({ userData }),
  setUserBookedSession: (bookedSession) => set({ bookedSession }),
}));