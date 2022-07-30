import Plugin from '@quasar/quasar-ui-qcalendar/src'
import { type UserModule } from '../types'
import '@quasar/quasar-ui-qcalendar/dist/index.css'

export const install: UserModule = ({ app }) => {
  app.use(Plugin)
}
