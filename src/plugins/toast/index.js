import ToastComponent from '../../components/ui/toast/toast.vue'

let $vm
let watcher

const plugin = {
  install (vue, options) {
    const Toast = vue.extend(ToastComponent)

    if (!$vm) {
      $vm = new Toast({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }
    const toast = {
      show (options = {}) {
        watcher && watcher()
        console.log('options :', options)
        if (typeof options === 'string') {
          $vm.text = options
        } else if (typeof options === 'object') {
          //
        }
        if (typeof options === 'object' && (options.onShow || options.onHide)) {
          console.log('options ')
          console.log(options)
          watcher = $vm.watch('show', (val) => {
            val && options.onShow && options.onShow($vm)
            val === false && options.onHide && options.onHide($vm)
          })
        }
        $vm.show = true
      },
      hide () {
        $vm.show = false
      }
    }
    if (!vue.$toast) {
      vue.$toast = toast
    }
    vue.mixin({
      created: function () {
        this.$toast = vue.$toast
      }
    })
  }
}

export default plugin
export const install = plugin.install
