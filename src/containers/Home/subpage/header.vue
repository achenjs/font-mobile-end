<template lang="html">
  <div id="common-header">
      <span class="header-left" @click="handleRegion">
        {{cityInfo.name}}
        <i class="iconfont icon-arrowdown"></i>
      </span>
      <div class="header-middle" @click="handleSearch">
        <SearchInput />
      </div>
      <div class="header-right">
        <i class="iconfont icon-account"></i>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import SearchInput from '@/components/SearchInput';

export default {
  components: {
    SearchInput,
  },
  computed: {
    ...mapState({
      cityInfo: 'HeadCityInfo',
    }),
  },
  methods: {
    ...mapMutations({
      setRegionPopup: 'setRegionPopup',
    }),
    handleRegion() {
      this.setRegionPopup({
        flag: true,
        go: 'head',
      });
    },
    handleSearch() {
      this.$router.push('/Search');
    },
  },
};
</script>

<style lang="scss">
#common-header {
  padding: 9px 0;
  display: flex;
  align-items: center;
  * {
    line-height: 1;
    font-size: 14px;
  }
  .header-left {
    width: 1.58rem;
    text-align: center;
  }
  .header-middle {
    flex: 1;
  }
  .header-right {
    width: .92rem;
    text-align: center;
    i {
      font-size: 18px;
    }
  }
}
</style>
