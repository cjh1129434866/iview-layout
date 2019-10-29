<template>
  <div class='' style="padding: 32px 300px;">
    <h1>Form 同步提交(提交到后端) 表单得一个用法</h1>
    <br><br>
    <Form ref="form" :model="form" :label-width="80" action="iview.com" method="post">
      <FormItem label="输入框">
        <Input v-model="form.input" name="input" />
      </FormItem>
      <FormItem label="选择器">
        <Select v-model="form.select" name="select">
          <Option value="value1">value1</Option>
          <Option value="value2">value2</Option>
        </Select>
      </FormItem>

      <Button html-type="submit">提交</Button>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        input: '',
        select: ''
      }
    };
  },
  computed: {},
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