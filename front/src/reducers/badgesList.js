

const initialState = [
  {
    name: "badge 1",
    progress: 76,
    unlockedImage: 'trophee1unlock',
    lockedImage: 'trophee1',
  },
  {
    name: "badge 2",
    progress: 35,
    unlockedImage: '../img/trophee2unlock.png',
    lockedImage: '../img/trophee2.png',
  },
  {
    name: "badge 3",
    progress: 100,
    unlockedImage: '../img/trophee3unlock.png',
    lockedImage: '../img/trophee3.png'
  },
  {
    name: "badge 4",
    progress: 46,
    unlockedImage: '../img/trophee4unlock.png',
    lockedImage: '../img/trophee4.png'
  },
  {
    name: "badge 5",
    progress: 21,
    unlockedImage: '../img/trophee5unlock.png',
    lockedImage: '../img/trophee5.png',
  },
  {
    name: "badge 6",
    progress: 100,
    unlockedImage: '../img/trophee6unlock.png',
    lockedImage: '../img/trophee6.png',
  },
  {
    name: "badge 7",
    progress: 75,
    unlockedImage: '../img/trophee7unlock.png',
    lockedImage: '../img/trophee7.png',
  },
  {
    name: "badge 8",
    progress: 100,
    unlockedImage: '../img/trophee8unlock.png',
    lockedImage: '../img/trophee8.png',
  }
]

export const badgesList = (state=initialState, action) => {
  switch(action.type) {
    default: return state;
  }
}