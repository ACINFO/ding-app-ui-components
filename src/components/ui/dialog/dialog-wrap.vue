<template>
  <div style="width: 100%; height: 100%;">
      <div class="dialog-wrap"></div>
      <div class="dialog-alert-wrap">
        <div class="dialog-content">
          <slot></slot>
        </div>
      </div>
  </div>
</template>

<style>

  .dialog-wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #787878;
    opacity: 0.85;
    z-index: 999;
  }

  .dialog-alert-wrap {
    z-index: 10000;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .dialog-content {
    margin: 0 auto;
    text-align: center;
    width: 70%;
    min-width: 350px;
  }

  @media screen and (min-width: 720px) {
    .dialog-content {
      width: 500px;
    }
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
