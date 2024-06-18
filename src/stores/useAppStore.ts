import { create } from "zustand";
import { RecipesSliceType, createRecipiesSlice } from './recipiSlice';
import { devtools } from "zustand/middleware";
import { FavoritesSliceType, createFavoritesSlice } from './favoritesSlice';

export const useAppStore = create<RecipesSliceType & FavoritesSliceType >()(devtools((...a) => ({
    ...createRecipiesSlice(...a),
    ...createFavoritesSlice(...a)
})))