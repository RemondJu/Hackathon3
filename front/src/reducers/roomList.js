const initialState = [
  {
    id: 1,
    name: "Salon",
    type: "salon",
    consumption: "3kwh",
  },
  {
    id: 2,
    name: "Salle de bain 1",
    type: "salle de bain",
    consumption: "1kwh",
  },
  {
    id: 3,
    name: "Salle de bain 2",
    type: "salle de bain",
    consumption: "0kwh",

  },
  {
    id: 4,
    name: "Chambre 1",
    type: "chambre",
    consumption: "2kwh",
  },
  {
    id: 5,
    name: "Chambre 2",
    type: "chambre",
    consumption: "1kwh",
  },
  {
    id: 6,
    name: "Cuisine",
    type: "cuisine",
    consumption: "5kwh",
  }
]

export const roomList = (state=initialState, action) => {
  switch(action.type) {
    default: return state;
  }
}