<template>
  <div id="app">
   <el-container>
      <el-header><Header/></el-header>
      <el-main><router-view/></el-main>
   </el-container>

  </div>
</template>

<script>
import Header from './components/component/header';
export default {
  components:{
      Header
  },
  name: 'App'
}
</script>

<style>

</style>
