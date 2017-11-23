<template>
  <mu-popup position="left" popupClass="demo-popup-left" :open="regionPopup.flag">
    <RegionList />
  </mu-popup>
</template>

<script>
import { mapState } from 'vuex';
import RegionList from '@/components/RegionList/index';

export default {
  computed: {
    ...mapState({
      regionPopup(state) {
        const regionPopup = state.regionPopup ? state.regionPopup : { flag: false };
        return regionPopup;
      },
    }),
  },
  components: {
    RegionList,
  },
};
</script>

<style lang="scss">
.demo-popup-left {
  display: flex;
  height: 100%;
  overflow-y: scroll;
}
</style>
