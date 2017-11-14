<template lang="html">
  <div id="common-search">
    <div class="search-header">
      <div class="search-back" @click="handleBack">
        <i class="iconfont icon-arrowleft"></i>
      </div>
      <div class="search-input">
        <SearchInput />
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput/index';

export default {
  components: {
    SearchInput,
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss">
#common-search {
  width: 100%;
  background: #f0f0f0;
  padding: 9px 0;
  .search-header {
    display: flex;
    align-items: center;
    .search-back {
      padding: 0 10px;
      font-size: 20px;
    }
    .search-input {
      width: 300px;
    }
  }
}
</style>
