import { LoadingBar } from 'quasar'
import { type UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach(async (to, from) => {
      if (to.path !== from.path)
        LoadingBar.start()
    })
    router.afterEach(() => {
      LoadingBar.stop()
    })
  }
}
