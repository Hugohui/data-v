import { PageTopStyle } from "./style";
import { BorderBox } from "../../components/basic/BorderBox"
import FattenRatio from "./charts/FattenRatio";
import { FeedTable } from "./charts/FeedTable";
import { BreedingRateBox } from "./charts/BreedingRateBox";

export const PageTop = () => {
    return (
        <PageTopStyle>
            <BorderBox title="羊群结构" height="410">
                <FattenRatio></FattenRatio>
            </BorderBox>
            <BorderBox title="繁殖事件统计" height="410">
                <FeedTable></FeedTable>
            </BorderBox>
            <BorderBox title="繁育水平统计" height="410" className="DungClearBox">
                <BreedingRateBox></BreedingRateBox>
            </BorderBox>
        </PageTopStyle>
    )
}