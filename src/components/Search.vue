<template>
  <div>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-danger" type="text" placeholder="Pokemon name" v-model="searchValue" />
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
    }
  }
</script>

<style>

</style>
