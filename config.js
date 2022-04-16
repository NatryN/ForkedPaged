// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Angel Arias',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good Morning',
  greetingAfternoon: 'Good Afternoon,',
  greetingEvening: 'Good Night,',
  greetingNight: 'Go to sleep',

  // Layout
  bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: 'a151d99dc009fa1841a31220cf2b9cc7', // Write here your API Key
  weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '-15.839150',
  defaultLongitude: '-70.029167',

  // Autochange
  autoChangeTheme: false,

  // Autochabge by OS
  changeThemeByOS: false,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: '1',
      name: 'Mail Personal',
      icon: 'user',
      link: 'https://mail.google.com/mail/u/0/#inbox',
    },
    {
      id: '2',
      name: 'Mail Work',
      icon: 'briefcase',
      link: 'https://mail.google.com/mail/u/1/#inbox',
    },
    {
      id: '3',
      name: 'PUCP Paidea',
      icon: 'layers',
      link: 'https://paideia.pucp.edu.pe/ceprepucp/my/',
    },
    {
      id: '4',
      name: 'PUCP Class',
      icon: 'video',
      link: 'https://pucp.zoom.us/j/91523182486?pwd=NnJwbmVCa2lQbDE0K3c5Y1RxVGp0QT09',
    },
    {
      id: '5',
      name: 'PUCP Prube',
      icon: 'glasses',
      link: 'https://examen.cmec.net.pe/',
    },
    {
      id: '6',
      name: 'CeprePUC',
      icon: 'award',
      link: 'https://pucp.zoom.us/j/94720040182?pwd=NHJqYzNFZnFsSDJza05RWkQzYXhNdz09',
    },
  ],

  secondButtonsContainer: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://www.github.com',
    },
    {
      id: '2',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/',
    },
    {
      id: '3',
      name: 'Facebook',
      icon: 'facebook',
      link: 'https://www.facebook.com',
    },
    {
      id: '4',
      name: 'Reddit',
      icon: 'message-square',
      link: 'https://www.reddit.com/',
    },
    {
      id: '5',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://www.youtube.com',
    },
    {
      id: '6',
      name: 'Instagram',
      icon: 'instagram',
      link: 'https://www.instagram.com',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: 'music',
      id: '1',
      links: [
        {
          name: 'Inspirational',
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        {
          name: 'Classic',
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        {
          name: 'Oldies',
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        {
          name: 'Rock',
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
      ],
    },
    {
      icon: 'coffee',
      id: '2',
      links: [
        {
          name: 'Linkedin',
          link: 'https://www.linkedin.com',
        },
        {
          name: 'Dribbble',
          link: 'https://www.dribbble.com',
        },
        {
          name: 'Trello',
          link: 'https://www.trello.com',
        },
        {
          name: 'Slack',
          link: 'https://www.slack.com',
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: 'binary',
      id: '1',
      links: [
        {
          name: 'Spotify',
          link: 'https://www.spotify.com',
        },
        {
          name: 'Reddit',
          link: 'https://www.reddit.com',
        },
        {
          name: 'Hashnode',
          link: 'https://www.hashnode.com',
        },
        {
          name: 'Pocket',
          link: 'https://www.pocket.com',
        },
      ],
    },
    {
      icon: 'github',
      id: '2',
      links: [
        {
          name: 'Front',
          link: 'https://www.reddit.com/r/Frontend/',
        },
        {
          name: 'Rust',
          link: 'https://www.reddit.com/r/rust/',
        },
        {
          name: 'Go',
          link: 'https://www.reddit.com/r/golang/',
        },
        {
          name: 'Repos',
          link: 'https://github.com/migueravila',
        },
      ],
    },
  ],
};
