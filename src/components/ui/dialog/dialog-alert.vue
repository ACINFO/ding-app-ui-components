<template>
  <div class="" v-if="visible">
    <dialog-wrap>
      <div class="dialog-alert">
        <div class="dialog-title">提示</div>
        <div class="dialog-description">{{content}}</div>
        <div class="dialog-footer">
          <div class="btn-wrap">
            <div class="dialog-footer-btn"
              @click="btnClicked"
            >确定</div>
          </div>
        </div>
      </div>
    </dialog-wrap>
  </div>
</template>

<style>
.dialog-alert {
  background-color: #fff;
  opacity: 0.95;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

  .dialog-title {
    padding: 0.85rem;
    font-weight: bold;
    color: #111;
    font-size: 1.25rem;
  }

  .dialog-description {
    padding: 0 1rem 1rem;
    flex: 1;
  }

  .dialog-footer {
    width: 100%;
  }

  .dialog-footer .btn-wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    user-select: none;
  }

  .dialog-footer-btn {
    padding: 0.8rem;
    border-top: 1px solid #ccc;
    color: #007aff;
    font-weight: bold;
    flex:1;
    border-left: 1px solid #ccc;
  }
  .dialog-footer-btn:first-child {
    border-left: none;
  }

  .dialog-footer-btn:active {
    background-color: #efefef;
  }
</style>

<script>
  import DialogWrap from './dialog-wrap.vue'
  export default {
    name: 'DialogAlert',
    components: {
      DialogWrap
    },
    props: {
      show: {
        type: Boolean,
        default: false
      },
      content: {
        type: String,
        required: true
      },
      debug: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        visible: this.show || false
      }
    },
    methods: {
      btnClicked () {
        this.visible = false
        this.$emit('ok')
        this.debug && (
          console.log('emit event <ok>')
        )
      },
      close () {
        this.visible = false
        this.$emit('close')
      }
    },
    watch: {
      show: function (val) {
        this.visible = val
        console.log('val ', val)
      }
    }
  }
</script>
