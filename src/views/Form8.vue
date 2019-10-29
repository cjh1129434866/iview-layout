<template>
  <div class='' style="padding: 32px 400px;">
    <h1>不使用form自带的校验，使用自定义得校验规则</h1>
    <br/><br/>
    <Form ref="form" :model="form" :label-width="70">
      <FormItem label="姓名">
        <Input v-model="form.name" />
      </FormItem>
      <FormItem label="城市">
        <Select v-model="form.city">
          <Option value="上海">上海</Option>
          <Option value="北京">北京</Option>
        </Select>
      </FormItem>
      <Button @click="handleSubmit" :loading="isSubmiting">提交</Button>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        city: ''
      },
      isSubmiting: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleSubmit () {
      if (this.isSubmiting) return
      if (!this.form.name) {
        this.$Message.error('请输入姓名')
        return
      }
      if (!this.form.city) {
        this.$Notice.error({
          title: '请选择城市'
        })
        return
      }
      this.isSubmiting = true
      // ajax请求
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