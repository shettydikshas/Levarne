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


  /*  async echo({commit},formData){
        const response= await this.$axios.post('https://d5gryl2o0g.execute-api.eu-west-1.amazonaws.com/development/echo', formData);
        commit('setEchoResponse', response.data);
    }
    loadPosts({commit}){
        this.$axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(data=>{
                console.log(data.data)
                let posts=data.data
                commit('setEchoResponse', posts)
            })
            .catch(error=>{
                console.log(error)
            })
            //https://d5gryl2o0g.execute-api.eu-west-1.amazonaws.com/development/echo
            //https://cors-anywhere.herokuapp.com/https://postman-echo.com/post
    }*/
}
   
   