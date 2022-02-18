import React from "react";

//Helpers
import { calcTime, convertMoney } from '../../helpers';
//styles
import { Wrapper, Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue, releaseDate }) => (

    <Wrapper>
        <Content>
        <div className="column">
                <p>Release Date: {releaseDate === "" ? 'NA': releaseDate}</p>
            </div>
            <div className="column">
                <p>Running Time: {time === null ? 'NA' :calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget: {budget === 0 ? 'NA' :convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {revenue === 0 ? 'NA' :convertMoney(revenue)}</p>
            </div>
            
        </Content>
    </Wrapper>
)
export default MovieInfoBar;
