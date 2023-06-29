export interface UseFavoritesStore {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}
