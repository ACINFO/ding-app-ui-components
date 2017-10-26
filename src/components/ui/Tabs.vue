<template>
  <div class="ui-tabs">
      <div v-for="(tab, idx) in tabs"
        class="tab-item"
        :class="{'tab-item-active': index == idx}"
        @click="changed(idx)"
      >{{tab}}</div>
  </div>
</template>

<style>
  .ui-tabs {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .ui-tabs :first-child{
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    border-left: 1px solid #027FFF;
  }
  .ui-tabs :last-child {
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
  }

  .tab-item {
    padding: 0.5rem 1.75rem;
    font-size: 0.85rem;
    background-color: #fff;
    border: 1px solid #027FFF;
    border-left: none;
  }
  .tab-item-active {
    background-color: #027FFF;
    color: #fff;
  }
</style>

<script>
  export default {
    name: 'tabs',
    model: {
      prop: 'index'
    },
    props: {
      index: Number,
      tabs: Array
    },
    data () {
      return {
        currentIndex: this.index || 0
      }
    },
    methods: {
      changed: function (idx) {
        this.currentIndex = idx
        this.$emit('input', idx)
      }
    }
  }
</script>
