<template>
  <div class='' style="padding: 32px 64px;">
    <h1>动态修改表格得class</h1>
    <br/><br/>
    <Table :columns="columns" :data="data" border></Table>
    <br><br>
    <Button type="primary" @click="setTableUnitStyle">设置单元格样式</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
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
          date: '2016-10-03',
          cellClassName: {
            name: 'table-red'
          }
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01',
          cellClassName: {
            name: ''
          }
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
    setTableUnitStyle () {
      this.data[1].cellClassName.name = 'table-red'
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

<style>
.table-red{
  color: red;
}
</style>