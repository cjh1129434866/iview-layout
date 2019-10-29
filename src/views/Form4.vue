<template>
  <div class='' style="padding: 32px 300px;">
    <h1>第三方得表单组件（自定义得表单组件） 与 iview From 得验证集成</h1>
    <br><br>
    <Form ref="form" :model="form" :label-width="80" @submit.native.prevent :rules="rules">
      <FormItem label="双向绑定" prop="number">
        <Number :value="form.number" @input="input"></Number>
      </FormItem>
      <Button @click="handleubmit">提交</Button>
    </Form>
  </div>
</template>

<script>
import Number from '../components/number'
export default {
  data() {
    return {
      form: {
        number: 1
      },
      rules: {
        number: [
          {
            type: 'number',
            min: 3,
            trigger: 'change'
          }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    input (val) {
      this.form.number = val
    },
    handleubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$Message.info('成功')
        } else {
          this.$Message.info('失败')
        }
      })
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
  components: {
    Number
  },
}
</script>

<style lang='scss' scoped>

</style>