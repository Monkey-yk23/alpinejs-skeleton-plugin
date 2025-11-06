# Alpine JS Skeleton

A lightweight Alpine.js plugin that adds a skeleton loading effect (pulse animation) to elements while data is being fetched or rendered.
It mimics Tailwind’s `animate-pulse` using pure JavaScript and inline styles.
## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-skeleton@latest/dist/cdn.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@latest/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
npm install -D alpinejs-skeleton

yarn add -D alpinejs-skeleton
```

```js
import Alpine from 'alpinejs'
import skeleton from 'alpinejs-skeleton'

Alpine.plugin(skeleton)

Alpine.start()
```

## Example

### Basic

```
<div x-data="{ loaded: true }">
  <div
    x-skeleton="loaded"
    style="width:200px;height:20px;border-radius:4px;"
  ></div>

  <template x-if="loaded">
    <p>Content loaded successfully.</p>
  </template>

  <button @click="loaded = !loaded">Toggle Loaded</button>
</div>
```
When loaded is true, the gray pulsing skeleton appears.
When loaded becomes false, the animation and background are removed.