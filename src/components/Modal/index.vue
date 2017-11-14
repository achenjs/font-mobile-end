<template>
  <div
    id="common-modal"
    v-if="flag"
    @click="handleClose">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      dayInfo: 'dayInfo',
    }),
  },
  props: {
    flag: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClose() {
      this.$emit('handleClose');
    },
  },
};
</script>

<style lang="scss">
#common-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  .modal-content {
    position: relative;
    z-index: 9999;
    width: 80%;
    height: 350px;
    overflow-y: auto;
    margin: 15vh auto;
    background: #fff;
  }
}
</style>


