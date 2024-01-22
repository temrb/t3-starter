/* eslint-disable no-unused-vars */

import { create } from 'zustand';
interface LayoutState {
	hideSidebar: boolean;
	setHideSidebar: (hideSidebar: boolean) => void;
}

export const layoutSlice = create<LayoutState>((set) => ({
	hideSidebar: false,
	setHideSidebar: (hideSidebar) => set({ hideSidebar }),
}));
