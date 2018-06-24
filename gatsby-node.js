/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.modifyWebpackConfig = function({ config }) {
  config.merge({
    node: {
      dns: 'empty',
      net: 'empty',
    },
  })
  return config
}
