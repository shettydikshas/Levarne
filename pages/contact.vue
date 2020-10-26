<template lang="pug">
div
  Header
  b-container.bv-example-row
      b-col(cols='' lg='8')
        b-jumbotron
          h1 CONTACT US
          hr.my-4
          b-form(@submit='onSubmit')
            b-form-group#input-group-1(label='Name:' label-for='input-1')
              b-form-input#input-1(v-model='form.name' required='' placeholder='Enter Name')
            b-form-group#input-group-2(label='User Name:' label-for='input-2')
              b-form-input#input-2(v-model='form.username' required='' placeholder='Enter UserName')
            b-form-group#input-group-5(label='Email:' label-for='input-5')
              b-form-input#input-5(v-model='form.email' required='' placeholder='Enter Email Id' description="We'll never share your email with anyone else.")
            b-button(type='submit' variant='primary') Submit
          b-card.mt-3(header='Form Data Result')
            pre.m-0(v-for='cont in contacts').
                Name: {{ cont.name }}
                UserName: {{ cont.username }}
                Email: {{ cont.email }}

</template>

<script>
import Header from '~/components/Header'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        form: {
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
        let formData=this.form
        evt.preventDefault()
        this.echo(formData)
        console.log('Form Data '+formData)
        this.form.name=""
        this.form.username=""
        this.form.email=""
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
