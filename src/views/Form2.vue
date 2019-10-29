<template>
  <div class='' style="padding: 32px 300px;">
    <h1>iview 表单组建得 element-id 属性 FormItem 得 label-for 属性用法</h1>
    <br><br>
    <Form ref="form" :model="form" :label-width="70">
      <FormItem label="表单1" label-for="element1">
        <Input v-model="form.input" element-id="element1"/>
      </FormItem>
      <FormItem label="时间选择" label-for="element2">
        <DatePicker placeholder="Select date" element-id="element2"></DatePicker> 
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        input: ''
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