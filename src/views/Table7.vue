<template>
  <div class='' style="padding: 32px 64px;">
    <h1>表格排序并持久化存储</h1>
    <br><br>
    <Table :columns="columns" :data="data" @on-sort-change="handleSortChange"></Table>
  </div>
</template>

<script>
export default {
  data() {
    const sortKey = localStorage.getItem('table-demo-key')
    const sortType = localStorage.getItem('table-demo-order')

    let dateSortType 
    let ageSortType
    if (sortKey && sortKey === 'date') {
      dateSortType = sortType
    } if (!sortKey) {
      dateSortType = 'asc'
    } else if (sortKey && sortKey !== 'date') {
      dateSortType = 'normal'
    }

    if (sortKey && sortKey === 'age') {
      ageSortType = sortType
    } else {
      ageSortType = 'normal'
    }
    return {
      columns: [
        {
          title: 'Date',
          key: 'date',
          sortable: true,
          sortType: dateSortType
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age',
          sortable: true,
          sortType: ageSortType
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data: [
        {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
        },
        {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
        },
        {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
        },
        {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleSortChange ({ key, order }) {
      localStorage.setItem('table-demo-key', key)
      localStorage.setItem('table-demo-order', order)
    }
  },
  created() {

  },
  mounted() {
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
}
</script>

<style lang='scss' scoped>

</style>