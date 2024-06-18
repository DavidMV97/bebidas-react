import { create } from "zustand";
import { RecipesSliceType, createRecipiesSlice } from './recipiSlice';
import { devtools } from "zustand/middleware";
import { FavoritesSliceType, createFavoritesSlice } from './favoritesSlice';
import { NotificationSliceType, createNotificationSlice } from './notificationSlice';

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipiesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))