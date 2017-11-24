<template>
  <mu-dialog :open="flag" @close="handleClose" scrollable>
    <slot></slot>
  </mu-dialog>
</template>

<script>
export default {
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


