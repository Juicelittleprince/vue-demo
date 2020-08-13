export default{
    setMsg(state,obj){
        console.log(obj.msg);
        state.param.msg=obj.msg;
    }
}