<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadCrumbs" :key="index">
      <span v-if="index !== 0 && index !== 1 && index !== breadCrumbs.length">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </span>
      <span v-else>{{ item.name }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  name: "BreadCrumb",
  data() {
    return {};
  },
  computed: {
    breadCrumbs() {
      return this.$store.getters.breadCrumbs || [];
    }
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped></style>
