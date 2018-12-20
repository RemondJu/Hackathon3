const initialState = [
  {
    id: 1,
    name: "LG 22MT49DF",
    type: "Television",
    consumption: 22
  },
  {
    id: 2,
    name: "MSI GL63 8RC-274XFR",
    type: "Laptop",
    consumption: 30
  },
  {
    id: 3,
    name: "PS4",
    type: "Game console",
    consumption: 100
  },
  {
    id: 4,
    name: "Nintendo Switch",
    type: "Game console",
    consumption: 15
  },
  {
    id: 5,
    name: "LDLC PC Bazooka",
    type: "Computer",
    consumption: 350
  }
]

export const room1Objects = (state = initialState, action) => {
  switch(action.type) {
    default: return state;
  }
}
