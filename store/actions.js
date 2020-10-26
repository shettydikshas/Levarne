export default {
    async echo ({ commit }, formData) {
    let options = {
    url: "https://jsonplaceholder.typicode.com/users",
    method: "POST",
    headers: {
    "x-api-key": "apikeyhere"
    },
    data: formData
    
    }
    let response = await this.$axios(options);
    console.log('echo action was hit')
    commit('setEchoResponse', response.data);
    },
  
}
   
   