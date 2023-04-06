## Usage

Install package:

```sh
# npm
npm install @michilabs/sender-js

# yarn
yarn add @michilabs/sender-js

# pnpm
pnpm install @michilabs/sender-js
```

Import:

```js
// ESM
import { createClient } from '@michilabs/sender-js'

// CommonJS
const { createClient } = require('@michilabs/sender-js')
```

Example:

```js
const sender = createClient('<your_access_token>')

const data = await sender.subscribers.list()
```

## Available resources

-   Subscribers (`subscribers`)
-   Groups (`groups`)
-   Segments (`segments`)
-   Fields (`fields`)
-   Statistics (`statistics`)
-   Campaigns (`campaigns`)
-   Workflows (`workflows`)

## 💻 Development

-   Clone this repository
-   Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
-   Install dependencies using `pnpm install`
-   Run interactive tests using `pnpm dev`

## License

Made with 💙

Published under [MIT License](./LICENSE).
