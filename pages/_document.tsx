import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomizedDocument extends Document {
  render() {
    return (
      <Html lang={this.props.__NEXT_DATA__.props.initialProps.initialLanguage}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="theme-color" content="#000000" />
          {/* TODO: please add real description here */}
          <meta name="description" content="Please insert real description here" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          {/* TODO: please replace Dmitry's Google Maps API key with real production key */}
          <link href="//fonts.googleapis.com/css?family=Montserrat:400,500,700|Roboto&display=swap" rel="stylesheet" />
          <script src="//maps.googleapis.com/maps/api/js?key=AIzaSyD-sDS3tDFV1ftKaIM6egPLu3_SHfmL7FI&libraries=places,geometry" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomizedDocument;
