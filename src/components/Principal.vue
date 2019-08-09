<template>
  <div class="principal">
    <h1 class="titol">{{ msg }}</h1>
    <textarea class="areacentral" v-model="messages" placeholder="show multiple lines">Lectura</textarea>
    <textarea class="areainferior" v-model="message" placeholder="add multiple lines">Escritura</textarea>
    <ul id="usuarios"> Lista de usuarios
        <li v-for="item in getUserList">{{item}}</li>
        <li>segon item </li>
    </ul>
    <button class="intro" @click="procesa"> Entrar </button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'Principal',
  data(){
      return {
        msg: "Entrada a la pantalla principal",
        userName: '',
        message: '',
        messages: ''
        }
    },
    methods:{
        procesa(){
            console.log('processant ...');
            //console.log('usuari : '+this.userName,'password: '+this.password)
        }
    },
    computed: {
        ...mapGetters(['getUserList'])
    },
    mounted(){
        console.log('dom cargado.');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.principal {
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 0.2fr;
    grid-gap: 10px; 
    border: solid 2px red;

    justify-content: center;
    
}
.principal .titol{
    grid-column: 1 / 6;
    grid-row: 1 / 2 ;
    color: blue;

}

.principal .areacentral {
    grid-column: 1 / 5;
    grid-row: 2 / 6;
    background-color: rgb(61, 42, 165);
}

.principal .areainferior{
    grid-column: 1 / 5;
    grid-row: 6 / 7;
    background-color: rgb(90, 88, 99);
}
.principal .intro {
    grid-column: 1 / 2;
    grid-row: 7/8;
}
.principal #usuarios{
    grid-column: 5 / 6 ;
    grid-row: 2 / 6;
    background-color:rgb(221, 188, 188)
}

</style>
