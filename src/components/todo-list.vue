<template>
  <ul>
    <li v-for="item in todo" :key="item.id">
      <slot :todo="item">
        {{item.text}}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    todo: {
      type: Array
    }
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