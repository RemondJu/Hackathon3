const initialState = [
  [
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
  ],
  [
    {
      id: 1,
      name: "Behringer audio",
      type: "Hifi",
      consumption: 15
    },
    {
      id: 2,
      name: "lampe ikea",
      type: "Light",
      consumption: 50
    },
    {
      id: 3,
      name: "Radio réveil",
      type: "Hifi",
      consumption: 100
    }
  ],
  [
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
  ],
  [
    {
      id: 1,
      name: "Behringer audio",
      type: "Hifi",
      consumption: 15
    },
    {
      id: 2,
      name: "lampe ikea",
      type: "Light",
      consumption: 50
    },
    {
      id: 3,
      name: "Radio réveil",
      type: "Hifi",
      consumption: 100
    }
  ],
  [
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
  ],
  [
    {
      id: 1,
      name: "Behringer audio",
      type: "Hifi",
      consumption: 15
    },
    {
      id: 2,
      name: "lampe ikea",
      type: "Light",
      consumption: 50
    },
    {
      id: 3,
      name: "Radio réveil",
      type: "Hifi",
      consumption: 100
    }
  ] 
]

export const roomObjects = (state = initialState[0], action) => {
  switch(action.type) {
    case 'ROOM_CLICKED': return initialState[action.idx];
    default: return state;
  }
}
