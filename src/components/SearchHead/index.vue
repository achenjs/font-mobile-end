<template>
  <div id="common-searchHead">
    <div class="search-header">
      <div class="search-input">
        <SearchInput />
      </div>
      <div class="search-back"
        @click="handleBack">
        取消
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
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss">
#common-searchHead {
  width: 100%;
  background: #f0f0f0;
  padding: 9px 0;
  .search-header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .search-back {
      font-size: 14px;
    }
    .search-input {
      width: 6rem;
    }
  }
}
</style>
