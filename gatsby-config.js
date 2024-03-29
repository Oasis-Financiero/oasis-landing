require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Compara préstamos, seguros y aprende sobre ahorro, inversión y finanzas.`,
    siteUrl: `https://www.oasisfinanciero.com`,
    description: `Compara préstamos, seguros y adquiere conocimientos sobre ahorro, inversión y finanzas en Oasis Financiero, tu socio en el camino hacia la estabilidad financiera.`,
    author: `@edchavezb`,
    keywords: ['ia', 'ahorro', 'finanzas', 'asesor', 'financiero', 'inversión', 'crédito', 'calculadora', 'deuda', 'seguro', 'seguros', 'prestamos', 'préstamos', 'seguro de vida', 'educación financiera', 'finanzas personales', 'información financiera', 'prestamos personales', 'préstamo personal', 'seguros de auto', 'mejores préstamos personales en México', 'mejores seguros de auto en México', 'préstamos personales en línea',]
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    // {
    //   resolve: 'gatsby-plugin-gtag',
    //   options: {
    //     trackingId: 'G-TZERK25DRT',
    //     head: true,
    //     anonymize: true,
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-hotjar`,
    //   options: {
    //     includeInDevelopment: false,
    //     id: 2488279,
    //     sv: 6,
    //   },
    // },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-TZERK25DRT', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        googleTagManager: {
          trackingId: 'GTM-55ZH62G7', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },        
        hotjar: {
          hjid: '2488279',
          hjsv: '6',
          cookieName: 'gatsby-gdpr-hotjar', // default
        },
        // facebookPixel: {
        //   pixelId: '2840879712721447', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-facebook-pixel', // default
        // },
        // tikTokPixel: {
        //   pixelId: 'YOUR_TIKTOK_PIXEL_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-tiktok-pixel', // default
        // },

        // linkedin: {
        //   trackingId: 'YOUR_LINKEDIN_TRACKING_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-linked-in', // default
        // },
        // defines the environments where the tracking should be available  - default is ["production"]
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-smartypants` },
        ],
        remarkPlugins: [require(`remark-slug`)],
      },
    },
    {
      resolve: "gatsby-transformer-json",
      options: {
        path: `content/authors`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `content/authors`,
        name: `content/authors`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `content/posts`,
        name: `content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `content/assets`,
        name: `content/assets`,
      },
    },
    /*     {
          resolve: `gatsby-theme-blog-core`,
          options: {
          },
        }, */
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal["400"],
        display: `minimal-ui`,
        icon: `src/images/logos/logo-rombo.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`
  ],
};
