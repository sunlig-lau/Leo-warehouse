<template>
  <div>
    <top-bar></top-bar>
  </div>
</template>

<script>
import TopBar from './layout/Topbar';

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    'top-bar': TopBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

</style>
