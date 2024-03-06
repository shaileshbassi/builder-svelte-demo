// Create an array of your custom compon ents and their properties
// @ts-nocheck
  import Carousel from "../components/Carousel/carousel.svelte";
  import CardSlider from '../components/CardSlider/SliderCard.svelte'
  import Header from '../components/Header/Header.svelte'
  import TabSection from '../components/TabComponent/TabSection.svelte'
  
  export const CUSTOM_COMPONENTS = [
    {
      component: Carousel,
      name: "Carousel card",
      inputs: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "cardData",
          type: "list",
          subFields: [
            {
              name: "image",
              type: "file",
            },
            {
              name: "heading",
              type: "string",
            },
            {
              name: "description",
              type: "string",
            },
            {
              name: "linkTitle",
              type: "string",
            },
            {
              name: "link",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      component: CardSlider,
      name: 'custom cardSlider',
      inputs: [
        {
          name: 'headerTitle',
          type: 'string',
        },
        {
          name: 'cardList',
          type: 'list',
          subFields: [
            {
              name: 'cardLink',
              type: 'url',
              defaultValue: '/',
            },
            {
              name: 'cardTitle',
              type: 'string',
              defaultValue: 'Title 1'
            },
            {
              name: 'cardDesc',
              type: 'string',
              defaultValue: 'Desc 1'
            },
            {
              name: 'cardImage',
              type: 'file',
              defaultValue: ''
            },
          ],
        },
      ],
    },
    {
      component: Header,
      name: 'Header',
      inputs: [
        {
          name: 'logoName',
          type: 'string',
        },
        {
          name:'image',
          type: "file",
        },
        {
          name:'navLinks',
          type:'list',
          subFields: [
            {
              name:'title',
              type:'string'
            },
            {
              name:'url',
              type:'url'
            }
          ]
        }
      ]
    },
    {
      component: TabSection,
      name: "Tab Section",
      inputs: [
        {
          name: "title",
          type: "string",
        },
        {
          name:"type",
          type:"enum",
          enum: ['Horizontal', 'Vertical']
        },
        {
          name: "description",
          type: "string",
          showIf:  `options.get('type') === 'Vertical'`,
        },
        {
          name: "buttonText",
          type: "string",
          showIf:  `options.get('type') === 'Vertical'`,
        },
        {
          name: "buttonLink",
          type: "string",
          showIf:  `options.get('type') === 'Vertical'`,
        },
        {
          name: "verticalTabItems",
          type: "list",
          showIf:  `options.get('type') === 'Vertical'`,
          subFields: [
            {
              name: "tabTitle",
              type: "string",
            },
            {
              name: "tabHeading",
              type: "string",
            },
            {
              name: "tabDescription",
              type: "string",
            },
            {
              name: "tabVideoOrImage",
              type: "file",
              allowedFileTypes: ["jpeg", "png", "jpg", "svg", "mp4"],
            },
            {
              name: "tabButtonText",
              type: "string",
            },
            {
              name: "tabButtonLink",
              type: "string",
            },
            {
              name: "tabCardItem",
              type: "list",
              subFields: [
                {
                  name: "tabCardTitle",
                  type: "string",
                },
                {
                  name: "tabCardDescription",
                  type: "string",
                },
                {
                  name: "tabCardImage",
                  type: "file",
                  allowedFileTypes: ["jpeg", "png", "jpg", "svg"],
                },
                {
                  name: "tabCardLink",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          name: "horizontalTabItems",
          type: "list",
          showIf:  `options.get('type') === 'Horizontal'`,
          subFields: [
            {
              name: "tabTitle",
              type: "string",
            },
            {
              name: "cardHeading",
              type: "string",
            },
            {
              name: "cardDescription",
              type: "string",
            },
            {
              name: "cardImage",
              type: "file",
              allowedFileTypes: ["jpeg", "png", "jpg", "svg"],
            },
            {
              name: "cardButtonText",
              type: "string",
            },
            {
              name: "cardButtonUrl",
              type: "string",
            },
          ],
        },
      ],
    },
  ];