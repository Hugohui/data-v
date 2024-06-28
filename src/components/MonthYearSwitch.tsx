import { FC, useState } from "react"
import { MonthYearSwitchStyle, SwitchItem } from "./MonthYearSwitchStyle"

interface ParamsI {
    active: string
    onChange: Function
}

const MonthYearSwitch: FC<ParamsI> = (props) => {
    const [active, setActive] = useState(props.active)

    const switchActive = (value: string) => {
        setActive(value)
        props.onChange(value)
    }

    return (
        <MonthYearSwitchStyle>
            <SwitchItem isActive={active === 'month'}>
                <div onClick={() => switchActive('month')}>月</div>
            </SwitchItem>
            <SwitchItem isActive={active === 'year'}>
                <div onClick={() => switchActive('year')}>年</div>
            </SwitchItem>
        </MonthYearSwitchStyle>
    )
}

export default MonthYearSwitch