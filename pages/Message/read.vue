
<template>
  <div>
    <Header/>  
    <b-jumbotron property="fluid">
    <h3> Messages</h3>
      <ul>
        <li class="item" v-for="(msg, index) in messages" :key="index">
          <b>{{ msg}}</b>
          <br>
        </li>
      </ul>
     <NuxtLink to="/Message/add">
      Add Mesaages
    </NuxtLink>
    </b-jumbotron>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0" v-for="(data,index) in contacts" :key="index">
          {{ data}}
      </pre>
    </b-card>
    
  </div>
</template>


<script>
import {mapGetters} from 'vuex'
import Header from '~/components/Header'
  export default {
    data() {
      return {}
    },
    computed:{
      ...mapGetters({
          messages: 'getMessages',
          contacts: 'getContacts'
      })
    },
    components:{
      Header
    }
  }
</script>
<style>
ul{
  list-style-type : none; 
}
.item{
  border: 1px solid lightgray;
  margin:5px;
  padding: 10px;
}


</style>