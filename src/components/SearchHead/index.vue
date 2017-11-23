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
import { mapMutations } from 'vuex';
import SearchInput from '@/components/SearchInput/index';

export default {
  components: {
    SearchInput,
  },
  methods: {
    ...mapMutations({
      setRegionPopup: 'setRegionPopup',
    }),
    handleBack() {
      this.setRegionPopup({
        flag: false,
      });
      if (this.$route.path === '/Search') {
        this.$router.back();
      }
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
