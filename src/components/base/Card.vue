<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style>
  .base-card {
    background-color: #fff;
    min-height: 1.5rem;
    padding: 0.5rem;
    box-shadow: 0 0 2px #aaa;
    margin: 0 1rem 1rem;
    

  }
</style>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {

    }
  }
</script>
