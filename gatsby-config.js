module.exports = {
  siteMetadata: {
    title: 'TIL: Today I Learned',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-gsheets',
      options: {
        documentId: '1jdLsyKSwUYn18XU7lUPsPhpRwA-HhKi8jd5-rVdIKhc',
        credentials: require('./secret.json'),
        types: [
          {
            type: 'Event',
            sheet: 'Events',
            map: sheet => ({
              ...sheet,
              venue___NODE: sheet.venue,
            }),
          },
          {
            type: 'Venue',
            sheet: 'Venues',
          },
        ],
      },
    },
  ],
}
