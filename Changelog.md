# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2025-09-07
### Added
- Initial release of **@livyn/type**.
- Core utilities:
  - `dataType` – Precise type detection for primitives, built-in objects, functions, and custom classes.
  - `isType` – Check if a value matches an expected type.
  - `assertType` – Assert value type with optional negation, throws `TypeError` on mismatch.
  - `toType` – Convert values to a specific type or all supported types.
- Converters:
  - `toNumber`
  - `toBigInt`
  - `toBoolean`
  - `toString`
  - `toArray`
  - `toDate`
  - `toObject`
  - `toRegExp`
- Supports all standard JavaScript types:
  - Primitives: `string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`
  - Built-in objects: `Array`, `Date`, `RegExp`, `Map`, `Set`, `Promise`
  - Functions: regular, async, generator
  - Custom classes
- Full ES Modules (ESM) support, Node.js >=18
- Example scripts for testing all converters and type utilities.

### Changed
- N/A

### Fixed
- N/A

### Deprecated
- N/A

### Removed
- N/A
