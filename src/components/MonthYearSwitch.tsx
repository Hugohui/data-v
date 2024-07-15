import { FC, useState } from "react"
import { MonthYearSwitchStyle, SwitchItem } from "./MonthYearSwitchStyle"

interface ParamsI {
    active: string
    onChange: Function
}

const MonthYearSwitch: FC<ParamsI> = (props) => {
    const [active, setActive] = useState<any>(props.active)

    const switchActive = (value: string) => {
        setActive(value)
        props.onChange(value)
    }

    return (
        <MonthYearSwitchStyle className="monthYearSwitch">
            <SwitchItem isactive={active === 'month' ? active : undefined}>
                <div onClick={() => switchActive('month')}>月</div>
            </SwitchItem>
            <SwitchItem isactive={active === 'year' ? active : undefined}>
                <div onClick={() => switchActive('year')}>年</div>
            </SwitchItem>
        </MonthYearSwitchStyle>
    )
}

export default MonthYearSwitch