export default {
    async echo ({ commit }, formData) {
    let options = {
    url: "https://jsonplaceholder.typicode.com/users",
    method: "POST",
    headers: {
    "x-api-key": "apikeyhere",
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    data: formData
    
    }
    let response = await this.$axios(options);
    commit('setEchoResponse', response.data);
    }
}
   
   