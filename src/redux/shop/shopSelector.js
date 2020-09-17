import { createSelector } from "reselect";

export const selectShop = (state) => state.shop;


export const selectCollection = collectionUrlParams =>
  createSelector(
    [selectShop], 
    collections => collections[collectionUrlParams]
  );

  export const selectCollectionForPreview = createSelector(
    [selectShop],
    shop => Object.keys(shop).map(key => shop[key])
  ) 