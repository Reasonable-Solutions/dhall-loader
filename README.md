# Dhall-loader

Have you ever had a feeling that css is morally equivalent to `String`?
Is sass just some syntax away from being a bunch of string concatenation and sed?

Hopefully, one day there will be a dhall-to-css package.

## Usage
This package isn't on npm, you will have to clone the repo and point webpack at it
using the `resolveLoader` property in `webpack.config.js`

There is a dependency on dhall-text, it should be on your path somehow.

This loader pipes a file into dhall-to-text. This means that you could use it with
`style-loader` and `css-loader` to turn dhall expressions of the type `Text` into styles.
 like this:
 ```js
 ...
{
  test: /\main.dhall$/,
  use: [ "style-loader", "css-loader", "dhall-loader" ]
}
```
