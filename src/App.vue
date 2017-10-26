<template>
  <div id="app">
    <tabs
      :tabs="tabs"
      v-model="index"
    ></tabs>

    <user-card caption="个人信息卡片" title="个人信息" avatar="https://avatars2.githubusercontent.com/u/33087112?s=200&v=4"></user-card>
    <user-card title="个人信息" avatar="https://avatars2.githubusercontent.com/u/33087112?s=200&v=4"></user-card>
    <user-card caption="个人信息卡片" avatar="https://avatars2.githubusercontent.com/u/33087112?s=200&v=4"></user-card>
    <card caption="标题" title="提示">asdfaddfadfadfasdfasdfadsfasdfasdfasdfadsfasdfadsfdasfdasfasdfsf</card>
    <card caption="" title="提示">asdfaddfadfadfasdfasdfadsfasdfasdfasdfadsfasdfadsfdasfdasfasdfsf</card>
    <x-button :isInline="true">确定</x-button>
    <x-button :isInline="false">真的确定好了吗</x-button>
    <x-button bgColor="#f00" :isInline="false">真的确定好了吗</x-button>
    <list-view
      :listSet="lists"
      caption="测试列表"
      footer="没有更多了"
      itemMargin="0.5rem"
    ></list-view>

    <!--<router-view/>-->
  </div>
</template>

<script>
  import Card from './components/base/Card.vue'
  import UserCard from './components/ui/UserCard.vue'
  import XButton from './components/ui/XButton.vue'
  import ListView from './components/ui/ListView.vue'
  import Tabs from './components/ui/Tabs.vue'

  export default {
    name: 'app',
    components: {
      Card,
      UserCard,
      XButton,
      ListView,
      Tabs
    },
    data () {
      return {
        index: 0,
        tabs: [
          '主页',
          '哈哈',
          '我的'
        ],
        lists: [{
          title: '艾伦·麦席森·图灵',
          content: '艾伦·麦席森·图灵（Alan Mathison Turing，1912年6月23日－1954年6月7日），' +
          '英国数学家、逻辑学家，被称为计算机科学之父，人工智能之父。[1] ',
          image: 'https://avatars2.githubusercontent.com/u/33087112?s=200&v=4'
        }, {
          title: '艾伦·麦席森·图灵',
          content: '艾伦·麦席森·图灵 ',
          image: 'https://avatars2.githubusercontent.com/u/6651400?s=400&v=4'
        }, {
          title: '艾伦·麦席森·图灵（Alan Mathison Turing 1912年6月23日',
          content: '艾伦·麦席森·图灵（Alan Mathison Turing，1912年6月23日－1954年6月7日），英国' +
          '数学家、逻辑学家，被称为计算机科学之父，人工智能之父。[1] '
        }, {
          content: '内容内容'
        }, {
          title: '标题4'
        }]
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #efefef;
}
</style>
