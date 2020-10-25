 export default{
 /*  addMessage(state, text){
    state.messages.push(text)
  },
 setEchoResponse(state , data){
    state.contacts.push(data) //try with response.data //try with data
  }
  setEchoResponse(state, data){
    state.contacts = data
*/
    addMessage:(state, text)=>{state.messages.push(text)},
    setEchoResponse:(state, data)=>{state.contacts.push(data)}
  }