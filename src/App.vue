<template>
  <div id="app">
    <tabs
      :tabs="tabs"
      v-model="index"
    ></tabs>

    <toast
      :show="showToast"
      :delay="1"
      @close="toastClosed"
      content="这是一个toast, 一个很长很长很长很长很长很长很长很长的Toast"
    >
    </toast>

    <dialog-alert
      :show="showDialog"
      content="这是一个可爱的提示框, 你觉得怎么样呢, 哈哈哈哈"
      @ok="ok"></dialog-alert>

    <dialog-confirm
      :show="showConfirmDialog"
      content="我是一个真正的确认框，要点确认按钮哦, :-), <br /> 这是一个html标签测试，<div> 事实证明不可以使用 </div>"
      @ok="ok"
      @cancel="ok"
    >
    </dialog-confirm>

    <user-card caption="个人信息卡片" title="个人信息" avatar="https://avatars2.githubusercontent.com/u/33087112?s=200&v=4"></user-card>
    <user-card title="个人信息" avatar="https://avatars2.githubusercontent.com/u/33087112?s=200&v=4"></user-card>
    <user-card caption="个人信息卡片" avatar="https://avatars2.githubusercontent.com/u/33087112?s=200&v=4"></user-card>
    <card caption="标题" title="提示">asdfaddfadfadfasdfasdfadsfasdfasdfasdfadsfasdfadsfdasfdasfasdfsf</card>
    <card caption="" title="提示">asdfaddfadfadfasdfasdfadsfasdfasdfasdfadsfasdfadsfdasfdasfasdfsf</card>
    <x-button :isInline="true" :mini="true">请求提交</x-button>
    <x-button :isInline="true">确定</x-button>
    <x-button :isInline="false">真的确定好了吗</x-button>
    <x-button bgColor="#f00" :isInline="false">真的确定好了吗</x-button>
    <list-view
      :debug="true"
      :listSet="lists"
      caption="测试列表"
      footer="没有更多了"
      itemMargin="0.5rem"
      @itemClicked="itemClicked"
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

  import Toast from './components/ui/toast/toast.vue'

  import DialogAlert from './components/ui/dialog/dialog-alert.vue'

  import DialogConfirm from './components/ui/dialog/dialog-confirm.vue'

  export default {
    name: 'app',
    components: {
      Card,
      UserCard,
      XButton,
      ListView,
      Tabs,
      DialogAlert,
      DialogConfirm,
      Toast
    },
    data () {
      return {
        showToast: false,
        index: 0,
        showDialog: false,
        showConfirmDialog: false,
        frames: [{
          image: 'https://avatars2.githubusercontent.com/u/33087112?s=200&v=4',
          caption: '艾伦·麦席森·图灵（Alan Mathison Turing，1912年6月23日－1954年6月7日）'
        }, {
          image: 'https://cn.vuejs.org/images/logo.png',
          caption: '艾伦·麦席森·图灵（Alan Mathison Turing，1912年6月23日－1954年6月7日）'
        }, {
          image: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3938135949,2352115974&fm=173&s=90019D5F4763471984E4E9D703008032&w=500&h=333&img.JPEG',
          caption: '艾伦·麦席森·图灵（Alan Mathison Turing，1912年6月23日－1954年6月7日）'
        }],
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
    },
    created: function () {
      this.$toast.show({
        content: 'this is a new toast'
      })
    },
    methods: {
      itemClicked (index) {
        console.log('clicked index :%d', index)
        if (index % 2 === 0) {
          this.showDialog = !this.showDialog
        } else {
          this.showConfirmDialog = !this.showConfirmDialog
        }
      },
      ok () {
        this.showToast = true

        this.showDialog = false
        this.showConfirmDialog = false

//        this.$loading.show({
//          loadingType: 1
//        })
//        let _this = this
//        setTimeout(function () {
//          _this.$loading.hide()
//        }, 3000)
      },
      toastClosed () {
        this.showToast = false
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
