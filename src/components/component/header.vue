<template>
  <div class="nav">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="1" route="/"><i class="el-icon-notebook-2"></i>新闻头条</el-menu-item>
      <el-menu-item index="2" route="/movie"><i class="el-icon-film"></i>电影资讯</el-menu-item>
      <el-menu-item index="3" route="/history"><i class="el-icon-time"></i>历史上的今天</el-menu-item>
      <el-menu-item index="4" route="/weather"><i class="el-icon-cloudy-and-sunny"></i>天气预报</el-menu-item>
      <el-menu-item index="5" route="/dream"><i class="el-icon-view"></i>周公解梦</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      msg: "",
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
.el-menu{
    padding:0 20px;
}
</style>
