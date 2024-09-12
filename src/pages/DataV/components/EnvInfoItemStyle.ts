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

import iconTemperatureRed from '../../../assets/img/icons/iconTemperatureRed.png'
import iconHumidnessRed from '../../../assets/img/icons/iconHumidnessRed.png'
import iconTankTemperatureRed from '../../../assets/img/icons/iconTankTemperatureRed.png'
import iconCO2Red from '../../../assets/img/icons/iconCO2Red.png'
import iconNH3PPMRed from '../../../assets/img/icons/iconNH3PPMRed.png'
import iconLuxRed from '../../../assets/img/icons/iconLuxRed.png'

import iconTemperatureYellow from '../../../assets/img/icons/iconTemperatureYellow.png'
import iconHumidnessYellow from '../../../assets/img/icons/iconHumidnessYellow.png'
import iconTankTemperatureYellow from '../../../assets/img/icons/iconTankTemperatureYellow.png'
import iconCO2Yellow from '../../../assets/img/icons/iconCO2Yellow.png'
import iconNH3PPMYellow from '../../../assets/img/icons/iconNH3PPMYellow.png'
import iconLuxYellow from '../../../assets/img/icons/iconLuxYellow.png'

export const EnvInfoItemStyle = styled.div`
    display: flex;
    width: 130px;
    height: 80px;
    background-image: url(${envInfoBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-top: 18px;
    padding-left: 8px;

    .infoicon {
        width: 44px;
        height: 44px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center center;
        margin: 0 auto;
        margin-top: 2px;

        &.icon-temperature {
            &.default {background-image: url(${iconTemperature});}
            &.warning {background-image: url(${iconTemperatureYellow});}
            &.error {background-image: url(${iconTemperatureRed});}
            
        }
        &.icon-humidness {
            &.default {background-image: url(${iconHumidness});}
            &.warning {background-image: url(${iconHumidnessYellow});}
            &.error {background-image: url(${iconHumidnessRed});}
            
        }
        &.icon-tank-temperature {
            &.default {background-image: url(${iconTankTemperature});}
            &.warning {background-image: url(${iconTankTemperatureYellow});}
            &.error {background-image: url(${iconTankTemperatureRed});}
            
        }
        &.icon-co2 {
            &.default {background-image: url(${iconCO2});}
            &.warning {background-image: url(${iconCO2Yellow});}
            &.error {background-image: url(${iconCO2Red});}
            
        }
        &.icon-thi {
            &.default {background-image: url(${iconTHI});}
            
        }
        &.icon-nh3-ppm {
            &.default {background-image: url(${iconNH3PPM});}
            &.warning {background-image: url(${iconNH3PPMYellow});}
            &.error {background-image: url(${iconNH3PPMRed});}
            
        }
        &.icon-lux {
            &.default {background-image: url(${iconLux});}
            &.warning {background-image: url(${iconLuxYellow});}
            &.error {background-image: url(${iconLuxRed});}
            
        }
        &.icon-water-ph {
            &.default {background-image: url(${iconWaterPH});}
            
        }
    }

    .main {
        flex: 1;
        padding-left: 6px;
        .value{
            color:#fff;
            margin-bottom: 4px;
            
            .Num {
                font-size: 26px;
                margin-right: 6px;
                &.error {
                    color: #F56E6E;
                }
                &.warning {
                    color: #F7CF24;
                }
            }
            span {
                font-size: 15px;
            }
        }
    }
`