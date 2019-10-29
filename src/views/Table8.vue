<template>
  <div class='' style="padding: 32px 64px;">
    <h1>初始化应用过滤并持久存储</h1>
    <br/><br/>
    <Table :columns="columns" :data="data" @on-filter-change="handleFilterChange"></Table>
  </div>
</template>

<script>
export default {
  data() {
    const filterAge = localStorage.getItem('table-filter-demo-age')
    const filterAddress = localStorage.getItem('table-filter-demo-address')

    let filterAgeValue = [2]
    let filterAddressValue = ['London', 'Sydney']

    if (filterAge) filterAgeValue = JSON.parse(filterAge) 
    if (filterAddress) filterAddressValue = JSON.parse(filterAddress) 
    const columns = [
      {
        title: 'Date',
        key: 'date'
      },
      {
        title: 'Name',
        key: 'name'
      },
      {
        title: 'Age',
        key: 'age',
        filters: [
          {
            label: 'Greater than 25',
            value: 1
          },
          {
            label: 'Less than 25',
            value: 2
          }
        ],
        filterMultiple: false,
        filterMethod (value, row) {
          if (value === 1) {
              return row.age > 25;
          } else if (value === 2) {
              return row.age < 25;
          }
        }
      },
      {
        title: 'Address',
        key: 'address',
        filters: [
          {
            label: 'New York',
            value: 'New York'
          },
          {
            label: 'London',
            value: 'London'
          },
          {
            label: 'Sydney',
            value: 'Sydney'
          }
        ],
        filterMethod (value, row) {
          return row.address.indexOf(value) > -1;
        }
      }
    ]

    if (filterAgeValue.length > 0)  columns[2].filteredValue = filterAgeValue
    if (filterAddressValue.length > 0) columns[3].filteredValue = filterAddressValue

    return {
      columns: columns,
      data:[
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
    handleFilterChange (col) {
      const filterChecked = col._filterChecked
      const filterKey = col.key
      localStorage.setItem(`table-filter-demo-${filterKey}`, JSON.stringify(filterChecked))
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