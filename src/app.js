import Vue from 'vue';

document.addEventListner('DomContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      todos: [
        {name: "Buy shopping", priority: true},
        {name: "Clean bathroom", priority: false},
        {name: "Car's MOT", priority: true}
      ],

newToDo: "",
},
methods: {
  saveNewToDo: function(){

  }
}
    
  });
});
