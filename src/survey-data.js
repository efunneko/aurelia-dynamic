
export default {
  name: "This is a test survey",
  description: "Ask about this and that",
  pages: [
    {
      name: "Page 1",
      description: "Ask about address",
      group: {
        name:   "Home address",
        border: true,
        items: [
          {
            type: "text",
            name: "text input",
            value: "",
          },
          {
            type: "select",
            options: [
              "one",
              "two",
              "three",
              "three-3",
            ],
            name: "select",
            value: "",
          },
          {
            type: "radio",
            options: [
              "one-r",
              "two-r",
              "three-r"
            ],
            name: "radio",
            value: "",
          },
          {
            type: "checkbox-grid",
            columns: [
              {name: "With Ketchup"},
              {name: "With Mustard"},
              {name: "With Relish"}
            ],
            rows: [
              {name: "Hamburger"},
              {name: "Hotdog"},
              {name: "Fries"},
              {name: "Ice Cream"},
              {name: "A big plate of well cooked sausages"}
              ],
            name: "condiments",
            value: "",
          },
          {
            type: "text",
            name: "another text input",
            value: "",
          },

        ]
      }
    },
    {
      name: "Page 2",
      description: "Other details",
      group: {
        name:   "Home address",
        border: true,
        items: [
          {
            type: "text",
            name: "text input",
            value: "",
          },
          {
            type: "select",
            options: [
              "one",
              "two",
              "three"
            ],
            name: "select",
            value: "",
          },
          {
            type: "radio",
            options: [
              "one-r",
              "two-r",
              "three-r"
            ],
            name: "radio",
            value: "",
          },
          {
            type: "text",
            name: "another text input",
            value: "",
          },

        ]
      }
    },
    {
      name: "Lots of radios",
      description: "Other details",
      group: {
        name:   "Some information",
        border: true,
        items: [
          {
            type: "radio",
            options: [
              "option-1",
              "option-2",
              "option-3",
              "option-4",
              "option-5",
              "option-6",
              "option-7",
              "option-8",
              "option-9",
              "option-10",
              "option-11",
              "option-12",
              "option-13",
              "option-14",
              "option-15",
              "option-16",
              "option-17",
              "option-18",
              "option-19",
              "option-20",
            ],
            name: "radio",
            value: "",
          },
          {
            type: "select",
            options: [
              "one",
              "two",
              "three"
            ],
            name: "select",
            value: "",
          },
          {
            type: "radio",
            options: [
              "one-r",
              "two-r",
              "three-r"
            ],
            name: "radio",
            value: "",
          },
          {
            type: "text",
            name: "another text input",
            value: "",
          },

        ]
      }
    },
  ]

};
