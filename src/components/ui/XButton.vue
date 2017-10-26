<template>
  <div class="ui-xbutton"
       :style="{backgroundColor: bgColor}"
       :class="{inline: isInline}">
    <div class="ui-xbutton-value">
      <slot></slot>
    </div>
  </div>
</template>

<style>

  .ui-xbutton {
    margin: 0.5rem;
    min-width: 4.2rem;
    background-color: #4AD763;
    padding: 0.75rem 0.8rem;
  }
  .inline {
    display: inline-block;
  }

  .ui-xbutton:active{
    box-shadow: 0 0 2px #acacac;
  }

  .ui-xbutton-value {
    text-align: center;
    color: #fff;
    font-size: 0.85rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    word-break: break-all;
  }
</style>

<script>
  export default {
    props: {
      isInline: Boolean,
      bgColor: String
    },
    data () {
      return {
      }
    },
    methods: {

    }
  }
</script>
