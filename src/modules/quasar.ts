import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/mdi-v6'
import { type UserModule } from '../types'
import '@quasar/extras/mdi-v6/mdi-v6.css'
import 'quasar/dist/quasar.css'

export const install: UserModule = ({ app }) => {
  app.use(Quasar, {
    plugins: {},
    iconSet: quasarIconSet,
  })
}
