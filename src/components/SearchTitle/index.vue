<template>
  <div id="common-title">
    <h4>{{name}}</h4>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
#common-title {
  h4 {
    background: url('../../assets/images/common/icon-right.png') no-repeat;
    background-size: 5px 10px;
    background-position: 0 center;
    padding: 5px 0 5px .2rem;
    font-size: 14px;
  }
}
</style>
