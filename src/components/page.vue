<template>
  <div>
    <span @click="handleClickAdd(1)">+</span>
    {{count}}, {{cityName}}, {{a}}
    <div>
      {{doneTodos}}, {{$store.state.todos}}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      name: '北京',
    };
  },
  computed: {
    ...mapState({
      count: state => state.count,
      cityName: 'cityName',
      a(state) {
        return state.count + this.name;
      },
      todo() {
        return this.$store.getters.doneTodos;
      },
    }),
    ...mapGetters({
      doneTodos: 'doneTodos',
    }),
    ...mapMutations({
      increment: 'increment',
    }),
  },
  // mapSta
  methods: {
    ...mapMutations({
      handleClickAdd: 'increment',
    }),
  },
};
</script>
