<template>
  <div style="padding: 32px 64px;">
    <h1>服务端分页及自定义序号</h1>
    <Table :columns="columns" :data="data" :loading="loading" border size="small"></Table>

    <div style="text-align: center; margin: 16px 0;">
      <Page 
        :total="total" 
        :current.sync="current" 
        show-sizer 
        @on-change="getData"
        @on-page-size-change="handleChangeSize"></Page>
    </div>
  </div>
</template>

<script>
import $ from '../libs/utils'

export default {
  data() {
    return {
      columns: [],
      data: [],
      loading: false,
      total: 0,
      current: 1,
      size: 10
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
        url: `/data/list/${this.current}/${this.size}`
      }).then(res => {
         this.loading = false
        console.log(res.data)
      })
    },
    handleChangeSize () {}
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