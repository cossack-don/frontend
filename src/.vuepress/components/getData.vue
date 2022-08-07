<template>
<div>
  <button @click="getUsers">Получить данные с back-end</button>
  <div class="demo">Массив пустых данных - {{arrayUsers}}</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      arrayUsers:[]
    }
  },
  methods:{
    getUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => this.arrayUsers = json)
    }
  }
};
</script>