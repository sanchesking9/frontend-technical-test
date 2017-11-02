export const MOCK = {
  data: {
    entities: {
      selections: {
        1: '1',
        2: '2'
      },
      markets: {
        1: '1',
        2: '2'
      },
      events: {
        1: '1',
        2: '2'
      }
    }
  },
  selections: {
    1: '1',
    2: '2'
  },
  unselect: (item) => {
    MOCK.unselectedClick = item;
  },
  unselectedClick: 0,
  select: (item) => {
    MOCK.selectedClick = item;
  },
  selectedClick: 0,
  item: {
    markets: [1,2]
  }
};
