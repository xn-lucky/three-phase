/* 
  底部

*/
import React, { Component } from 'react';

//引入css
import './index.css';

export default class Footer extends Component {
	/*  handleChangeCheck=()=>{
    //点击，若原先是未勾选，改变后变成勾选状态，则list中的全部数据也要变成勾选状态,若此时是勾选状态,则改变后变成未勾选状态，所以list中的全部数据要变为未勾选状态
    //又是处理App中的数据
    //在这边调用App中定义的函数,用于处理复选框问题
    //可以直接在标签上写,作为事件函数
    this.props.allCheck()

  } */
	render() {
		//接收App传过来的数据（全部数据和已完成数据）
		const { allTotal, hasCheck, allCheck, delHasCheck } = this.props;
		return (
			<div className="todo-footer">
				<label>
					{/* footer中的复选框的值，若全部数据和已经勾选的数据的值相同，则要勾选true,否则取消勾选false */}
					<input type="checkbox" checked={allTotal !== 0 && allTotal === hasCheck} onChange={allCheck} />
				</label>
				<span>
					<span>已完成{hasCheck}</span> / 全部{allTotal}
				</span>
				<button className="btn btn-danger" onClick={delHasCheck}>
					清除已完成任务
				</button>
			</div>
		);
	}
}
