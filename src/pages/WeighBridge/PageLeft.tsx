import { PageLeftStyle } from "./style";
import { VideoBox } from "../../components/VideoBox"
import { useEffect, useState } from "react";
import useEvent from "@/hooks/useEventHook";

export const PageLeft = () => {
    const [imageList, setImageList] = useState([])

    const { subscribe } = useEvent()

    useEffect(() => {
        subscribe('onCarRecordSelectEmit', (item: any) => {
            setImageList(item?.ImgPath?.split(','))
        })
    }, [])

    return (
        <PageLeftStyle>
            {/* <VideoBox videoList={imageList}></VideoBox> */}
            {
                imageList?.map((item: string) => (
                    <div>
                        <img src={item} alt="" />
                    </div>
                ))
            }
        </PageLeftStyle>
    )
}