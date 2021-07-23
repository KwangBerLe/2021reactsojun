import styled from "styled-components"
import { ChampionTrendItemCss } from "./ChampionTrendHeader";

const ChampionTrendToolbar = styled.div`
    ${ChampionTrendItemCss}
        
    & > div {
        flex: 1;
        background-color: #f7f7f7;
        border: 1px solid #e9eff4;
        padding: 10px 0;
        font-size: 12px;
        font-weight: bold;
        color: rgba(0, 0, 0, .6);
        cursor: pointer;

        &:not(:first-child) {
            border-left: none;
        }

        &.select {
            color: black;
            background-color: white;
        }
    }
`

export default ChampionTrendToolbar;