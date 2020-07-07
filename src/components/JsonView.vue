<template>
  <div style="text-align:left">
    <json-view :data="data" :deep="5" theme="one-dark"></json-view>
  </div>
</template>
<script>
import jsonView from "vue-json-views";

export default {
  components: {
    jsonView
  },
  data() {
    return {
      data: {
        key1: 1,
        key2: "2",
        key3: {
          key31: 21212
        },
        key4: [
          {
            key: 1111111
          }
        ]
      }
    };
  }
};
</script>
