<script setup lang="ts">
const { locale } = useI18n()
interface Session {
  type: string
}
const sessions: Map<string, Session[]> = new Map ([
  ['2022-08-05', [
    {
      type: 'type',
    },
  ]],
  ['2022-08-06', [
    {
      type: 'type',
    },
    {
      type: 'type',
    },
  ]],
])
const getSessions = (date: string) => sessions.get(date)
</script>

<template>
  <q-page padding class="row">
    <q-calendar-month
      animated
      date-align="right"
      focusable
      :focus-type="['day']"
      hoverable
      :locale="locale"
      no-active-date
      no-outside-days
    >
      <template #day="{ scope: { timestamp } }">
        <div
          class="row"
        >
          {{ getSessions(timestamp.date) }}
        </div>
      </template>
    </q-calendar-month>
  </q-page>
</template>

<route lang="yaml">
meta:
  layout: default
  name: calendar
</route>
