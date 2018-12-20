const initialState = [
  [
    {
      id: 1,
      name: "LG 22MT49DF",
      type: "Television",
      consumption: 22,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 2,
      name: "MSI GL63 8RC-274XFR",
      type: "Laptop",
      consumption: 30,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 3,
      name: "PS4",
      type: "Game console",
      consumption: 100,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 4,
      name: "Nintendo Switch",
      type: "Game console",
      consumption: 15,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 5,
      name: "LDLC PC Bazooka",
      type: "Computer",
      consumption: 350,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    }
  ],
  [
    {
      id: 1,
      name: "Behringer audio",
      type: "Hifi",
      consumption: 15,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 2,
      name: "lampe ikea",
      type: "Light",
      consumption: 50,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 3,
      name: "Radio réveil",
      type: "Hifi",
      consumption: 100,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    }
  ],
  [
    {
      id: 1,
      name: "LG 22MT49DF",
      type: "Television",
      consumption: 22,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 2,
      name: "MSI GL63 8RC-274XFR",
      type: "Laptop",
      consumption: 30,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 3,
      name: "PS4",
      type: "Game console",
      consumption: 100,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 4,
      name: "Nintendo Switch",
      type: "Game console",
      consumption: 15,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 5,
      name: "LDLC PC Bazooka",
      type: "Computer",
      consumption: 350,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    }
  ],
  [
    {
      id: 1,
      name: "Behringer audio",
      type: "Hifi",
      consumption: 15,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 2,
      name: "lampe ikea",
      type: "Light",
      consumption: 50,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 3,
      name: "Radio réveil",
      type: "Hifi",
      consumption: 100,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    }
  ],
  [
    {
      id: 1,
      name: "LG 22MT49DF",
      type: "Television",
      consumption: 22,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 2,
      name: "MSI GL63 8RC-274XFR",
      type: "Laptop",
      consumption: 30,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 3,
      name: "PS4",
      type: "Game console",
      consumption: 100,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 4,
      name: "Nintendo Switch",
      type: "Game console",
      consumption: 15,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 5,
      name: "LDLC PC Bazooka",
      type: "Computer",
      consumption: 350,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    }
  ],
  [
    {
      id: 1,
      name: "Behringer audio",
      type: "Hifi",
      consumption: 15,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 2,
      name: "lampe ikea",
      type: "Light",
      consumption: 50,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 3,
      name: "Radio réveil",
      type: "Hifi",
      consumption: 100,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    }
  ] 
]

export const roomObjects = (state = initialState[0], action) => {
  switch(action.type) {
    case 'ROOM_CLICKED': return initialState[action.idx];
    default: return state;
  }
}
