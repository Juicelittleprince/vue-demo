export default {
    increment ({ commit },obj) {
        console.log(obj);
       
	    commit('setMsg',obj);
	}
}