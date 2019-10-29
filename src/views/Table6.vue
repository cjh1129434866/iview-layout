
<template>
  <div class='' style="padding: 32px 64px;">
    <h1>在外部进行表格得搜索， 过滤， 新建， 隐藏某列等操作</h1>
    <br/><br/>
    <Table :columns="columns" :data="data" :loading="loading" siza="small"></Table>
  </div>
</template>

<script>
import $ from '../libs/utils'
export default {
  data() {
    return {
      columns: [
        {
          title: '主机名称',
          key: 'name'
        },
        {
          title: 'Ip 地址',
          key: 'ip'
        },
        {
          title: '使用状态',
          key: 'status',
          render: (h, { row }) => {
            if (row.status === 1) {
              return h('Badge', {
                props: {
                  status: 'processing',
                  text: '进行中'
                }
              })
            } else if (row.status === 2) {
              return h('Badge', {
                props: {
                  status: 'error',
                  text: '异常'
                }
              })
            }
          }
        },
        {
          title: '最后修改时间',
          key: 'date',
          render: (h, { row }) => {
            return h('Time', {
              props: {
                time: parseInt(row.date),
                type: 'datetime'
              }
            })
          }
        }
      ],
      data: [],
      loading: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    getData () {
      if (this.loading) return
      this.loading = true
      
      $.ajax({
        method: 'get',
        url: '/host/list'
      }).then(res => {
        setTimeout(() => {
          this.data = res.data.data.list
          this.loading = false
        })
      }, 1000)
    }
  },
  created() {

  },
  mounted() {
    this.getData()
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