<template lang="html">
  <div id="common-header">
      <span class="header-left">
        北京
        <i class="iconfont icon-arrowdown"></i>
      </span>
      <div class="header-middle">
        <SearchInput />
      </div>
      <div class="header-right">
        <i class="iconfont icon-account"></i>
      </div>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput';

export default {
  components: {
    SearchInput,
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
