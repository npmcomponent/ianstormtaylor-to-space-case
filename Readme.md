*This repository is a mirror of the [component](http://component.io) module [ianstormtaylor/to-space-case](http://github.com/ianstormtaylor/to-space-case). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/ianstormtaylor-to-space-case`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# to-space-case

  Convert a string to a space case.

## Installation

    $ component install ianstormtaylor/to-space-case
    $ npm install to-space-case

## Example

```js
var space = require('to-space-case');

space('camelCase');  // "camel case"
space('snake_case'); // "snake case"
space('dot.case');   // "dot case"
```

## API

### toSpaceCase(string)
  
  Returns the space-case variant of a `string`.

## License

  MIT
