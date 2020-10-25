 export default{
    addMessage:(state, text)=>{state.messages.push(text)},
    setEchoResponse:(state, data)=>{
      console.log('Mutations echo was hit')
      state.contacts.push(data)
    }
  }