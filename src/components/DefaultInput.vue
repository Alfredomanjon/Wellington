<template>
  <input
    type="{{this.type}}"
    class="form-control default-input"
    :placeholder="this.placeholder"
    :id="this.id"
    :onInput="
      ($event) => {
        this.onChange($event);
      }
    "
  />
</template>

<script>
export default {
  props: {
    type: 'text',
    className: undefined,
    placeholder: undefined,
    id: undefined,
    onChange: undefined,
  },
};
</script>

<style scoped>
.default-input {
  text-align: center;
  width: 350px;
  height: 60px;
  border-radius: 10px;
  margin-top: 15px;
  font-size: 18px;
}
</style>
