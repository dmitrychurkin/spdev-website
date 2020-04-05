import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class CustomizedDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps;
  }

  render() {
    return (
      <Html lang={this.props.__NEXT_DATA__.props.initialProps.initialLanguage}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomizedDocument;
