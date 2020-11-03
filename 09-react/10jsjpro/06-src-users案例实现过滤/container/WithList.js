/* 容器 */
import {connect} from 'react-redux'
import List from '../pages/List'
import {asyncGetUser,setFilter} from '../redux/actions'


/* connect的第一个参数是将redux的数据传递给react组件 */
const WithList = connect(state =>({
    users:state.users,
    filter:state.filter
}),{asyncGetUser,setFilter})(List)

export default WithList

