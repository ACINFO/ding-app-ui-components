<template>
  <transition name="fade">
    <div class="ui-toast" v-if="visible">
      <div class="ui-toast-content">{{content}}</div>
    </div>
  </transition>

</template>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
.ui-toast {
  position: fixed;
  bottom: 3.9rem;
  z-index: 999;
  text-align: center;
  left: 2rem;
  right: 2rem;
}
.ui-toast .ui-toast-content {
  display: inline-block;
  width: auto;
  background-color: #787878;
  padding: 0.55rem 0.7rem;
  color: #fff;
  border-radius: 1rem;
}
</style>

<script>
  export default {
    props: {
      delay: {
        type: Number,
        default: 3
      },
      show: {
        type: Boolean,
        default: false
      },
      content: {
        type: String,
        default: 'toast'
      }
    },
    data () {
      return {
        visible: this.show
      }
    },
    methods: {
      __autoClose () {
        let that = this
        let timeOut = setTimeout(function () {
          that.visible = false
          that.$emit('close')
          console.log('now close toast')
          clearTimeout(timeOut)
        }, this.delay * 1000)
      }
    },
    watch: {
      show: function (val) {
        this.visible = val
        console.log('show status : ', val)
        if (val) {
          this.__autoClose()
        }
      }
    }
  }
</script>
