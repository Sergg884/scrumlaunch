import { create } from 'zustand';
import { ModalSlice, createModalSlice } from './slices/modalSlice';

type Store = ModalSlice;

export const useStore = create<Store>((...args) => ({
  ...createModalSlice(...args),
}));
