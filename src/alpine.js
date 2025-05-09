import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import intersect from '@alpinejs/intersect'
import persist from '@alpinejs/persist'
import { printBear } from './utils/pointlessBear.ts'

export default () => {
  Alpine.plugin([collapse, intersect, persist])
  return Alpine
}

printBear()
