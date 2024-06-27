import { PageCenterStyle, PageCenterInfoStyle, PageCenterMainStyle, InfoItemStyle } from "./style"

export const PageCenter = () => {
    return (
        <PageCenterStyle>
            <PageCenterMainStyle></PageCenterMainStyle>
            <PageCenterInfoStyle>
                <InfoItemStyle>
                    <p className="Num">2000</p>
                    <p className="Text">总存栏（只）</p>
                </InfoItemStyle>
                <InfoItemStyle>
                    <p className="Num">2000</p>
                    <p className="Text">泌乳羊（只）</p>
                </InfoItemStyle>
                <InfoItemStyle>
                    <p className="Num">2000</p>
                    <p className="Text">日产奶量（KG）</p>
                </InfoItemStyle>
                <InfoItemStyle>
                    <p className="Num">2000</p>
                    <p className="Text">日增重（KG/天）</p>
                </InfoItemStyle>
            </PageCenterInfoStyle>
        </PageCenterStyle>
    )
}