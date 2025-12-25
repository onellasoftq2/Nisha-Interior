import { create } from 'zustand';

interface BookingModalStore {
  showModal: boolean;
  setShowBookingModal: (show: boolean) => void;
}

export const useBookingModal = create<BookingModalStore>((set) => ({
  showModal: false,
  setShowBookingModal: (show) => set({ showModal: show }),
}));
