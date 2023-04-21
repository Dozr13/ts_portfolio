import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const FormStyled = styled.form`
  background: #2f2f2f;
  padding: ${theme.sizes.pxSize['mdlg']} 0;
`
export const FormHeaderContainer = styled.div`
  text-align: center;
  margin: ${theme.sizes.rem['mdsm']};
`

export const FormHeaderText = styled.span`
  font: ${theme.defaultFont};
  text-align: center;
  margin-top: ${theme.sizes.rem['sm']};
`

export const FormSubHeaderText = styled.span`
  font: ${theme.defaultFont};
  text-align: center;
`

export const FormGroup = styled.div`
  position: relative;
  width: 200px;
  height: ${theme.sizes.rem['mdlg']};
  margin: 0 auto;
  margin-bottom: ${theme.sizes.rem['lg']};
`

export const FormLabel = styled.label`
  font-size: ${theme.sizes.rem['sm']};
  padding: 0;
  width: ${theme.sizes.percentage['100']};
  height: ${theme.sizes.percentage['100']};
  width: ${theme.sizes.percentage['100']};
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
`

export const FormInput = styled.input`
  width: ${theme.sizes.percentage['100']};
  height: ${theme.sizes.percentage['100']};
  width: ${theme.sizes.percentage['100']};
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 3px;
  font-size: ${theme.sizes.pxSize['lg']};
`

export const FormButtonContainer = styled.div`
  text-align: center;
`
