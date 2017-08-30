<template>
  <div>
    <form class="control has-icons-left has-icons-right">
      <input
        class="input is-danger"
        type="text"
        placeholder="Pokemon name"
        v-model="searchValue"
        v-on:keyup="handleKeyUp"
      />
      <span class="icon is-small is-left">
        <i class="fa fa-search"></i>
      </span>
    </form>

    <h1>Your research : {{searchValue}}</h1>
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
        searchValue: '',
    };
  },
  methods: {
    handleKeyUp: function(event) {
        this.$emit('onSearchChange', event.target.value);
    },
  },
}
</script>

<style>
</style>
