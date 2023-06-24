import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Full Stack Developer looking for a job, open to work"
        />
        <meta
          name="keywords"
          content="Full Stack Web Developer, Javascript, Typescript, React, Redux, Node.Js, Express, Next.Js, PostgreSQL, MongoDB"
        />
      </Head>
      <body className="bg-gradient-to-r from-blue to-blue-300  bg-fixed dark:from-dark-100 dark:to-dark-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
