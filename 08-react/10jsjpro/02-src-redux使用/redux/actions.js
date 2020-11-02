const { ADD } = require("./constants");


function add(data){
    return {type:ADD,data}
}

function addAsync(data){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(add(data))
        },2000)
    }
}

export {add,addAsync}