<template>
  <el-container class="main">
    <el-aside width="200px" :style="{ width: isCollapse ? '80px' : '200px' }">
      <h1 class="user">sevenper</h1>
      <NavMenu />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main class="content">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import NavMenu from "../Home/Layout/NavMenu";
import Header from "../Home/Layout/Header";

export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    isCollapse() {
      return this.$store.getters.isCollapse;
    }
  },
  methods: {},
  components: { NavMenu, Header }
};
</script>
<style scoped></style>
