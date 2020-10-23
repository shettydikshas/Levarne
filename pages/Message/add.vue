<template>
  <div>
    <Header/>
    <b-jumbotron>
    <h3>ADD MESSAGES</h3>
    <b-form @submit.prevent="handleSubmit">
     <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="2"
      max-rows="4"
    ></b-form-textarea>
    <br>
    <button>Submit</button>
    </b-form>
    <NuxtLink to="/Message/read">
      Read Messages
    </NuxtLink>
    </b-jumbotron>
  </div>
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
</style>