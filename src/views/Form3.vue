<template>
  <div class='' style="padding: 32px 300px;">
    <h1>Form 表单组建得联动用法</h1>
    <br><br>
    <Form ref="form" :model="form" :label-width="80">
      <FormItem label="信息">
        <Input v-model="form.message"/>
      </FormItem>
      <FormItem label="性别">
        <Select v-model="form.sex" @on-change="handleSelectChange">
          <Option value="man">男性</Option>
          <Option value="woman">女性</Option>
        </Select>
      </FormItem>

      <FormItem label="城市选择">
        <Select v-model="form.city" style="width: 150px;" @on-change="handleChange">
          <Option value="beijing" key="beijing">北京</Option>
          <Option value="shanghai" key="shanghai">上海</Option>
        </Select>
        <Select v-model="form.area" v-if="form.city !== ''" style="width:150px;">
          <template v-if="form.city === 'beijing'">
            <Option value='chaoyang' key="chaoyang">朝阳</Option>
            <Option value="haidian" key="haidian">海淀</Option>
          </template> 
          <template v-if="form.city === 'shanghai'">
            <Option value='pudong' key="pudong">浦东</Option>
            <Option value="xujiahui" key="xujiahui">徐家汇</Option>
          </template>
        </Select>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        message: '',
        sex: '',
        city: '',
        area: ''
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleSelectChange (val) {
      if (val === 'man') {
        this.form.message = '你好男性'
      } else if (val === 'woman') {
        this.form.message = '你好女性'
      }
    },
    handleChange (val) {
      let area = val === 'beijing' ? 'chaoyang' : 'pudong'
      this.form.area = area 
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