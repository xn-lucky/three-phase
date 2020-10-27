//类组件
import React from 'react';

export default class Header extends React.Component {
	state = {
		text: '',
		area: '',
		select: '',
		checkbox: false,
		radio: ''
	};

	//这些方法的处理都是类似的，可以写成一个函数
	handle = (name)=>{
//接收传过来的参数,用于修改state中的值，定义时调用了这个函数，一般事件函数是要在触发后执行
//这边要return一个函数作为事件函数
        return (e)=>{
			const value = name ==='checkbox'?!this.state.checkbox:e.target.value;
		    this.setState({
			  [name]: value
		    });

		}
	}
/* 	//输入框
	handleChange = (e) => {
		//    console.log(e.target.value)
		const value = e.target.value;
		this.setState({
			text: value
		});
	};
	//文本框
	handleArea = (e) => {
		const value = e.target.value;
		this.setState({
			area: value
		});
		// console.log(value)
	};

	//下拉框
	handleSelect = (e) => {
		const value = e.target.value;
		// console.log(value)
		this.setState({
			select: value
		});
	};
	//复选框
	handleCheckbox = (e) => {
		let { checkbox } = this.state;
		console.log(checkbox);
		this.setState({
			checkbox: !checkbox
		});
	};

	//单选框
	handleRadio = (e) => {
		const value = e.target.value;
		// console.log(value)
		this.setState({
			radio: value
		});
	}; */

	render() {
		//接收函数组件传过来的数据
		// console.log(this.props.msg)
		return (
			<div>
				{/* 输入框 */}
				<input type="text" value={this.state.text} onChange={this.handle('text')} />
				<br />
				<br />
				{/* 文本框 */}
				<textarea value={this.state.area} onChange={this.handle('area')} />
				<br />
				<br />
				{/* 下拉框 */}
				<select value={this.state.select} onChange={this.handle('select')}>
					<option value="1">吃饭</option>
					<option value="2">睡觉</option>
					<option value="3">打麻将</option>
					<option value="4">喝酒</option>
					<option value="5">抽烟</option>
					<option value="6">推牌九</option>
				</select>

				<br />
				<br />
				{/* 复选框 */}
				<label>
					<input type="checkbox" checked={this.state.checkbox} onChange={this.handle('checkbox')} />
				</label>

				{/* 单选框 */}
				<input type="radio" name="gender" onChange={this.handle('radio')} value="男" />
				<input type="radio" name="gender" onChange={this.handle('radio')} value="女" />
				<div>展示单选的值--------{this.state.radio}</div>
			</div>
		);
	}
}
