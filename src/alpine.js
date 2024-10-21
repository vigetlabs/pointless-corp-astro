import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'

export default () => {
  Alpine.plugin([collapse, persist])
  return Alpine
}
