<template>
  <div>
    <Null/>
    <!-- <div @click="change">零食</div> -->
  </div>
</template>
<script>
import Null from '../../../components/nullView/index'
export default {
  name: 'Other',
  components: {
    Null
  },
  methods: {
    change () {
      this.$router.push({
        name: 'Others'
      })
    }
  }
}
</script>
