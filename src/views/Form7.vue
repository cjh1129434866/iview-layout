<template>
  <div class='' style="padding: 32px 400px;">
    <h1>新建和修改共用一个Form 组件 得最佳实践（多个循环）</h1>
    <br><br>
    <ul>
      <li v-for="(item, index) in list" :key="item.id">
        姓名<span style="color: red;">{{item.name}}</span>
        年龄<span style="color: red;">{{item.age}}</span>
        城市<span style="color: red;">{{item.city}}</span>
        <Button @click="handleOpenEdit(index)">修改</Button>
      </li>
    </ul>
    <Button @click="addData">新增</Button>
    
    <!-- Modal -->
    <Modal :title="type === 'create' ? '新增数据' : '修改数据'" v-model="openModal" footer-hide>
      <Form ref="form" :model="form" :label-width="70">
        <FormItem label="姓名">
          <Input v-model="form.name" />
        </FormItem>
         <FormItem label="年龄">
          <InputNumber v-model="form.age" />
        </FormItem>
         <FormItem label="城市">
          <Select v-model="form.city">
            <Option value="北京">北京</Option>
            <Option value="上海">上海</Option>
            <Option value="广州">广州</Option>
          </Select>
        </FormItem>
        <br/><br/>
        <Button @click="handleCreate">新建</Button>
        <Button @click="handleEdit">修改</Button>
      </Form>
    </Modal>
  </div>
</template>

<script>
let formData = {
  name: '',
  age: null,
  city: ''
}
export default {
  data() {
    return {
      form: Object.assign({}, formData),
      list: [
        {
          name: '张三',
          age: 18,
          city: '北京',
          id: '0'
        },
        {
          name: '李四',
          age: 19,
          city: '上海',
          id: '1'
        }
      ],
      openModal: false,
      type: '',
      editIndex: -1
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleOpenEdit (index) {
      this.openModal = true
      this.type = 'edit'
      this.editIndex = index
      let data = this.list[index]
      this.form = Object.assign({}, data)
    },
    addData () {
      this.openModal = true
      this.type = 'create'

      this.form = Object.assign({}, formData)
    },
    handleCreate () {
      this.$set(this.form, 'id', this.list.length + '')
      this.list.push(this.form)
      this.openModal = false
    },
    handleEdit () {
      this.$set(this.form, 'id', this.editIndex + '')
      this.list.splice(this.editIndex, 1, this.form)
      this.openModal = false
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