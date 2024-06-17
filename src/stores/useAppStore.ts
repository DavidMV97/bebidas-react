import { create } from "zustand";
import { RecipesSliceType, createRecipiesSlice } from './recipiSlice';
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({
    ...createRecipiesSlice(...a)
})))