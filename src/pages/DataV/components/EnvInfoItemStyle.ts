import styled from "styled-components";
import envInfoBg from '../../../assets/img/envInfoBg.png'
import iconTemperature from '../../../assets/img/icons/iconTemperature.png'
import iconHumidness from '../../../assets/img/icons/iconHumidness.png'
import iconTankTemperature from '../../../assets/img/icons/iconTankTemperature.png'
import iconCO2 from '../../../assets/img/icons/iconCO2.png'
import iconTHI from '../../../assets/img/icons/iconTHI.png'
import iconNH3PPM from '../../../assets/img/icons/iconNH3PPM.png'
import iconLux from '../../../assets/img/icons/iconLux.png'
import iconWaterPH from '../../../assets/img/icons/iconWaterPH.png'

export const EnvInfoItemStyle = styled.div`
    display: flex;
    width: 130px;
    height: 80px;
    background-image: url(${envInfoBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-top: 20px;
    padding-left: 8px;

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

    .main {
        flex: 1;
        padding-left: 6px;
        .value{
            color:#fff;
            font-size: 26px;
            span {
                font-size: 15px;
            }
        }
    }
`