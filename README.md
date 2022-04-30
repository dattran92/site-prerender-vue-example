# Site prerender vue Example

This repo is to demonstrate the usage of [site-prerender](https://www.npmjs.com/site-prerender) package with a VueJS project

## How it works

### Preparation
The VueJS example application (before prerender) is run under [src](./src)

To run it, use a static site solution like [serve](https://www.npmjs.com/package/serve)

```
npm i -g serve
```

Then serve the page
```
serve ./src
```

You are now able to access the project via http://localhost:3000 (3000 is the default port, It may differs depends on your local setup)

### Prerender

Install the packages
```
npm install
```

Prerender to [dist](./dist)
```
npm run prerender
```

Now, the prerender can be served under dist folder

```
serve ./dist
```
