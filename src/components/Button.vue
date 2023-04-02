<template>
  <button
    @click="this.onClick()"
    :class="[
      'btn component-button',
      'component-button--' + this.defaultVariant,
      this.className,
    ]"
    :type="this.type"
    :disabled="this.disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: undefined,
    defaultVariant: 'primary',
    className: '',
    type: 'button',
    disabled: false,
  },
  methods: {
    getClassName: function () {
      return (
        'btn component-button component-button--' +
        this.variant +
        ' ' +
        this.className
      );
    },
  },
};
</script>

<style scoped>
.component-button {
  width: 200px;
  height: 50px;
  border-radius: 200px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.component-button--primary {
  background-color: #00898f;
}

.component-button--outlined {
  background-color: white;
  border: 2px solid #00898f;
}
</style>
