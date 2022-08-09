declare interface Window {
  // extend the window
}

// with vite-plugin-vue-markdown, markdown files can be treated as Vue components
declare module '*.md' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


declare module '@quasar/quasar-ui-qcalendar/src' {
  import { type Plugin } from 'vue'
  import { type QCalendarMonth as IQCalendarMonth } from '@quasar/quasar-ui-qcalendar/dist/types'

  export const QCalendarMonth: IQCalendarMonth

  const QCalendarPlugin: Plugin
  export default QCalendarPlugin

}
