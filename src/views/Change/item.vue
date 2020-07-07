<template>
  <div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-children">
        <Item :list="item.children"></Item>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Item",
  props: {
    list: Array
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped></style>
