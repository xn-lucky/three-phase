import {connect} from 'react-redux'
import Timer from '../Timer'
import {add,addAsync} from '../redux/actions'

/* function mapTimerToStore(state){
    return {
        
    }
}

function mapDispatchToStore(dispatch){
    return {
        increment(){
            dispatch(add(3))
        }
    }
}
 */
/* 若想在timer中使用redux中的数据使用content */
// const WithTimer = connect(mapTimerToStore,mapDispatchToStore)(Timer)
// 简写形式
const WithTimer = connect(state=>({count:state.count}),
  {add,addAsync})(Timer)

export default WithTimer