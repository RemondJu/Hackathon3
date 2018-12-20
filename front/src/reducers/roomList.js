const initialState = [
  {
    id: 1,
    name: "Salon",
    type: "salon",
  },
  {
    id: 2,
    name: "Salle de bain 1",
    type: "salle de bain",
  },
  {
    id: 3,
    name: "Salle de bain 2",
    type: "salle de bain",
  },
  {
    id: 4,
    name: "Chambre 1",
    type: "chambre",
  },
  {
    id: 5,
    name: "chambre 2",
    type: "chambre",
  },
  {
    id: 6,
    name: "Cuisine",
    type: "cuisine",
  }
]

export const roomList = (state=initialState, action) => {
  switch(action.type) {
    default: return state;
  }
}