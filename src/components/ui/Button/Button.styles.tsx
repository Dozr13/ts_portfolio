import styled from "styled-components";

export const StyledButton = styled.button`
   border-top: 1px solid #0aa866;
   background: #74d665;
   background: -webkit-gradient(linear, left top, left bottom, from(#000000), to(#74d665));
   background: -webkit-linear-gradient(top, #000000, #74d665);
   background: -moz-linear-gradient(top, #000000, #74d665);
   background: -ms-linear-gradient(top, #000000, #74d665);
   background: -o-linear-gradient(top, #000000, #74d665);
   padding: 11.5px 23px;
   -webkit-border-radius: 8px;
   -moz-border-radius: 8px;
   border-radius: 8px;
   -webkit-box-shadow: rgba(0,0,0,1) 0 1px 0;
   -moz-box-shadow: rgba(0,0,0,1) 0 1px 0;
   box-shadow: rgba(0,0,0,1) 0 1px 0;
   text-shadow: rgba(0,0,0,.4) 0 1px 0;
   color: #e7d2d2;
   text-decoration: none;
   font: bold 1rem/1.5 "Roboto", sans-serif;

&:hover {
   border-top-color: #71b567;
   background: #71b567;
   color: #120512;
   }

&:active {
   border-top-color: #1b5c2c;
   background: #1b5c2c;
   }
`