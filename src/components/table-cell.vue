<template>
  <Select>
    <Option :value="row.name">{{row.name}}</Option>
    <Option :value="row.age">{{row.age}}</Option>
    <Option :value="row.address">{{row.address}}</Option>
    <Option :value="row.date">{{row.date}}</Option>
  </Select>
</template>

<script>
export default {
  props: {
    row: Object
  },
  data() {
    return {

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