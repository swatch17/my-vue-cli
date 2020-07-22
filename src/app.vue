<template>
  <div class="test">
    <p>Vue-cli-demo</p>
    <p class="title">{{ test }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "搭建脚手架",
    };
  },
};
</script>

<style lang='scss' scoped>
    .test{
        color:'#999';
        .title{
            color:aquamarine;
            transform: rotate(30deg);
            margin-top: 50px;
        }
    }
</style>
