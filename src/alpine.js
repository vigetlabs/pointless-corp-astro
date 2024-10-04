import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'

export default () => {
  Alpine.plugin(persist)
  return Alpine
}
