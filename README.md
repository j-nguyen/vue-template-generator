# VueJS Component Template Generator
A simple CLI tool, used to generate VueJS components. (Compatiable with VueJS 2+)

**Major credits to these guys!:**
[Forked from this repo](https://github.com/NetanelBasal/vue-generate-component)

## Installation

### Global

```js
npm install -g vue-template-generator
```

### Local Package

```js
npm install --save-dev vue-template-generator
```

Call either by going through the directory, `./node_modules/vue-template-generator/dist/vgc.js`, or you can create a shortcut script through your own `package.json`.

## Usage

### Help
```bash
vgc help
```

Will give you the help commands.

### Scaffolding

```bash
vgc scaffold example
```
Will generate a vue file: `index`, `create`, `update`, and `edit`.

**index/edit/update/create.vue**

```js
<template>
</template>

<script>
export default {
  name: 'ExampleIndex',
  data() {
    return {
      
      }
  },
  created() {

  },
};
</script>

<style lang="scss" scoped>
</style>
```

### Generating a single component

```bash
vgc component example src/component
```

Will generate a file named `example.vue`, in `src/component`.

**example.vue**

```js
<template>
</template>

<script>
export default {
  name: 'ExampleIndex',
  data() {
    return {
      
      }
  },
  created() {

  },
};
</script>

<style lang="scss" scoped>
</style>
```

# Credits

- [Inspired by these guys](https://github.com/NetanelBasal/vue-generate-component)