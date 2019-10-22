<template>
  <div>
    <top-bar></top-bar>
    <div style="display:flex">
      <div>
        <side-bar></side-bar>     
      </div>
      <div style="flex:1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/layout/Topbar';
import SideBar from '@/components/layout/Sidebar';

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    'top-bar': TopBar,
    'side-bar': SideBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
