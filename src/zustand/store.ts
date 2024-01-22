/** @format */

import { create } from 'zustand';
import { layoutSlice } from './features/layoutSlice';

export const useBoundStore = create(() => ({
	...layoutSlice(),
}));
