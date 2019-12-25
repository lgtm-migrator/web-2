const contentSecurityPolicy = [
  `base-uri 'self';`,
  `connect-src 'self';`,
  `default-src 'self';`,
  `form-action 'self';`,
  `font-src 'self' data:;`,
  `img-src 'self' data:;`,
  `object-src 'none';`,
  `script-src 'self' 'unsafe-inline';`,
  `script-src-elem unpkg.com;`,
  `style-src 'self' 'unsafe-inline';`,
]

module.exports = {
  siteMetadata: {
    title: `Educodar - Aulas de programação grátis para jovens`,
    titleTemplate: `%s · Educodar`,
    siteUrl: `https://educodar.com.br`,
    description: `Projeto de ensino de programação básica e exposição a T.I. para estudantes de escolas de comunidades. Iniciativa sem fins lucrativos. Cursos e alimentação gratuitos.`,
    image: "/images/logo.png",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        dir: `ltr`,
        lang: `pt-br`,
        itemProp: ``,
        itemType: `http://schema.org/WebPage`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Educodar`,
        short_name: `Educodar`,
        start_url: `/`,
        background_color: `#00BCCD`,
        theme_color: `#0078BF`,
        icon: `src/images/icon.png`,
        display: `minimal-ui`,
        scope: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            `Content-Security-Policy: ${contentSecurityPolicy.join(" ")},
            "Feature-Policy: ambient-light-sensor 'self'; autoplay 'self'; camera 'none'; encrypted-media 'self'; fullscreen 'none'; geolocation 'self'; gyroscope 'self'; magnetometer 'none'; microphone 'none'; midi 'none'; payment 'none'; speaker 'self'; sync-xhr 'self'; usb 'none'; vr 'none'",
            "Referrer-Policy: no-referrer",
            "X-Content-Type-Options: nosniff",
            "X-Frame-Options: DENY",
            "X-XSS-Protection: 1; mode=block",`,
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [{ family: `Nunito`, subsets: [`latin`] }],
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: ["/"] }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
  ],
}
