import { PageLeftStyle } from "./style";
import { VideoBox } from "../../components/VideoBox"
import { useEffect, useState } from "react";
import useEvent from "@/hooks/useEventHook";

export const PageLeft = () => {
    const [imageList, setImageList] = useState([])

    const { subscribe } = useEvent()

    useEffect(() => {
        subscribe('onCarRecordSelectEmit', (item: any) => {
            setImageList(item?.ImgPath?.split(',').slice(0, 4))
        })
    }, [])

    return (
        <PageLeftStyle>
            {/* <VideoBox videoList={imageList}></VideoBox> */}
            {
                imageList?.map((item: string) => (
                    <div key={item}>
                        <img src={item} alt="" />
                    </div>
                ))
            }
        </PageLeftStyle>
    )
}