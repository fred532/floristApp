<template>
  <div>
    <b-button @click="filter = ''">Clear filter</b-button>
    <b-button @click="filter = 'today'">Today</b-button> 
    <b-button @click="filter = 'tomorrow'">Tomorrow</b-button>
    <b-button @click="filter = 'other'">Other</b-button>
    <b-button @click="filter = 'late'">Late</b-button>
    <b-table striped hover 
    :items="items" 
    :fields="fields"
    :sort-by.sync="sortBy"
    :sort-desc.sync="sortDesc"
    :filter="filter"
    :filter-included-fields="filterOn"
    @filtered="onFiltered"
    sort-icon-left
    label-sort-asc=""
    label-sort-desc=""
    responsive="sm"></b-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      filter: null,
      filterOn: ['delivery_periode'],
      sortBy: 'delivery_date',
      sortDesc: false,
      fields: [
        { key: 'order_id', sortable: true },
        { key: 'delivery_date', sortable: true },
        { key: 'product_id', sortable: true },
        { key: 'price', sortable: true },
        { key: 'delivery_name', sortable: true }
      ],
      items: [
        { isActive: true, delivery_periode: 'today', order_id: '12345640', delivery_date: '2022-04-23', product_id: '2BO', price: 50.5, delivery_name: 'Dickerson Macdonald' },
        { isActive: false, delivery_periode: 'tomorrow', order_id: '12345621', delivery_date: '2022-04-24', product_id: '2BO', price: 50.5, delivery_name: 'Larsen Shaw' },
        { isActive: false, delivery_periode: 'tomorrow', order_id: '12345689', delivery_date: '2022-04-24', product_id: '2BO', price: 50.5, delivery_name: 'Geneva Wilson' },
        { isActive: true, delivery_periode: 'other', order_id: '12345638', delivery_date: '2022-04-30', product_id: '2BO', price: 50.5, delivery_name: 'Jami Carney' },
        { isActive: true, delivery_periode: 'late', order_id: '12345638', delivery_date: '2022-04-20', product_id: '2BO', price: 50.5, delivery_name: 'John Doe' }
      ]
    }
  }
}
</script>
<style scoped>
  .list {
    width: 100%;
    padding: 0;
  }
</style>
