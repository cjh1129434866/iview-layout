<template>
  <Layout>
    <Header class="header">
      <Row>
        <i-col span="4" offset="1">
          <img class="logo" src="https://file.iviewui.com/dist/7dcf5af41fac2e4728549fa7e73d61c5.svg" alt="">
        </i-col>
        <i-col span="14">
          <Menu mode="horizontal" :active-name="activeName">
            <MenuItem name="/app" to="/app">应用分析</MenuItem>
            <MenuItem name="/push" to="/push">推送营销</MenuItem>
            <MenuItem name="/dev" to="/dev">开发助手</MenuItem>
            <MenuItem name="/manage" to="/manage">应用管理</MenuItem>
          </Menu>
        </i-col>
        <i-col span="4">
          <Row>
            <i-col span="8">
              <Dropdown>
                <Avatar icon="ios-person" size="large" />
                <DropdownMenu slot="list">
                  <DropdownItem>我的主页</DropdownItem>
                  <DropdownItem>我的收藏</DropdownItem>
                  <DropdownItem>
                    设置
                    <Badge status="error" />
                  </DropdownItem>
                  <DropdownItem divided>退出登陆</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </i-col>
            <i-col span="8">
              <Dropdown>
                <Badge :count="3" :offset="[20, 4]">
                  <Icon type="ios-notifications-outline" size="26"></Icon>
                </Badge>
                <DropdownMenu slot="list">
                  <Tabs value="notification">
                    <TabPane label="通知" name="notification">
                      <div class="center">通知内容</div>
                    </TabPane>
                    <TabPane label="关注" name="follow">
                      <div class="center">关注内容</div>
                    </TabPane>
                    <TabPane label="系统" name="system">
                      <div class="center">系统内容</div>
                    </TabPane>
                  </Tabs>
                </DropdownMenu>
              </Dropdown>
            </i-col>
            <i-col span="8">
              <Icon type="md-color-palette" size="24" @click="openTheme = true" />

            </i-col>
          </Row>
        </i-col>
      </Row>
    </Header>
    <Layout>
      <Sider class="sider" collapsible v-model="isCollapsible" :class="{'sider-hide': isCollapsible}" width="240">
        <Menu theme="dark" active-name="option2">
          <MenuItem name="option1">
            <Icon type="md-home" />
            <span>选项一</span>
          </MenuItem>
          <MenuItem name="option2">
            <Icon type="md-home" />
            <span>选项二</span>
          </MenuItem>
          <MenuItem name="option3">
            <Icon type="md-home" />
            <span>选项三</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Content class="content" :class="{'content-command': isCollapsible}">
        <!-- <Breadcrumb>
          <BreadcrumbItem to="/">Home</BreadcrumbItem>
          <BreadcrumbItem to="/app">App</BreadcrumbItem>
          <BreadcrumbItem>aaa</BreadcrumbItem>
        </Breadcrumb> -->
        <Card style="margin-top: 16px;">
          <slot></slot>
        </Card>
      </Content>
    </Layout>
    <Drawer title="主题色" v-model="openTheme">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      openTheme: false,
      isCollapsible: false
    };
  },
  computed: {
    activeName () {
      return this.$route.path
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

<style>
.header{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0 , 0, 0, .5);
  z-index: 2;
}
.logo{
  margin-top: 10px;
  width: 100px;
  height: 40px;
}
.center{
  text-align: center;
}
.ivu-menu-horizontal.ivu-menu-light:after{
  display: none;
}
.sider{
  position: fixed;
  left: 0;
  top: 60px;
  height: calc(100% - 60px);
  overflow-y: auto;
}
.sider-hide .ivu-menu-item span {
  display: none;
}
.content{
  margin-top: 60px;
  margin-left: 240px;
  padding: 20px;
  transition: all .3 ease-in-out;
}
.content-command{
  margin-left: 64px;
}
</style>