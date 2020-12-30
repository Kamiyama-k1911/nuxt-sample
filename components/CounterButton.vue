<template>
  <v-btn class="mx-1" fab dark v-bind:color="color" v-on:click="click">
    <v-icon dark> mdi-{{ kind }} </v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    kind: {
      type: String,
      default: 'plus',
    },
    color: {
      type: String,
      default: 'blue',
    },
  },
  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>
