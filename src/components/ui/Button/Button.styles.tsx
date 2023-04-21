import styled from "styled-components";

import { theme } from "../../../styles/theme";

export const StyledButton = styled.button`
   border-top: 1px solid #0aa866;
   background: #74d665;
   background: -webkit-gradient(linear, left top, left bottom, from(${theme.buttonDark}), to(#74d665));
   background: -webkit-linear-gradient(top, ${theme.buttonDark}, #74d665);
   background: -moz-linear-gradient(top, ${theme.buttonDark}, #74d665);
   background: -ms-linear-gradient(top, ${theme.buttonDark}, #74d665);
   background: -o-linear-gradient(top, ${theme.buttonDark}, #74d665);
   padding: 11.5px 23px;
   -webkit-border-radius: 8px;
   -moz-border-radius: 8px;
   border-radius: 8px;
   -webkit-box-shadow: rgba(0,0,0,1) 0 1px 0;
   -moz-box-shadow: rgba(0,0,0,1) 0 1px 0;
   box-shadow: rgba(0,0,0,1) 0 1px 0;
   text-shadow: rgba(0,0,0,.4) 0 1px 0;
   text-decoration: none;
   color: ${theme.buttonLight};
   font: ${theme.defaultFont}
`