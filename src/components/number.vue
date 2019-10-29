<template>
  <div class=''>
    <Button @click="increase(1)">加1</Button>
    <span style="color: red; padding: 6px;">{{count}}</span>
    <Button @click="increase(-1)">减一</Button>
  </div>
</template>

<script>
import Emitter from 'iview/src/mixins/emitter' // 引入 这个 使得 数据改变得时候 实时校验
export default {
  mixins: [ Emitter ],
  props: {
    value: {
      type: Number
    }
  },
  data() {
    return {
      count: this.value
    };
  },
  computed: {},
  watch: {
    value (val) {
      this.count = val
    }
  },
  methods: {
    increase (val) {
      this.count += val
      this.$emit('input', this.count)
      this.dispatch('FormItem', 'on-form-change', this.count)
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