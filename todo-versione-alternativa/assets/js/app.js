/* 
DESCRIZIONE:
## Istruzioni
Create una todo list usando VueJS.
Potete dare sfogo alla creativitá e per quanto riguarda l'HTML e il CSS.
Se non sapere che fare, di seguito trovate uno screenshot.

Funzionalitá:
- La nostra todo list avrá alcune tasks di default predefinite
- L'utente puó inserire nuove tasks
- Cliccando sulla "X" l'utente puó cancellare una task
- Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
- L'utente vuole poter indicare che la task é stata completata (con un icona cliccabile)
Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.

## Bonus-extra (opzionale)
- Quando una task é stata completa allora l'utente vuole che venga inserita in un'altra colonna tipo "tasks completate"
- se una task é stata marcata come completa per sbaglio allora vuole poterla rimettere nella todo list (cliccando su un altra icona)
- ah non é finita, dice che quando cancella una task non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"
- si, l'utente é un rompi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino"
Il nostro utente per ora sembra non avere altre richieste ... ma chissá se dopo gli viene in mente che vuole anche poter rimettere una task cancellata nella lista di tasks da fare, magari l'ha cancellata per sbaglio...
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
    /**
     * Cambia il valore di done da vero a falso e viceversa
     * @param {index} i 
     */
    change_done(i) {
      //console.log('hai cliccato sul text', i);
      if (this.tasks[i].done === false) {
        this.tasks[i].done = true;
      } else if (this.tasks[i].done === true) {
        this.tasks[i].done = false;
      }
    },
    /**
     * Aggiunge una task a todo premendo button aggiungi o enter dalla tastiera, solo se il numero dei caratteri è >= 4
     */
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
    /**
     * Aggiunge la task a completed e la rimuove da todo
     * @param {index} index
     */
    add_completed(index) {
      let completedTask = {
        text: this.tasks[index].text,
        done: false,
      };
      console.log(completedTask);
      this.completed.push(completedTask);
      this.tasks.splice(index, 1);
    },
    /**
     * Sposta la task dal completed a todo
     * @param {index} index
     */
    return_todo_completed(index) {
      //console.log('torna da dove sei venuto!!🤣');
      let return_task_completed = {
        text: this.completed[index].text,
        done: false,
      };
      this.tasks.push(return_task_completed);
      this.completed.splice(index, 1);
    },
    /**
     * Aggiunge la task a trashed e la rimuove da todo
     * @param {index} index
     */
    add_trashed(index) {
      let trashedTask = {
        text: this.tasks[index].text,
        done: false,
      };
      console.log(trashedTask);
      this.trashed.push(trashedTask);
      this.tasks.splice(index, 1);
    },
    /**
     * Sposta la task dal trashed a todo
     * @param {index} index
     */
    return_todo_trashed(index) {
      //console.log('torna da dove sei venuto!!🤣');
      let return_task_trashed = {
        text: this.trashed[index].text,
        done: false,
      };
      this.tasks.push(return_task_trashed);
      this.trashed.splice(index, 1);
    },
    /**
     * Deleted all tasks
     */
    remove_task() {
      console.log("hai cliccato la empy");
      this.trashed.splice("");
    },
  },
});
