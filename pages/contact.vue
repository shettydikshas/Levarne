}
<template>
   <div>
      <Header/>
      <b-container class="bv-example-row">
      <b-col cols lg="8">
      <b-jumbotron>
          <h1>CONTACT US</h1>
      <hr class="my-4" />
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="formData.name"
          required
          placeholder="Enter Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="User Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.username"
          required
          placeholder="Enter UserName"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Email:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="formData.email"
          required
          placeholder="Email Id"
          description="We'll never share your email with anyone else."
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
      
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0"
       v-for="(contact,index) in contacts" :key="index"
       >
       Name: {{ contact.name }}
       UserName: {{ contact.username }}
       Email: {{ contact.email }}
       </pre>
    </b-card>
    </b-jumbotron>
      </b-col>
      </b-container>
  </div>
</template>

<script>
import Header from '~/components/Header'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        formData: {
          name: '',
          username: '',
          email:''
        },
        show: true
      }
    },
    methods: {
      ...mapActions(['echo']),
      onSubmit(evt) {
        evt.preventDefault()
        this.echo(this.formData)
        console.log('Form Data '+this.formData)
        this.formData=''
      }
    },
    computed:{
      ...mapGetters({
      contacts:'getContacts',
    })
    },
     components:{
        Header
        }
  }
</script>
<style scoped>
.jumbotron{
margin-top:10px
}
</style>>
