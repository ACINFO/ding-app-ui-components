import LoadingComponent from '../../components/ui/loading/loading.vue'

let $vm
let watcher

const plugin = {
  install (vue, options) {
    const Loading = vue.extend(LoadingComponent)

    if (!$vm) {
      $vm = new Loading({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const loading = {
      show (options = {}) {
        console.log(options)
        watcher && watcher()
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
    if (!vue.$loading) {
      vue.$loading = loading
    }
    vue.mixin({
      created: function () {
        this.$loading = vue.$loading
      }
    })
  }
}

export default plugin
export const install = plugin.install
