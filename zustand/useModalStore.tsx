import { create } from "zustand";

interface ModalStore {
  isGameOverOpen: boolean;
  openGameOverModal: () => void;
  closeGameOverModal: () => void;
  isGameCompleteOpen: boolean;
  openGameCompleteModal: () => void;
  closeGameCompleteModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isGameOverOpen: false,
  openGameOverModal: () => set({ isGameOverOpen: true }),
  closeGameOverModal: () => set({ isGameOverOpen: false }),
  isGameCompleteOpen: false,
  openGameCompleteModal: () => set({ isGameCompleteOpen: true }),
  closeGameCompleteModal: () => set({ isGameCompleteOpen: false }),
}));
