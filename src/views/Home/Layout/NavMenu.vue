<template>
  <div class="navmenu">
    <el-menu
      :default-active="defaultPath"
      class="el-menu-vertical-demo"
      style="width: 100%;text-align:left;"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
    >
      <div v-for="(item, index) in menu" :key="index">
        <el-submenu :index="item.path" v-if="item.children">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(child, index) in item.children"
              :key="index"
              :index="child.path"
              @click="menuClick(child.path)"
              >{{ child.name }}</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="item.path" v-else @click="menuClick(item.path)">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "NavMenu",
  data() {
    return {};
  },
  computed: {
    isCollapse() {
      return this.$store.getters.isCollapse;
    },
    menu() {
      return this.$store.getters.menu;
    },
    defaultPath() {
      return this.$store.getters.defaultPath;
    }
  },
  methods: {
    menuClick(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>
<style scoped></style>
