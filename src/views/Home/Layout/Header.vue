<template>
  <div class="header">
    <div class="collapsed">
      <i
        :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
        @click="changeCollapse"
      ></i>
    </div>
    <BreadCrumb style="margin-right: auto;" />
    <DropDowm />
  </div>
</template>
<script>
import BreadCrumb from "./BreadCrumb";
import DropDowm from "./DropDowm";

export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    isCollapse() {
      return this.$store.getters.isCollapse;
    }
  },
  methods: {
    changeCollapse() {
      const isCollapse = this.$store.getters.isCollapse;
      this.$store.commit("ISCOLLAPSE", { isCollapse: !isCollapse });
    }
  },
  components: { BreadCrumb, DropDowm }
};
</script>
<style scoped></style>
