<template>
  <div class='hello' id="HelloWorld">

    <p>{{message}}</p>
    <button v-on:click="reverseMessage">逆转消息</button>
    <input type="text" v-model="message">

    <p>Using mustaches: {{rawHtml}}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    
    <p>Original message:"{{message}}"</p>
    <p>Computed reversed message: "{{reversedMessage}}"</p>

    <div class="static" v-bind:class="{active:isActive,'text-danger':hasError}"></div>
    <div v-bind:class="classObject"></div>
    <div v-bind:class="[activeClass,errorClass]"></div>

    <div v-if="Math.random()>0.5">Now you see me</div>
    <div v-else>Now you don't</div>
         
     <div v-for="(value,key,index) in object">
       {{index}}.{{key}}.{{value}}
     </div>

     <ul>
       <li v-for="n in eventNumbers">{{n}}</li>
     </ul>

     <form v-on:submit.prevent="addNewTodo">
       <label for="new-todo">Add a todo</label>
       <input v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat">
       <button>Add</button>
     </form>
     <ul>
       <li is="TodoItem"
           v-for="(todo,index) in todos"
           v-bind:key="todo.id"
           v-bind:title="todo.title"
           v-on:remove="todos.splice(index,1)"></li>
     </ul>
     <Example/>
     <BaseInput>
        <template slot="header">
          <h1>Here might be a page title</h1>
        </template>

        <p>A paragraph for the main content</p>
        <p>And another one.</p>

        <template slot="footer">
          <p>Here's some contact</p>
        </template>
     </BaseInput>

     <!-- 作用域插槽 -->
     <ActionScope>
        <template scope="aaa">
          <span>hello from parent</span>
          <span>{{aaa.text}}</span>
        </template>
     </ActionScope>
    <br>
  </div>
</template>
<script>

import TodoItem from "./TodoItem";
import Example from "./Example";
import BaseInput from "./BaseInput";
import ActionScope from "./ActionScope"
import List from "./List"

export default {
  name: "HelloWorld",
  data() {
    return {
      message: "Hello Vue.js!",
      a: 1,
      rawHtml: "<span>this is show</span>",
      isActive: true,
      hasError: false,
      classObject: {
        active: true,
        "text-danger": false
      },
      activeClass: "active",
      errorClass: "text-danger",
      object: {
        firstname: "john",
        lastname: "Doe",
        age: 30
      },
      numbers: [1, 2, 3, 4, 5],
      newTodoText: "",
      todos: [
        {
          id: 1,
          title: "Do the dishes"
        },
        {
          id: 2,
          title: "Take out the trash"
        },
        {
          id: 3,
          title: "Mow the lawn"
        }
      ],
      nextTodoId: 4
    };
  },
  computed: {
    //计算属性
    reversedMessage: function() {
      //this指向vm实例
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    eventNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      });
    }
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
    addNewTodo: function(){
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  },
  created: function() {
    console.log("a is:" + this.a);
  },
  components:{
    TodoItem: TodoItem,
    Example: Example,
    BaseInput: BaseInput,
    ActionScope: ActionScope,
    List: List
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
