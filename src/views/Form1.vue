<template>
  <div class='' style="padding: 32px 500px;">
    <h1>Form表单常用得 验证规则讲解</h1>
    <br><br>
    <Form ref="form" :lable-width="78" :model="form" :rules="rules">
      <RadioGroup v-model="type">
        <Radio :label="1">表单1</Radio>
        <Radio :label="2">表单2</Radio>
      </RadioGroup>
      <FormItem label="输入框" prop="input">
        <Input v-model="form.input" number/>
      </FormItem>
      <FormItem label="输入框1" prop="input1" v-if="type === 1">
        <Input v-model="form.input1" number/>
      </FormItem>
       <FormItem label="输入框2" prop="input2" v-if="type === 2">
        <Select v-model="form.input2">
          <Option value="value1">value1</Option>
          <Option value="value2">value2</Option>
        </Select>
      </FormItem>
      <Button @click="handleSubmit">提交</Button>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 1,
      form: {
        input: '',
        input1: '',
        input2: ''
      },
      rules:{
        input: [
          {
            required: true,
            trigger: 'change', // change || blur
            type: 'number'
          }
        ],
        input1: [
          {
            required: true
          }
        ],
        input2: [
          {
            required: true
          }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleSubmit () {
      this.$refs.form.validate((valid) => {
        console.log(valid)
        if (valid) {
          this.$Message.success('成功')
        } else {
          this.$Message.error('失败')
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
  components: {},
}
</script>

<style lang='scss' scoped>

</style>