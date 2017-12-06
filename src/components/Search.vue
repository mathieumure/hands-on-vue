<template>
  <div>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-danger" type="text" placeholder="Pokemon name" v-model="searchValue" @keyup="handleKeyUp"/>
      <span class="icon is-small is-left">
            <i class="fa fa-search"></i>
          </span>
    </div>
    <h1>Your search value: {{searchValue}}</h1>
  </div>
</template>


<script>
  export default {
    name: 'search',
    data() {
      return {
        searchValue: ''
      }
    },
    methods: {
      handleKeyUp: function (event) {
        this.$emit('onSearchChange', event.target.value)
      }
    }
  }
</script>

<style>

</style>
