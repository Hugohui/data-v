import { FC, useEffect, useState } from 'react'
import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { sheePedigreeOptions } from "./SheePedigreeOptions"
import { getSheePedigree } from '@/api/IndexPage'

const SheePedigree: FC<{ farmId: any }> = ({ farmId }) => {
  const renderer = useConfigStore((state) => state.renderer);
  const [pedigreeData, setPedigreeData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getSheePedigree({
      farmId
    }).then((res: any) => {
      setIsLoading(false)
      if (res.data) {
        setPedigreeData(res.data)
      }
    })
  }, [farmId])

  return (
    <>
      {(pedigreeData) ? (
        <EChartsCommon
          renderer={renderer}
          option={sheePedigreeOptions(pedigreeData)}
        />
      ) :

        isLoading ? (<div style={{
          textAlign: "center",
          color: "#fff",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
        }}>
          数据加载中...
        </div>) : ''
      }
    </>
  )
}

export default SheePedigree