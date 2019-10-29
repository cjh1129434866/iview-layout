<template>
  <div class='' style="padding: 32px 300px;">
    <h1>巧用元素得禁用属性</h1>
    <br><br>
    <Form :model="form" ref="form" :label-width="70">
      <FormItem label="姓名">
        <Input v-model="form.name"/>
      </FormItem>
      <FormItem label="密码">
        <Input v-model="form.password" type="password" />
      </FormItem>
      <FormItem label="确认密码">
        <Input v-model="form.confirmPassword" type="password" :disabled="form.password.length < 6"/>
      </FormItem>
      <Button :disabled="submitDisabled">提交</Button>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  computed: {
    submitDisabled () {
      let disabled = false
      if (!this.form.name) disabled = true
      if (this.form.password.length < 6 || this.form.confirmPassword.length < 6) disabled = true
      if (this.form.password !== this.form.confirmPassword) disabled = true  
      return disabled
    }
  },
  watch: {},
  methods: {

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