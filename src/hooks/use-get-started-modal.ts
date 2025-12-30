import { create } from 'zustand';

interface GetStartedModalStore {
  showModal: boolean;
  setShowGetStartedModal: (show: boolean) => void;
}

export const useGetStartedModal = create<GetStartedModalStore>((set) => ({
  showModal: false,
  setShowGetStartedModal: (show) => set({ showModal: show }),
}));
