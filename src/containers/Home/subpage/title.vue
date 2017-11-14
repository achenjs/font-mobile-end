<template lang="html">
  <div class="common-title">
    <div class="title-icon">
      <img src="../../../assets/images/home/title-left.png" alt="图片">
    </div>
    <div class="title-middle">
      {{title}}
    </div>
    <div class="title-icon">
      <img src="../../../assets/images/home/title-right.png" alt="图片">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
$homeBlue: #51a1ff;

.common-title {
  width: 100%;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  img {
    width: 2.68rem;
  }
  .title-middle {
    width: auto;
    margin-top: 5px;
    text-align: center;
    font-size: 17px;
    color: $homeBlue;
  }
}
</style>
