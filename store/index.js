
import Vuex from "vuex"


const createStore = () => {
    return new Vuex.Store({
        state : {
            products : [],
           
        },
        mutations :{
            
        },
        actions : {
            nuxtServerInit(vuexContext, context){
                return context.$axios.get("/")
                .then(response=>{
                    console.log(response.data.products)
                    
                })
            }
            
           
            
        },
        getters : {
            getProducts(state){
                return state.products
            }
        }
    })
}

export default createStore
