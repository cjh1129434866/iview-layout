<template>
  <dev-article>
    <Row :gutter="16">
      <i-col span="6">
        <Card shadow title="访问量">
          <Tag color="green" slot="extra">周</Tag>
          <div class="count">123,000</div>
          <Divider></Divider>
          日访问量1，230
        </Card>
      </i-col>
      <i-col span="6">
        <Card shadow title="总销售额">
          <Tooltip content="这里是指标说明" slot="extra" placement="top" transfer>
            <Icon type="ios-alert-outline" />
          </Tooltip>
          <div class="count">185,000</div>
          <Divider></Divider>
          周同比20% <Icon type="md-arrow-dropup" size="22" color="red"/>
          日环比10% <Icon type="md-arrow-dropdown" size="22" color="green"/>
        </Card>
      </i-col>
      <i-col span="6">
        <Card shadow title="运营活动效果">
          <Tooltip content="这里是指标说明" slot="extra" placement="top" transfer>
            <Icon type="ios-alert-outline" />
          </Tooltip>
          <div class="count">75%</div>
          <Divider></Divider>
          <Progress :percent="75" status="success" hide-info/>
        </Card>
      </i-col>
       <i-col span="6">
        <Card shadow title="快捷操作">
          <Row :gutter="32">
            <i-col span="8" v-for="item in shortCuts" :key="item.title" >
              <Button :to="item.action">{{item.title}}</Button>
            </i-col>
          </Row>
          <Divider></Divider>
          <Button type="primary" long icon="md-add" @click="newShortCut.status = true">添加</Button>
        </Card>
      </i-col>
    </Row>
    <Card>
      <Tabs value="sell">
        <template slot="extra">
          <RadioGroup v-model="dataType" @on-change="handleCycle">
            <Radio label="day">今日</Radio>
            <Radio label="week">本周</Radio>
            <Radio label="month">本月</Radio>
            <Radio label="year">全年</Radio>
          </RadioGroup>
          <DatePicker type="daterange" placement="bottom-end" v-model="countDate" placeholder="Select date" transfer style="width: 200px"></DatePicker>
        </template>
        <TabPane label="销售额" name="sell">
          <Row>
            <i-col span="18">
              <div style="width: 100%; height: 400px;" ref="chart"></div>
            </i-col>
            <i-col span="6">
              <Table :columns="tableColumns" :data="tableData"></Table>
            </i-col>
          </Row>
        </TabPane>
        <TabPane label="访问量" name="visit">访问量</TabPane>
      </Tabs>
    </Card>
    <Modal
        title="添加快捷操作"
        v-model="newShortCut.status"
        @on-ok="handleShortcutConfirm">
        <Input v-model="newShortCut.title" placeholder="添加快捷键标题" />
        <Input v-model="newShortCut.action" placeholder="添加快捷键路径" />
    </Modal>
  </dev-article>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      shortCuts: [
        {
          title: '操作一',
          action: '/app'
        },
        {
          title: '操作二',
          action: '/push'
        }
      ],
      newShortCut: {
        status: false,
        title: '',
        action: ''
      },
      dataType: 'day', // day week month year
      countDate: [new Date(), new Date()],
      tableColumns: [
        {
          type: 'index'
        },
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '销售额',
          key: 'sell'
        }
      ],
      tableData: [
        {
          name: '门店1',
          sell: '123,00'
        },
        {
          name: '门店2',
          sell: '123,00'
        },
        {
          name: '门店3',
          sell: '123,00'
        },
        {
          name: '门店4',
          sell: '123,00'
        }
      ]
    };
  },
  computed: {},
  watch: {
    countDate (newV) {
      console.log(newV)
    }
  },
  methods: {
    handleShortcutConfirm () {
      this.shortCuts.push({
        title: this.newShortCut.title,
        action: this.newShortCut.action
      })
    },
    handleCycle (cycle) {
      let today = new Date().getTime()
      let date;
      switch (cycle) {
        case 'day': 
          date = today 
          break
        case 'week':
          date = today - 86400000 * 7
          break
        case 'month':
          date = today - 86400000 * 30
          break
        case 'year':
          date = today - 86400000 * 365
          break      
      }
      this.countDate = [new Date(date), new Date(today)]
    },
    initEcharts () {
      const myChart = echarts.init(this.$refs.chart)

      const option = {
        title: {
          text: '销售额'
        },
        toolTip: {},
        legend: {
          data: ['销售']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 30, 30, 10, 10, 20]
        }]
      }

      myChart.setOption(option)
    }
  },
  created() {

  },
  mounted() {
    this.initEcharts()
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

<style scoped>
.count{
  font-size: 24px;
}
</style>
