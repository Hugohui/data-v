import styled from "styled-components"
import comeRecordBg from '../../assets/img/comeRecordBg.png'
import outRecordBg from '../../assets/img/outRecordBg.png'

export const PageContent = styled.div`
    display: flex;
    gap: 8px;
`

export const PageLeftStyle = styled.div`
    width: 1216px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 0 20px 20px;
    background: rgba(0, 0, 0, 0.2);
    & > div {
        width: calc(100%/2 - 20px);
        height: calc(100% / 2 - 10px);
        border-radius: 8px;
        overflow: hidden;
        background-color: #000;
        img {
            width: 100%;
            height: 100%;
            /* object-fit: cover; */
            object-fit: contain;
        }
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