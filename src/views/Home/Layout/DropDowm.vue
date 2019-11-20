<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar>
        <img src="../../../assets/img/user.jpg" />
      </el-avatar>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
        <span @click="$router.push({ name: 'login' })">退出 </span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  name: "DropDowm",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped></style>
