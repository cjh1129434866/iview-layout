<template>
   <dev-article>
     <Card shadow :padding="0">
       <Row>
         <i-col :sm="24" :md="0">
           <Tabs value="option1">
            <TabPane label="标签一" name="option1">标签一的内容</TabPane>
            <TabPane label="标签二" name="option2">标签二的内容</TabPane>
            <TabPane label="标签三" name="option3">标签三的内容</TabPane>
           </Tabs>
         </i-col>
       </Row>
       <Row :gutter="64">
         <i-col :xs="0" :sm="0" :md="4">
           <CellGroup>
             <Cell title="设置 1" to="/manage" selected></Cell>
             <Cell title="设置 1" to="/manage"></Cell>
             <Cell title="设置 1" to="/manage"></Cell>
           </CellGroup>  
         </i-col>
         <i-col :xs="24" :sm="24" :md="20">
           <Row :gutter="16">
             <i-col span="12">
               <Form label-position="top">
                  <FormItem label="邮箱">
                    <Input v-model="form.mail"/>
                  </FormItem>
                   <FormItem label="昵称">
                    <Input v-model="form.name"/>
                  </FormItem>
                   <FormItem label="描述">
                    <Input v-model="form.desc" type="textarea" :rows="4"/>
                  </FormItem>
                   <FormItem label="国家">
                    <Select v-model="form.country" transfer>
                      <Option value="中国">中国</Option>
                      <Option value="美国">美国</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="手机">
                    <Row :gutter="16">
                      <i-col span="4">
                        <Input v-model="form.zone"/>
                      </i-col>
                      <i-col span="8">
                        <Input v-model="form.phone"/>
                      </i-col>
                    </Row>
                  </FormItem>
                  <FormItem label="手机">
                    <Button type="primary" size="large">更新信息</Button>
                  </FormItem>
               </Form>
             </i-col>
             <i-col span="12">
                <Avatar icon="ios-person" size="large"/>
                <Upload action="//jsonplaceholder.typicode.com/posts/">
                  <Button icon="ios-cloud-upload-outline">Upload files</Button>
                </Upload>
             </i-col>
           </Row>
         </i-col>
       </Row>
     </Card>
   </dev-article>
</template>

<script>
export default {
  data() {
    return {
      form: {
        mail: '',
        name: '',
        desc: '',
        country: '',
        zone: '',
        phone: '13800000'
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