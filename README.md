# pino-raven

Raven stream for Pino.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Author](#author)
- [License](#license)

## Installation

```bash
npm install pino-raven --save
```

## Usage

### By using the global Raven client.

```javascript
const pino = require('pino');
const pinoRaven = require('pino-raven');

const logger = pino({}, pinoRaven());
```

### By using a local Raven client.

```javascript
const pino = require('pino');
const pinoRaven = require('pino-raven');
const Raven = require('raven');

const client = new Raven.Client();
const logger = pino({}, pinoRaven({ client }));
```

## Author

Alexandre Breteau - [@0xSeldszar](https://twitter.com/0xSeldszar)

## License

MIT © [Alexandre Breteau](https://seldszar.fr)
