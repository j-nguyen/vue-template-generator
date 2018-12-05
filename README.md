# VueJS Component Template Generator
A simple CLI tool, used to generate VueJS components.

**Major credits to these guys!:**
[Forked from this repo](https://github.com/NetanelBasal/vue-generate-component)

## Installation
```js
npm install -g vue-template-generator
```

## Usage

### Create new component

```bash
vgc footer
```
Will generate a vue file:

**footer.vue**

```javascript
<template>
</template>

<script>
export default {
  name: '{{name | kebabCase}}',
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