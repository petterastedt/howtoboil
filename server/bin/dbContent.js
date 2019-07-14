let foods = [
    {
      name: 'rice',
      subHeader: 'A simple guide to boil perfect fluffy rice. No more, no less',
      imgUrls: ["noun_rice_162558_000000.svg", "rice-01.svg", "rice-02.svg"],
      instructions: [
        {
          page1: {
            headline: 0,
            text: 'Jasmin',
          },
          page2: {
            headline: 0,
            text: 'Jasmin',
          }
        }
      ],
      subMenu: true,
      subMenuTitle: 'Select type of rice',
      subMenuItems: [
        {
          id: 0,
          title: 'Jasmin',
          key: 'type'
        },
        {
          id: 1,
          title: 'Basmati',
          key: 'type'
        },
        {
          id: 2,
          title: 'Whole grain',
          key: 'type'
        },
        {
          id: 3,
          title: 'Boil in bag',
          key: 'type'
        }
      ],
      timer: 480
    },
    {
        name: 'potato',
        subHeader: "Let's learn how to boil the perfect potato",
        imgUrls: ["noun_potatoes_663492_000000.svg", "papas-01.svg", "papas-02.svg", "papas-03.svg", "papas-04.svg", "papas-05.svg", "papas-06.svg"],
        instructions: [
          {
            page1: {
              headline: 'First off, peel it!',
              text: 'Start by scrubbing the potatoes with a brush to remove any dirt, then rinse.<br /></br><strong>Optional:</strong> peel them, it really just comes down to personal preference.',
            },
            page2: {
              headline: 'Now cut it.',
              text: 'Cut the potatoes into quarters or cubes to speed up cooking time.',
            },
            page3: {
              headline: 'Then you prepare it',
              text: 'Place potatoes in a sauce pan or pot, add water to cover the tops of the potatoes and add half a teaspoon of salt to the water.',
            },
            page4: {
              headline: "It's boiling time!",
              text: 'Let boil for <strong>12-15 minutes.</strong> Use a fork to check tenderness.',
            },
            page5: {
              headline: 'Now we feast 😋',
              text: 'Pour the cubed potatoes into a colander or use a slotted spoon to remove large pieces of potato from the hot water and place in a bowl.<br /><br />Done, ready to serve! 🥔👍',
            },
            page6: {
                headline: 'Bonus step for the lazy',
                text: 'You can boil potatoes in the microwave by placing the cut potatoes in a microwave-safe bowl, cover the potatoes with water and cover the bowl with plastic wrap. Poke some holes for ventilation. Microwave on high for 5 min, stir, and cook for 5 more min or until tender 😗👌',
              }
          }
        ],
        subMenu: false,
        subMenuTitle: '',
        subMenuItems: null,
        timer: 900
      },
      {
        name: 'egg',
        subHeader: "Hard boiled, soft boiled or in between, we've got you covered!",
        imgUrls: ["noun_Egg_1815808_000000.svg", "egg-01.svg", 'egg-02.svg', 'egg-03.svg', 'egg-04.svg', 'egg-05.svg'],
        instructions: [
          {
            page1: {
              headline: "Let's get started",
              text: 'Place the eggs in a pot and cover them with around an inch (2-3cm) of cold water.',
            },
            page2: {
              headline: "Make it boil",
              text: 'Leave the pot on the stove until the water has reached a rolling boil.',
            },
            page3: {
              headline: "Take it off the stove",
              text: 'Now take the eggs of the stove and place the pot somewhere safe. Keep the hot water inside the pot.',
            },
            page4: {
              headline: "Now we wait",
              text: 'Now we play the waiting game. After about XX minutes, you can pour the hot water away.',
            },
            page5: {
              headline: "Ready to eat",
              text: 'You can now enjoy your perfectly hardboiled/softboiled egg.',
            }
          }
        ],
        subMenu: true,
        subMenuTitle: 'How do you like them?',
        subMenuItems: [
          {
            id: 0,
            title: 'Soft boiled',
            key: 'type'
          },
          {
            id: 1,
            title: 'Medium boiled',
            key: 'type'
          },
          {
            id: 2,
            title: 'Hard boiled',
            key: 'type'
          },
        ],
        timer: 480
      }
  ]

  module.exports = {foods};

//   text: {
//     softboiled: 'Now we play the waiting game. After about <strong>4</strong> minutes, you can pour the hot water away.',
//     mediumboiled: 'Now we play the waiting game. After about <strong>7</strong> minutes, you can pour the hot water away.',
//     hardboiled: 'Now we play the waiting game. After about <strong>10</strong> minutes, you can pour the hot water away.'
// }  