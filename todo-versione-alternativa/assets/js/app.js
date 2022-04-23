/* 
Descrizione:
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no*/

/*MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.*/

/*MILESTONE 2
 Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.*/

/*MILESTONE 3
 Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.*/

/* Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

const app = new Vue({
  el: "#app",

  data: {
    active: 0,

    new_task: "",
    completed_task: "",
    trashed_task: "",

    completed: [],
    trashed: [],

    tasks: [
      {
        text: "studiare la documentazione",
        done: true,
      },
      {
        text: "finire esercizio assegnato",
        done: true,
      },
      {
        text: "cucinare",
        done: true,
      },
      {
        text: "cenare",
        done: false,
      },
      {
        text: "passare l'aspirapolvere",
        done: false,
      },
    ],
  },

  methods: {
    change_done(i) {
      //console.log('hai cliccato sul text', i);
      if (this.tasks[i].done === false) {
        this.tasks[i].done = true;
      } else if (this.tasks[i].done === true) {
        this.tasks[i].done = false;
      }
    },
    remove_task() {
      console.log("hai cliccato la empy");
      this.trashed.splice('');
    },

    add_todo_list() {
      //console.log("hai cliccato aggiungi");
      //console.log(this.new_task);
      let newTask = {
        text: this.new_task,
        done: false,
      };
      if (newTask.text.length >= 4) {
        this.tasks.push(newTask);
        this.new_task = "";
      }
      /* console.log(newTask.text.length); */
    },

    add_completed(index) {
      let completedTask = {
        text: this.tasks[index].text,
        done: false,
      };
      console.log(completedTask);
      this.completed.push(completedTask);
      this.tasks.splice(index, 1);
    },

    return_todo_completed(index) {
      //console.log('torna da dove sei venuto!!🤣');
      let return_task_completed = {
        text: this.completed[index].text,
        done: false,
      };
      this.tasks.push(return_task_completed);
      this.completed.splice(index, 1);
    },

    add_trashed(index) {
      let trashedTask = {
        text: this.tasks[index].text,
        done: false,
      };
      console.log(trashedTask);
      this.trashed.push(trashedTask);
      this.tasks.splice(index, 1);
    },

    return_todo_trashed(index) {
      //console.log('torna da dove sei venuto!!🤣');
      let return_task_trashed = {
        text: this.trashed[index].text,
        done: false,
      };
      this.tasks.push(return_task_trashed);
      this.trashed.splice(index, 1);
    },
  },
});
