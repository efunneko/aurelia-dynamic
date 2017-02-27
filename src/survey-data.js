
export default {
  name: "This is a test survey",
  description: "Ask about this and that",
  achievements: [
    {
      name: "Test 1",
      score: 5,
      level: "common",
      requirements: [
        {
          name: "number-input",
          type: "greater-than",
          value: 0
        },
        {
          name: "number-grid",
          type: "grid-column-greater-than",
          column: 0,
          value: -1
        }
      ]
    }
  ],
  pages: [
    {
      name: "Page 1",
      backSymbol: "eye",
      description: "Ask about address",
      group: {
        name:   "Home address",
        border: true,
        items: [
          {
            type: "text",
            name: "text input",
          },
          {
            type: "number",
            scoreType: "scale",
            scoreData: [
              {upTo: 10, scale: 1},
              {upTo: 20, scale: 0.5},
              {upTo: 40, scale: 0.25},
              {upTo:100, scale: 0.125}
            ],
            name: "number-input",
          },
          {
            type: "number-grid",
            scoreType: "scale",
            scoreData: [
              {upTo: 10, scale: 1},
              {upTo: 20, scale: 0.5},
              {upTo: 40, scale: 0.25},
              {upTo:100, scale: 0.125}
            ],
            columns: [
              {name: "Inside",  scale: 1},
              {name: "Outside", scale: 1},
            ],
            rows: [
              {name: "Balls",  scale: 1},
              {name: "Chairs", scale: 2},
              {name: "Desks",  scale: 3},
              {name: "Stools", scale: 4},
            ],
            name: "number-grid",
          },
          {
            type: "select",
            options: [
              {name: "--choose-one--", scoreData: 0},
              {name: "one", scoreData: 1},
              {name: "two", scoreData: 2},
              {name: "three", scoreData: 3},
              {name: "three-3", scoreData: 4},
            ],
            name: "select-on-page-1",
          },
          {
            type: "radio",
            options: [
              {name: "one-r", scoreData: 0},
              {name: "two-r", scoreData: 2},
              {name: "three-r", scoreData: 4},
            ],
            name: "radio-on-page-1",
          },
          {
            type: "checkbox-grid",
            columns: [
              {name: "With Ketchup", scoreData: 1},
              {name: "With Mustard", scoreData: 2},
              {name: "With Relish", scoreData: 3}
            ],
            rows: [
              {name: "Hamburger", scoreData: 1},
              {name: "Hotdog", scoreData: 2},
              {name: "Fries", scoreData: 3},
              {name: "Ice Cream", scoreData: 4},
              {name: "A big plate of well cooked sausages", scoreData: 5}
              ],
            name: "condiments",
          },
          {
            type: "text",
            name: "another text input",
          },

        ]
      }
    },
    {
      name: "Page 2",
      backSymbol: "venus-mars",
      description: "Other details",
      group: {
        name:   "Home address",
        border: false,
        items: [
          {
            type: "group",
            border: true,
            name: "Test group",
            items: [
              {
                type: "select",
                options: [
                  {name: "cat", scoreData: 1},
                  {name: "dog", scoreData: 2},
                  {name: "horse", scoreData: 3}
                ],
                name: "animal",
              },
              {
                type: "radio",
                options: [
                  {name: "pizza", scoreData: 1},
                  {name: "hotdog", scoreData: 2},
                  {name: "poutine", scoreData: 3},
                ],
                name: "food",
              },
            ]
          },
          {
            type: "group",
            border: true,
            name: "Test group 2",
            items: [
              {
                type: "text",
                name: "text input",
              },
              {
                type: "select",
                options: [
                  {name: "one", scoreData: 1},
                  {name: "two", scoreData: 2},
                  {name: "three", scoreData: 3}
                ],
                name: "select-on-page-2",
              },
              {
                type: "radio",
                options: [
                  {name: "one-r", scoreData: 1},
                  {name: "two-r", scoreData: 1},
                  {name: "three-r", scoreData: 1},
                ],
                name: "radio-on-page-2",
              },
              {
                type: "text",
                name: "another text input",
              },
            ]
          }
        ]
      }
    },
    {
      name: "Lots of radios",
      backSymbol: "heart-o",
      description: "Other details",
      group: {
        name:   "Some information",
        border: true,
        items: [
          {
            type: "text",
            name: "another text input",
          },

        ]
      }
    },
  ]

};
