<template lang="pug">
div
  Header
  b-jumbotron
      h3 ADD MESSAGES
      b-form(@submit.prevent='handleSubmit')
        b-form-textarea#textarea(v-model='text' placeholder='Enter something...' rows='2' max-rows='4')
        button Submit
      Nuxt-link(to='/Message/read')
        | Read Messages
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Header from '~/components/Header'
export default {
  data(){
    return {
      text:''
    }
  },
  computed: mapGetters({
    messages: 'getMessages'
  }),
  methods: {
    handleSubmit () {
        this.$store.commit('addMessage', this.text)
        this.text=''
    }
  },
  components:{
    Header
  }
}
</script>
<style>
.jumbotron{
  max-width: 700px;
  margin: 50px;
  
}
button{
  margin-top: 10px;
}
</style>