# Boilerplate for Koa, TypeScript and React for server side templating

A simple boilerplate that integrates the [Koa framework](http://koajs.com) with [TypeScript](http://www.typescriptlang.org) and [React.js for templating](https://medium.com/@velmu/react-is-gaining-ground-as-a-universal-server-side-templating-system-26fe02eebe12).

Note that this is not pushing React for the front end, but purely for a back end templating. If you want something universal that runs the same code on the server and the browser, you can take a look at [Next.js](https://github.com/zeit/next.js/) or other similar solutions. A good place to start is reading about [Building Decoupled Sites and Apps with GraphQL and Next.js](https://malloc.fi/building-decoupled-sites-and-apps-with-graphql-and-next-js).

I might use this in the future, so it's mostly a personal backup. No warranty whatsoever.

## Installation

If you want to try it for development, first install [Nodemon](https://nodemon.io/), [ts-node](https://github.com/TypeStrong/ts-node) and [Yarn](https://yarnpkg.com/).

Install dependencies from NPM with yarn and then run nodemon (which in turn restarts ts-node on changes):

```
$ yarn
$ yarn run dev
```

### Production

For production environments you need to first compile the TypeScript source to JavaScript (to `build/`) and then run the app:

```
$ yarn run build
$ yarn run start
```

Note: Please note that when running in production, the environment variable `NODE_ENV` should be set to `production` as this improves [the performance Server Side Rendering of React](https://malloc.fi/performance-cost-of-server-side-rendered-react-node-js) significantly.