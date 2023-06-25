// styles/globalStyles.js
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

   
    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};        
    }
    h1, h2,h3,h4, span {
        color: ${(props) => props.theme.titles};        
    }

    .header, .alter-header{
        background-color: ${(props) => props.theme.corHeader};
    }
    .nav__link, .nav__logo{
        color: ${(props) => props.theme.linkHeader};
    }
    .button{
        background-color: ${(props) => props.theme.button};
        color: ${(props) => props.theme.textsecond};
    }
    .button:hover, .button:hover>.alter_icone{
        background-color: ${(props) => props.theme.textsecond};
        color: ${(props) => props.theme.button};
    }
    i, .cor{
        color: ${(props) => props.theme.icone};
    }
    .alter{ 
        background-color: ${(props) => props.theme.alterBackground};
        color: ${(props) => props.theme.alterText};
    }
    .alter_icone{
        fill: ${(props) => props.theme.alterBackground};
    }
    .button:hover, .button:hover>.alter_icone{
        fill: ${(props) => props.theme.linkHeader};  
    }
    
    .alter_icone_scroll{
        stroke: ${(props) => props.theme.alterText};
    }
    .frontend__modal-content{
        background-color: ${(props) => props.theme.alterBackground};
        color: ${(props) => props.theme.alterText};
    }
    .alter-form{ 
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.alterText};
    }

    

    
`; 
