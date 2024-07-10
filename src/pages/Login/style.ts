import styled from "styled-components";
import loginBg from '../../assets/img/loginBg.png'
import loginHeaderBg from '../../assets/img/loginHeaderBg.png'
import loginBox from '../../assets/img/loginBox.png'
import iconUsername from '../../assets/img/icons/iconUsername.png'
import iconPassword from '../../assets/img/icons/iconPassword.png'
import iconEye from '../../assets/img/icons/iconEye.png'
import iconCloseEye from '../../assets/img/icons/iconCloseEye.png'
import loginButtonBg from '../../assets/img/loginButtonBg.png'

export const LoginStyle = styled.div`
    width: 1920px;
    height: 1080px;
    overflow: hidden;
    background-image: url(${loginBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    padding: 32px 49px;
`

export const LoginHeaderStyle = styled.div`
    height: 52px;
    background-image: url(${loginHeaderBg});
    background-size: 430px 52px;
    background-repeat: no-repeat;
`

export const LoginBoxStyle = styled.div`
    width: 500px;
    height: 542px;
    position: absolute;
    top: 250px;
    right: 285px;
    background-image: url(${loginBox});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 173px 45px 0 45px;
`

export const LoginInputStyle = styled.div`

    & > div {
        position: relative;
        height: 65px;
        line-height: 65px;
        background-color: #F3F5F9;
        border-radius: 8px;
        margin-bottom: 45px;
        overflow: hidden;
        &:last-child {
            margin-bottom: 0;
        }
        padding: 0 59px;

        .icon {
            position: absolute;
            display: inline-block;
            width: 28px;
            height: 28px;
            background-size: 100% 100%;
            background-repeat: no-repeat;

            &-usename {
                left: 19px;
                top: 18px;
                background-image: url(${iconUsername});
            }
            &-password {
                left: 19px;
                top: 18px;
                background-image: url(${iconPassword});
            }

            &-eye {
                width: 32px;
                height: 32px;
                right: 19px;
                top: 17px;
                background-image: url(${iconEye});
                cursor: pointer;
                &.close {
                    background-image: url(${iconCloseEye});
                }
            }
        }

        input{
            width: 100%;
            height: 100%;
            background-color: transparent;
            outline: none;
            border: none;
            font-size: 18px;
            caret-color: #15212F;

            &:focus {
                border: none;
                box-shadow: none;
            }

            &::placeholder {
                font-size: 18px;
                color: #CBCBCB;
            }
        }
    }
`


export const LoginButtonStyle = styled.div`
    .loginButton {
        display: inline-block;
        width: 100%;
        height: 65px;
        background-image: url(${loginButtonBg});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-top: 82px;
        border: none;
        cursor: pointer;
        &[disabled] {
            cursor: not-allowed;
            opacity: 0.7;
        }
    }
`