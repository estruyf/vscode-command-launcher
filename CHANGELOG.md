# Change Log

## [0.0.2]

- Added support for commands that take multiple arguments via the `args0`, `args1`, ... query parameters. Leave out an index to pass `undefined` for that position.
- Commands are now executed without arguments when no `args` are provided, instead of receiving `null`.

## [0.0.1]

- Initial release