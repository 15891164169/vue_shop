import Toast from './Toast.vue'

const ToastObj = {}

ToastObj.install = (Vue) => {
  const ToastConstroctor = Vue.extend(Toast)

  const toast = new ToastConstroctor()

  toast.$mount(document.createElement('div'))

  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default ToastObj
