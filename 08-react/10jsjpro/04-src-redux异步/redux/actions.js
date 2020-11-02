

function add(data){
    return {type:'ADD',data}
}
function dec(data){
    return {type:'DEC',data}
}

function asyncInc(data){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(add(data))
        },2000)
    }
}

export {add,dec,asyncInc}

