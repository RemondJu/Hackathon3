const initialState = [
  {
    id: 1,
    name: "Salon",
    type: "salon",
    consumption: 3,
    selected: true,
  },
  {
    id: 2,
    name: "Salle de bain 1",
    type: "salle de bain",
    consumption: 1,
    selected: false,
  },
  {
    id: 3,
    name: "Salle de bain 2",
    type: "salle de bain",
    consumption: 0,
    selected: false,
  },
  {
    id: 4,
    name: "Chambre 1",
    type: "chambre",
    consumption: 2,
    selected: false,
  },
  {
    id: 5,
    name: "Chambre 2",
    type: "chambre",
    consumption: 1,
    selected: false,
  },
  {
    id: 6,
    name: "Cuisine",
    type: "cuisine",
    consumption: 2,
    selected: false,
  }
]

export const roomList = (state=initialState, action) => {
  switch(action.type) {
    default: return state;
  }
}