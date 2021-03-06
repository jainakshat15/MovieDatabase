import React from 'react';
import { Link } from 'react-router-dom';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content,TMDBLogoImg } from './Header.styles';

const Header=()=>(
    <Wrapper>
        <Content>
            <Link to='/'>
               <h3>MOVIE DATABASE</h3> 
            </Link>
            
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'/>
        </Content>
    </Wrapper>
);
export default Header;
