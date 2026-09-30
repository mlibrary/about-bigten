// React 19 no longer ships the UMD files that gatsby-plugin-decap-cms copies.
const bundleCmsDependencies = config => {
  config.externals = []
  config.plugins = config.plugins.filter(plugin =>
    ![`CopyPlugin`, `HtmlWebpackTagsPlugin`].includes(plugin.constructor.name)
  )
}

module.exports = {
  siteMetadata: {
    title: `Big Ten Open Books`,
    description: `Collection of open ebook titles publishing by Big Ten University Presses`,
    author: `Big Ten Academic Alliance`,
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      // for netlify
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'assets',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-21GRSDGGG9`],
        gtagConfig: {
          anonymize_ip: false,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          charset: false,
        },
      }
    },
    {
      resolve: `gatsby-plugin-decap-cms`,
      options: {
        manualInit: true,
        enableIdentityWidget: false,
        modulePath: `${__dirname}/src/cms/cms.js`,
        customizeWebpackConfig: bundleCmsDependencies,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/btaa-blue.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            // options: {
            //   name: 'assets',
            // },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ]
      },
    },
  ],
}
