<template>
  <div>
    <!-- @submit.prevent - JS - event.preventDefault(); -->
    <form @submit.prevent="addTask(items.length + 1)" class="form">
      <!-- v-model - JS - document.querySelector('.input').value -->
      <input
          class="input"
          type="text"
          v-model.trim="inputValue"
          placeholder="Введите новую задачу"
          :class="{ inputWarning: messagesWarning[0].necessarilyField }"
      />
      <div v-if="messagesWarning[0].necessarilyField" class="warning">
        {{ messagesWarning[0].text }}
      </div>
      <textarea
          class="textarea"
          cols="30"
          rows="10"
          placeholder="Описание задачи"
          v-model.trim="textareaValue"
      ></textarea>
      <button class="button-submit" type="submit">Добавить задачу</button>
    </form>

    <div class="wrapper-items">
      <div v-for="(item, index) in items" :key="index" class="card">
        <p class="number-task">№ {{ item.id }}</p>
        <p class="task-title">Задача: {{ item.title }}</p>
        <p class="task-description">Описание: {{ item.description }}</p>

        <img
            class="icon-delete"
            @click="deteleTask(index)"
            src="https://www.mtt.ru/static/dist_vue/img/close.601342c2.svg"
            alt="icon-delete"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Список всех задач
      items: [
        {
          id: 1,
          title: "Первая задача",
          description: "Описание задачи",
        },
      ],
      // Поле ввода задачи и поле описания
      inputValue: "",
      textareaValue: "",
      messagesWarning: [
        {
          necessarilyField: false,
          text: "Обязательное поле для заполнения!",
        },
        {
          necessarilyField: false,
          text: "Должен быть минимум 1 символ",
        },
      ],
      toggleShowSearch: true,
    };
  },
  methods: {
    addTask(lengthArrayItems) {
      // Валидация, на пустое поли input
      if (this.inputValue === "") {
        setTimeout(() => {
          this.messagesWarning[0].necessarilyField = false;
        }, 2500);
        this.messagesWarning[0].necessarilyField = true;
        return;
      } else {
        this.messagesWarning[0].necessarilyField = false;
      }

      // Добавление новой задачи + описание + проставляем id
      this.items.push({
        id: lengthArrayItems,
        title: this.inputValue,
        description: this.textareaValue,
      });

      // Очищение полей
      this.inputValue = "";
      this.textareaValue = "";
    },

    deteleTask(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style scoped>
body {
  text-align: center;
  color: #000;
  margin-top: 40px;
}

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
}

.wrapper-items {
  width: 500px;
  margin: 0 auto;
}

.input {
  padding: 10px 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 2px solid #fff;
}

.input:focus,
.textarea:focus {
  border: 2px solid orange;
}

.textarea {
  resize: none;
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 15px;
  border: 2px solid #fff;
}

.form {
  width: 500px;
  display: flex;
  flex-direction: column;
  background: #993399;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
}

.card {
  background: #993399;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.warning {
  text-align: center;
  margin: 0 auto 15px auto;
  width: 70%;
  padding: 5px;
  border-radius: 8px;
  background: #e30611;
  color: #fff;
}

.inputWarning {
  border: solid 2px #e30611;
}

.button-submit {
  width: 200px;
  margin: 0 auto;
  padding: 10px 15px;
  border-radius: 8px;
  border: 2px solid #993399;
  color: #993399;
  font-weight: bold;
  background: #fff;
}

.button-submit:hover {
  transition: 0.5s;
  border: 2px solid #fff;
  background: #993399;
  color: #fff;
  cursor: pointer;
}

.icon-delete {
  width: 25px;
  height: 25px;
  background: #fff;
  padding: 5px;
  border-radius: 8px;
  margin-left: auto;
}

.icon-delete:hover {
  cursor: pointer;
  transition: 0.5s;
  background: #e30611;
}

.number-task {
  font-weight: bold;
  color: #dc3545;
  background: #fff;
  padding: 2px 4px;
  border-radius: 8px;
  margin-bottom: 5px;
}

.task-title {
  margin-bottom: 5px;
  color: #ffe484;
  word-break: break-all;
}

.task-description {
  word-break: break-all;
}
</style>
