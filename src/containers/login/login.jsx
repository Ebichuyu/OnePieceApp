// 登录路由组件
import React, { Component } from 'react'
import {NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import Logo from '../../components/logo/logo'
import './login.css'
const ListItem = List.Item;

class Login extends Component {

  state={
    username:'', //用户账号
    password:'',  //用户密码
  }

  // 监听输入改变的state值
  handleChange=(sort,val)=>{
    this.setState({
      [sort]:val
    })
  }

  // 登录
  login=()=>{
    console.log(this.state)
  }

  // 跳往登录页面
  toRegister=()=>{
    this.props.history.replace('/register')
  }

  render() {
    return ( 
      <div className='loginPage'>
        <NavBar>海&nbsp;贼&nbsp;招&nbsp;聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <WhiteSpace />
            <InputItem onChange={val=>{this.handleChange('username',val)}}>用户名:</InputItem>
            <WhiteSpace />
            <InputItem type='password' onChange={val=>{this.handleChange('password',val)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace />
            <Button type='primary' onClick={this.login}>登录</Button>
            <WhiteSpace />
            <Button onClick={this.toRegister}>还未有通缉令</Button>
          </List>
        </WingBlank>
      </div>
    );
  }
}

export default Login;