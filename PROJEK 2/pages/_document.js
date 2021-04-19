import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="#da532c" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta content="5e41b2275db646a5" name="yandex-verification" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
