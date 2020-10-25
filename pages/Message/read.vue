
<template lang="pug">
div
  Header
  b-jumbotron(property='fluid')
      h3  Messages
      ul
        li.item(v-for='(msg, index) in messages' :key='index')
          b {{ msg}}
          br
      Nuxt-link(to='/Message/add')
        | Add Mesaages
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