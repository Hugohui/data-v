import { FC, useEffect, useState } from 'react'
import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { sheePedigreeOptions } from "./SheePedigreeOptions"
import { getSheePedigree } from '@/api/IndexPage'

const SheePedigree: FC<{ farmId: any, rangeOption?: any }> = ({ farmId, rangeOption = {} }) => {
  const renderer = useConfigStore((state) => state.renderer);
  const [pedigreeData, setPedigreeData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getSheePedigree({
      farmId,
      type: "more"
    }).then((res: any) => {
      setIsLoading(false)
      if (res.data) {
        setPedigreeData(res.data)
      }
    })
  }, [farmId])

  return (
    <div style={{
      height: 'calc(100% - 30px)'
    }}>
      {(pedigreeData && !isLoading) ? (
        <EChartsCommon
          renderer={renderer}
          option={sheePedigreeOptions(pedigreeData, rangeOption)}
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
    </div>
  )
}

export default SheePedigree