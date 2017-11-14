<template lang="html">
  <div class="search-container">
    <input
      placeholder="请输入学校 / 场地 / 公司"
      v-model="value"
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup.13="handleEnter" />
    <i
      class="iconfont icon-search"
      @click="handleEnter"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    handleFocus() {
      this.$router.push('/Search');
    },
    handleBlur() {
    },
    handleEnter() {
      console.log(this.value);
    },
  },
};
</script>

<style lang="scss">
.search-container {
  background-color: #fff;
  overflow: hidden;
  padding: 5px;
  border-radius: 5px;
  i {
    color: #979797;
  }
  input {
    width: 90%;
    font-size: 14px;
    font-weight: normal;
    padding-left: 9px;
    &::placeholder {
      font-size: 14px;
      color: #b5b5b5;
      vertical-align: middle;
    }
  }
}
</style>
