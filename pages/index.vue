<template>
  <div class="container">
    <div class="number">{{ count }}</div>
    <button class="button" v-on:click="plus">+</button>
    <button class="button" v-on:click="minus">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    plus() {
      this.count += 1
    },
    minus() {
      this.count -= 1
    },
  },
}
</script>
<style lang="scss">
.container {
  .number {
    font-size: 64px;
  }

  .button {
    font-size: 32px;
    border: 2px solid white;
    width: 48px;
    height: 48px;
    border-radius: 4px;
  }
}
</style>
