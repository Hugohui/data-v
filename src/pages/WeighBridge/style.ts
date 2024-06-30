import styled from "styled-components"
import comeRecordBg from '../../assets/img/comeRecordBg.png'
import outRecordBg from '../../assets/img/outRecordBg.png'

export const PageContent = styled.div`
    display: flex;
    gap: 8px;
`

export const PageLeftStyle = styled.div`
    flex: 1;
    & > div {
        height: 100%;
    }
`

export const PageRightStyle = styled.div`
    width: 610px;
    .ComeOutRecordBox {
        .ComeOutRecord {
            margin-top: 27px;
            display: flex;
            justify-content: center;
            gap: 28px;

            & > div {
                height: 98px;
                width: 242px;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                position: relative;

                & > div {
                    height: 30px;
                    line-height: 30px;
                    position: absolute;
                    left: 0;
                    bottom: 19px;
                    font-family: DIN;
                    font-weight: bold;
                    font-size: 40px;
                    color: #FDFDFD;
                    padding: 0 18px;
                    .Num {
                        font-size: 40px;
                        color: #FDFDFD;
                    }
                    span {
                        font-family: PingFang SC;
                        font-weight: 500;
                        font-size: 16px;
                        margin-left: 8px;
                    }
                }
            }

            .Come {
                background-image: url(${comeRecordBg});
            }

            .Out {
                background-image: url(${outRecordBg});
            }
        }

        .ComeOutRecordTable{
            margin-top: 38px;
            height: calc(100% - 173px);
        }
    }
    
`