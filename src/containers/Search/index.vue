<template lang="html">
  <div id="common-search">
    <SearchHead />
    <SearchList />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import SearchHead from '@/components/SearchHead/index';
import SearchList from './subpage/searchList';

export default {
  components: {
    SearchHead,
    SearchList,
  },
  methods: {
    ...mapMutations({
      setSearchValue: 'setSearchValue',
    }),
  },
  destroyed() {
    this.setSearchValue('');
  },
};
</script>
