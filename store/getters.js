
  export default{

    getMessages:(state)=>{return state.messages},
    getContacts:(state)=>{
      console.log('Getters were hit')
      return state.contacts
    }
  }