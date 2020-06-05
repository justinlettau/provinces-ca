[![NPM Version](https://badge.fury.io/js/provinces-ca.svg)](https://badge.fury.io/js/provinces-ca)
[![CI](https://github.com/justinlettau/provinces-ca/workflows/CI/badge.svg)](https://github.com/justinlettau/provinces-ca/actions)
[![Dependency Status](https://david-dm.org/justinlettau/provinces-ca.svg)](https://david-dm.org/justinlettau/provinces-ca)
[![Dev Dependency Status](https://david-dm.org/justinlettau/provinces-ca/dev-status.svg)](https://david-dm.org/justinlettau/provinces-ca?type=dev)

# CA Provinces

List of CA provinces and territories.

# Installation

```bash
npm install provinces-ca --save
```

# Usage

```js
import provinces from 'provinces-ca';

console.log(provinces);
// => all provinces and territories

const example1 = provinces.filter((x) => !x.territory);
console.log(example1);
// => provinces only

const example2 = provinces.map((x) => x.abbreviation);
console.log(example2);
// => all provinces/territory abbreviations
```

The default export from `states-us` is an array of object with the following structure:

| Property       | Type      | Description                               | Example   |
| -------------- | --------- | ----------------------------------------- | --------- |
| `name`         | `string`  | Province name.                            | `Ontario` |
| `abbreviation` | `string`  | Province abbreviation.                    | `ON`      |
| `territory`    | `boolean` | Indicates if the province is a territory. | `false`   |

# Development

```
npm install
npm run build
```
