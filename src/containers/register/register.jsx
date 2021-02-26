// 注册路由组件
import React, { Component } from 'react'
import {NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import Logo from '../../components/logo/logo'
import './register.css'
const ListItem = List.Item;

class Register extends Component {

  state={
    username:'', //用户账号
    password:'',  //用户密码
    password2:'',  //确认密码
    usertype:'haijun',   //用户类型
  }

  // 监听输入改变的state值
  handleChange=(sort,val)=>{
    this.setState({
      [sort]:val
    })
  }

  // 注册
  register=()=>{
    console.log(this.state)
  }

  // 跳往登录页面
  toLogin=()=>{
    this.props.history.replace('/login')
  }

  render() {
    return ( 
      <div className='registerPage'>
        <NavBar>海&nbsp;贼&nbsp;招&nbsp;聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <WhiteSpace />
            <InputItem placeholder='请输入用户名' onChange={val=>{this.handleChange('username',val)}}>用户账号:</InputItem>
            <WhiteSpace />
            <InputItem placeholder='请输入密码' type='password' onChange={val=>{this.handleChange('password',val)}}>用户密码:</InputItem>
            <WhiteSpace />
            <InputItem placeholder='请再次确认密码' type='password' onChange={val=>{this.handleChange('password2',val)}}>确认密码:</InputItem>
            <WhiteSpace />
            <ListItem>
              <span>用户类型：</span>
              <Radio checked={this.state.usertype === '海军'} onChange={val=>{this.handleChange('usertype','海军')}}>海军&nbsp;&nbsp;&nbsp;</Radio>
              <Radio checked={this.state.usertype === '七武海'} onChange={val=>{this.handleChange('usertype','七武海')}}>七武海</Radio>
            </ListItem>
            <WhiteSpace />
            <Button type='primary' onClick={this.register}>注册</Button>
            <WhiteSpace />
            <Button onClick={this.toLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    );
  }
}

export default Register;