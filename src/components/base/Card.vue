<template>
  <div class="">
    <div v-if="caption" class="card-caption">
      {{caption}}
    </div>
    <div class="base-card">
      <div v-if="title" class="card-title">
        {{title}}
      </div>
      <div style="width: 100%; word-break: break-all">
        <slot></slot>
      </div>
    </div>

  </div>
</template>

<style scoped>
  .base-card {
    display: block;
    background-color: #fff;
    min-height: 1.5rem;
    padding: 0.5rem;
    /*box-shadow: 0 0 2px #aaa;*/
    margin: 0 0.5rem 0.5rem;
    position: relative;
  }

  .card-caption, .card-title {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .card-caption {
    font-size: 0.75rem;
    color: #acacac;
    padding: 0.5rem 0.7rem;
  }

  .card-title{
    font-size: 0.75rem;
    padding: 0.35rem 0.25rem 0.55rem;
    color: #787878;
  }
</style>

<script>
  export default {
    props: {
      caption: String,
      title: String
    },
    data () {
      return {
      }
    },
    methods: {

    }
  }
</script>
