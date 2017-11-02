export const SELECT = 'SELECT';
export const UNSELECT = 'UNSELECT';

export const select = (selectionId, marketId) => ({
  type: SELECT,
  selectionId,
  marketId
});

export const unselect = (selectionId) => ({
  type: UNSELECT,
  selectionId
});
