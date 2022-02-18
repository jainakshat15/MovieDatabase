import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
//styles
import { Wrapper, Content } from "./Footer.styles";

const Footer=()=>(
    <Wrapper>
        <Content>
            <span>This Website is built using MERN stack with ❤ by <a href="https://akshat-jain.netlify.app/">Akshat Jain</a></span>
            <div className="icons">
                <a href="https://www.linkedin.com/in/15-jain-akshat/"><LinkedInIcon/></a>
                <a href="https://github.com/jainakshat15"><GitHubIcon/></a>
                <a href="https://www.instagram.com/jainakshat._15/"><InstagramIcon/></a>
            </div>
        </Content>
    </Wrapper>
);
export default Footer;
