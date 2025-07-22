import { create } from "zustand";

import type { TypeClass } from "../interface/classInterface"

type ClasslistState = {
  classList: TypeClass[] | []
  classDetail: {}
  setClassList: (classlist: TypeClass[]) => void
  setClassDetail: (classDetail: any) => void
}

export const useClassStore = create<ClasslistState>((set) => ({
  classList: [],
  classDetail: {},
  setClassList: (classList) => set({ classList }),
  setClassDetail: (classDetail) => set({ classDetail }),
}))