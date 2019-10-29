<template>
  <div class='' style="padding: 32px 64px;">
    <h1>自定义列模板得三种方法</h1>
    <br><br>
    <Table border :columns="columns" :data="data"></Table>
    <br><br>
    <Table border :columns="columns1" :data="data"></Table>
    <br><br>
    <TodoList :todo="todo">
      <template slot-scope="props">
        {{props.todo.checked ? '√' : ''}}-{{props.todo.text}}
      </template>
    </TodoList>
    <br><br>
    <Table :columns="columns2" :data="data1" ref="table">
      <template slot-scope="props" slot="action">
        <Select>
          <Option :value="props.name">{{props.name}}</Option>
          <Option :value="props.age">{{props.age}}</Option>
          <Option :value="props.address">{{props.address}}</Option>
          <Option :value="props.date">{{props.date}}</Option>
        </Select>
      </template>
    </Table>
  </div>
</template>

<script>
import TableCell from '../components/table-cell'
import TodoList from '../components/todo-list'
export default {
  data() {
    return {
      columns: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '日期',
          key: 'date'
        },
        {
          title: '操作',
          render: (h, { row }) => {
            return h('Select', {}, [
              h('Option', {
                props: {
                  value: row.name
                }
              }, row.name),
              h('Option', {
                props: {
                  value: row.age
                }
              }, row.age),
              h('Option', {
                props: {
                  value: row.address
                }
              }, row.address),
              h('Option', {
                props: {
                  value: row.date
                }
              }, row.date)
            ])
          }
        }
      ],
      columns1: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '日期',
          key: 'date'
        },
        {
          title: '操作',
          render: (h, { row }) => {
            return h(TableCell, {
              props: {
                row
              }
            })
          }
        }
      ],
      columns2: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '日期',
          key: 'date'
        },
        {
          title: '操作',
          render: (h, { row }) => {
            return h(
              'div',
              this.$refs.table.$scopedSlots.action({
                name: row.name,
                age: row.age,
                address: row.address,
                date: row.date
              }) 
            )
          }
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
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        }
      ],
      data1: [],
      todo: [
        {
          text: 'aaa',
          id: '0',
          checked: true
        },
        {
          text: 'bbb',
          id: '1',
          checked: false
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {

  },
  created() {

  },
  mounted() {
    this.data1 = [
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
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        }
      ]
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {
    TableCell,
    TodoList
  },
}
</script>

<style lang='scss' scoped>

</style>