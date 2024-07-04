import { useState } from "react"
import { PageCenterStyle, PageMainInfoStyle } from "./style"
import { VideoBox } from "../../components/VideoBox"
import { InfoItem } from "./components/InfoItem"

const testVideoList = [
    {url: ""},
    {url: ""},
    {url: ""},
    {url: ""},
    {url: ""},
    {url: ""},
    {url: ""},
    {url: ""},
    {url: ""},
]

export const PageCenter = () => {
    const [videoList, setVideoList] = useState(testVideoList)
    return (
        <PageCenterStyle>
            <PageMainInfoStyle>
                <InfoItem value={28} label="温度°C" icon="temperature"></InfoItem>
                <InfoItem value={46} label="湿度°C" icon="humidness"></InfoItem>
                <InfoItem value={24} label="水槽温度°C" icon="tank-temperature"></InfoItem>
                <InfoItem value={21} label="二氧化碳%" icon="co2"></InfoItem>
                <InfoItem value={53} label="THI" icon="thi"></InfoItem>
                <InfoItem value={58} label="氨气PPM" icon="nh3-ppm"></InfoItem>
                <InfoItem value={13} label="光照LUX" icon="lux"></InfoItem>
                <InfoItem value={14} label="水质PH" icon="water-ph"></InfoItem>
            </PageMainInfoStyle>
            <VideoBox videoList={videoList} height="700" lineCont={3}></VideoBox>
        </PageCenterStyle>
    )
}