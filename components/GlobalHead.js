import Head from 'next/head'
import { string } from 'prop-types'

const GlobalHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta property="og:image" content="assets/img/header-logo.png" />
    <meta property="og:image:width" content="140" />
    <meta property="og:image:height" content="180" />
    <meta property="og:site_name" content="UtahJS Raffle" />
    <meta
      property="og:description"
      content="UtahJS Confrence Raffle, used to pick random seat in theater"
    />
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="/favicons/apple-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="/favicons/apple-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/favicons/apple-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="/favicons/apple-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/favicons/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/favicons/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/favicons/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/favicons/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicons/apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/favicons/android-icon-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="/favicons/favicon-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicons/favicon-16x16.png"
    />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta
      name="msapplication-TileImage"
      content="/favicons/ms-icon-144x144.png"
    />
    <meta name="theme-color" content="#f9e034" />
  </Head>
)

GlobalHead.propTypes = {
  title: string,
}

GlobalHead.defaultProps = {
  title: 'UtahJS Raffle',
}

export default GlobalHead
