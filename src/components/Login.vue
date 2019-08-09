<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <input v-model="userName" placeholder="Introduzca username" id="usuario">
    <input v-model="password" type="password" placeholder="Introduzca password" id="pass">
<button class="intro" @click="procesa"> Entrar </button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  name: 'HelloWorld',
  data(){
      return {
        msg: "Entrada a la aplicacion",
        userName: '',
        password: ''
        }
    },
    computed: {

    ...mapMutations(['addUser'])
    },

    methods:{
        procesa(){
            console.log('processant ...');
            console.log('usuari : '+this.userName,'password: '+this.password);
            this.$store.commit('addUser',this.userName);

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px; 
    justify-content: center;
    padding: 15px;
    border: solid 2px red;
    
}

.login h1 {
    grid-column: 2 / 7;
    grid-row: 1 / 2;
   
}

.login #usuario {
    grid-column: 4 / 5;
    grid-row: 2 / 3 ;
   
    justify-content: center;
    

}
.login #pass {
    grid-column: 4 / 5;
    grid-row: 3 / 4 ;
    
    
    
}
.login button {
    grid-column: 4 / 5;
    grid-row: 4 / 5;
 background: blueviolet;
  max-width: 100px;
  
  justify-self: center

}

h3 {
  margin: 40px 0 0;
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
