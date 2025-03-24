import { StateCreator } from 'zustand';

export type ModalType = 'scheduleCall' | null;

export type ModalSlice = {
  modalType: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

export const createModalSlice: StateCreator<ModalSlice> = (set) => ({
  modalType: null,

  openModal: (type) => {
    set({ modalType: type });
    document.body.style.overflow = 'hidden';
  },

  closeModal: () => {
    set({ modalType: null });
    document.body.style.overflow = '';
  }
}); 
