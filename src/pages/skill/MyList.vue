<template>
  <q-page padding>
    <div class="row">
      <q-table title="Skills" :rows="rows" :columns="columns" row-key="id" class="col-12">

        <template v-slot:top>
          <span class="text-h6">
            Skills
          </span>
          <q-space />
          <q-btn icon="mdi-plus" color="primary" dense />
        </template>

        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-x-xs">
            <q-btn icon="mdi-pencil-outline" color="primary" dense size="sm">
              <q-tooltip class="bg-accent text-black shadow-4 text-body2" size="2rem" :offset="[200, 20]"
                transition-show="rotate" transition-hide="rotate">
                Edit
              </q-tooltip>
            </q-btn>
            <q-btn icon="mdi-delete-outline" color="negative" dense size="sm">
              <q-tooltip class="bg-accent text-black shadow-4 text-body2" size="2rem" :offset="[200, 20]"
                transition-show="rotate" transition-hide="rotate">
                Delete
              </q-tooltip>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
const columns = [
  { name: 'name', align: 'left', label: 'Name', field: 'name', sortable: true },
  { name: 'actions', align: 'right', label: 'Actions', field: 'name', sortable: true }
]

const rows = [{
  id: '123',
  name: 'AngularJs'
}]

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageCategoryList',
  setup() {
    return {
      columns,
      rows
    }
  }
})
</script >
