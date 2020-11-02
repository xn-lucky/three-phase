import {connect} from 'react-redux'
import Timer from '../Timer'
import {add,dec,asyncInc} from '../redux/actions'


/* const mapDispatchToProps = dispatch=>{
    return {
        onInc(){
            dispatch(add(3))
        }
    }
} */
const WithTimer = connect(state=>{
    return {
        count:state.count
    }
},{add,dec,asyncInc})(Timer)
export default WithTimer