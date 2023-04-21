import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const FormStyled = styled.form`
  background: #2f2f2f;
  padding: 2rem 0;
`
export const FormHeaderContainer = styled.div`
  text-align: center;
  margin: 1.5rem 0;
`

export const FormHeaderText = styled.span`
  font: italic bold 1.5rem/1.5 'Roboto', sans-serif;
  text-align: center;
  margin-top: 1rem;
`

export const FormSubHeaderText = styled.span`
  font: bold 1rem/1.5 'Roboto', sans-serif;
  text-align: center;
`

export const FormGroup = styled.div`
  position: relative;
  width: 200px;
  height: 2rem;
  margin: 0 auto;
  margin-bottom: 3rem;
`

export const FormLabel = styled.label`
  font-size: 1rem;
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
