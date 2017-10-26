<template>
  <div class="ui-listview">
    <div class="listview-caption" v-if="caption">{{caption}}</div>
    <div class="listview-wrap">
      <div class="listview-item"
           :style="{marginBottom: itemMargin}"
           v-for="item in listSet">
        <div class="item-image" v-if="item.image">
          <img :src="item.image"/>
        </div>
        <div class="item-body">
          <div v-if="item.title" class="item-title">{{item.title}}</div>
          <div v-if="item.content" class="item-content">{{item.content}}</div>
        </div>
      </div>
    </div>
    <div class="listview-footer" v-if="footer">{{footer}}</div>
  </div>
</template>

<style>

  .listview-caption {
    font-size: 0.95rem;
    color: #acacac;
    padding: 0.35rem 0.65rem;
  }
  .listview-footer {
    font-size: 0.75rem;
    color: #acacac;
    padding: 0.2rem;
    text-align: center;
  }
  .listview-wrap {
    padding: 0.5rem;
    padding-bottom: 0;
  }
  .listview-wrap .listview-item {
    padding: 0.5rem 0.3rem;
    border-bottom: 1px solid #efefef;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .listview-item .item-image {
    max-width: 5rem;
  }
  .listview-item .item-body {
    flex: 1;
    width: 100%;
  }
  .item-image img {
    width: 5rem;
  }

  .listview-item .item-title {
    font-size: 1.2rem;
    padding: 0.35rem;
    font-weight: 400;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .listview-item .item-content {
    font-size: 0.95rem;
    padding: 0.3rem 0.45rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

</style>

<script>
  export default {
    props: {
      caption: String,
      listSet: Array,
      footer: String,
      itemMargin: String
    },
    data () {
      return {
      }
    },
    methods: {

    }
  }
</script>
