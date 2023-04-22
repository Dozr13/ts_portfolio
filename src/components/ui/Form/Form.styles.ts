import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const FormStyled = styled.form`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #2f2f2f;
  padding: ${theme.sizes.pxSize['mdlg']} 0;
`
export const FormHeaderContainer = styled.div`
  text-align: center;
  margin: ${theme.sizes.rem['mdsm']};
`

export const FormHeaderText = styled.span`
  font: ${theme.defaultFont};
  font-size: ${theme.sizes.rem['md']};
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
  width: ${theme.sizes.percentage['100']};
  height: ${theme.sizes.percentage['100']};
  font: ${theme.defaultFont};
  font-weight: 500;
  font-size: ${theme.sizes.rem['sm']};
  padding: 0;
`

export const FormInput = styled.input`
  width: ${theme.sizes.percentage['100']};
  height: auto;
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 3px;
  font: ${theme.defaultFont};
  font-size: ${theme.sizes.rem['ssm']};
  font-weight: 500;
`

export const FormFlexGroup = styled(FormGroup)`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormTextArea = styled.textarea`
  background: #ffffff;
  border-radius: ${theme.sizes.pxSize['sm']};
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: ${theme.sizes.pxSize['xxl']};
  line-height: 1.5;
  resize: none;
  transition: border-color 150ms ease;
  width: ${theme.sizes.percentage['100']};
`
