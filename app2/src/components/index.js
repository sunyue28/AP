import React from 'react'
import '../style/index.css'
import axios from 'axios'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            dname: "",
            dpass: "",
            zname: "",
            zpass: ""
        }
    }
    showbg() {
        if (this.state.index == 0) {
            this.setState({
                index: 1
            })
        } else {
            this.setState({
                index: 0
            })
        }
    }
    changedname(e) {
        this.setState({
            dname: e.target.value
        })
    }
    changedpass(e) {
        this.setState({
            dpass: e.target.value
        })
    }
    changezname(e) {
        this.setState({
            zname: e.target.value
        })
    }
    changezpass(e) {
        this.setState({
            zpass: e.target.value
        })
    }
    denglu() {
        if (this.state.dname != "" && this.state.dpass != "") {
            axios.post('/in', {
                "username": this.state.dname,
                "password": this.state.dpass
            }).then((res) => {
                if (res.data.ok == 0) {
                    console.log(res)
                    alert('登录成功')
                    window.location.href = "http://localhost:3001/Home"
                } else {
                    alert('账户和密码不匹配')
                }
            })
        } else {
            alert('参数缺失')
        }
    }
    zhuce() {
        if (this.state.zname != "" && this.state.zpass != "") {
            axios.post('/up', {
                "username": this.state.zname,
                "password": this.state.zpass
            }).then((res) => {
                console.log(res)
                if (res.data.ok == 0) {
                    alert('注册成功')
                } else if (res.data.ok == 1) {
                    alert('用户名已存在')
                }
            })
        } else {
            alert('参数缺失')
        }
    }
    render() {
        return (<div className="login" >
            <div className="top">
                <div className="xinxi">
                    <div className="title">
                        <div className={this.state.index == 0 ? 'active' : ''} onClick={this.showbg.bind(this)}>登录</div>
                        <div className={this.state.index == 1 ? 'active' : ''} onClick={this.showbg.bind(this)}>注册</div>
                    </div>
                    <div className="con" style={{ display: this.state.index == 0 ? 'block' : 'none' }}>
                        <div className="ys1">
                            <div>用户名：</div>
                            <div><input type="text" defaultValue={this.state.dname} onChange={this.changedname.bind(this)} /></div>
                        </div>
                        <div className="ys1">
                            <div>密 码 ：</div>
                            <div><input type="password" defaultValue={this.state.dpass} onChange={this.changedpass.bind(this)} /></div>
                        </div>
                        <div className="btn" onClick={this.denglu.bind(this)}>登录</div>
                    </div>
                    <div className="con" style={{ display: this.state.index == 1 ? 'block' : 'none' }}>
                        <div className="ys1">
                            <div>用户名：</div>
                            <div><input type="text" defaultValue={this.state.zname} onChange={this.changezname.bind(this)} /></div>
                        </div>
                        <div className="ys1">
                            <div>密 码 ：</div>
                            <div><input type="password" defaultValue={this.state.zpass} onChange={this.changezpass.bind(this)} /></div>
                        </div>
                        <div className="btn" onClick={this.zhuce.bind(this)}>注册</div>
                    </div>
                </div>
            </div>
        </div>)
    }
}
export default Login;





