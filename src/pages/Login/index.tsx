import { useState } from "react"
import { LoginStyle, LoginHeaderStyle, LoginBoxStyle, LoginInputStyle, LoginButtonStyle } from "./style"
import { checkLogin } from "../../api/Login"
import { useNavigate } from "react-router-dom"
import { SessionEnum } from '../../enums/constantEnum'

export const Login = () => {
    const navigate = useNavigate()

    const [LoginName, setUserName] = useState('')
    const [PassWord, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const toggleEye = () => {
        setShowPassword(!showPassword)
    }

    const loginClick = () => {
        checkLogin({
            LoginName: LoginName.trim(),
            PassWord: PassWord.trim()
        }).then((res) => {
            if (res.code === 200) {
                sessionStorage.setItem(SessionEnum.FARMID, res.data.farmID)
                navigate('/')
            }
        })
    }

    return (
        <LoginStyle>
            <LoginHeaderStyle></LoginHeaderStyle>
            <LoginBoxStyle>
                <LoginInputStyle>
                    <div>
                        <span className="icon icon-usename"></span>
                        <input type="text" placeholder="请输入登录名" onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                    <div>
                        <span className="icon icon-password"></span>
                        <input type={showPassword ? 'text' : 'password'} placeholder="请输入密码" onChange={(e) => setPassword(e.target.value)} />
                        <span className={['icon icon-eye', showPassword ? 'close' : ''].join(' ')} onClick={toggleEye}></span>
                    </div>
                </LoginInputStyle>
                <LoginButtonStyle>
                    <button className="loginButton" onClick={loginClick} disabled={!LoginName.trim() || !PassWord.trim()}></button>
                </LoginButtonStyle>
            </LoginBoxStyle>
        </LoginStyle>
    )
}