import styled from "styled-components";
import dataVDetialInfoItemBg from '../../../assets/img/dataVDetialInfoItemBg.png'
import iconTemperature from '../../../assets/img/icons/iconTemperature.png'
import iconHumidness from '../../../assets/img/icons/iconHumidness.png'
import iconTankTemperature from '../../../assets/img/icons/iconTankTemperature.png'
import iconCO2 from '../../../assets/img/icons/iconCO2.png'
import iconTHI from '../../../assets/img/icons/iconTHI.png'
import iconNH3PPM from '../../../assets/img/icons/iconNH3PPM.png'
import iconLux from '../../../assets/img/icons/iconLux.png'
import iconWaterPH from '../../../assets/img/icons/iconWaterPH.png'

export const InfoItemStyle = styled.div`
    width: 106px;
    height: 138px;
    background-image: url(${dataVDetialInfoItemBg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-family: PingFang SC;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
    padding-top: 15px;
    .value {
        font-size: 30px;
    }
    .label {
        margin: 11px 0 15px;
    }
    .infoicon {
        width: 44px;
        height: 44px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center center;
        margin: 0 auto;

        &.icon-temperature {
            background-image: url(${iconTemperature});
        }
        &.icon-humidness {
            background-image: url(${iconHumidness});
        }
        &.icon-tank-temperature {
            background-image: url(${iconTankTemperature});
        }
        &.icon-co2 {
            background-image: url(${iconCO2});
        }
        &.icon-thi {
            background-image: url(${iconTHI});
        }
        &.icon-nh3-ppm {
            background-image: url(${iconNH3PPM});
        }
        &.icon-lux {
            background-image: url(${iconLux});
        }
        &.icon-water-ph {
            background-image: url(${iconWaterPH});
        }
    }
`