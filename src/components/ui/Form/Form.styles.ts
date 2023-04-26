import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const FormStyled = styled.form`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #2f2f2f;
  padding: ${theme.sizes.pxSize['mdlg']} 0;

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    font-size: ${theme.sizes.rem['md']};
  }
`
export const FormHeaderContainer = styled.div`
  text-align: center;
  margin: ${theme.sizes.rem['mdsm']};

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    padding: ${theme.sizes.rem['sm']};
  }
`

export const FormHeaderText = styled.span`
  font: ${theme.defaultFont};
  font-size: ${theme.sizes.rem['mdlg']};
  text-align: center;
  margin-top: ${theme.sizes.rem['sm']};

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    font-size: ${theme.sizes.rem['md']};
  }
`

export const FormSubHeaderText = styled.span`
  font: ${theme.defaultFont};
  font-size: ${theme.sizes.rem['mdsm']};
  text-align: center;

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    font-size: ${theme.sizes.rem['sm']};
  }
`

export const FormGroup = styled.div`
  position: relative;
  width: ${theme.sizes.viewWidth['50']};
  height: ${theme.sizes.rem['mdlg']};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom: ${theme.sizes.rem['lg']};

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    width: ${theme.sizes.viewWidth['80']};
  }
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

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    width: ${theme.sizes.viewWidth['70']};
  }
`

export const FormFlexGroup = styled(FormGroup)`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    width: ${theme.sizes.viewWidth['80']};
  }
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
  margin-bottom: ${theme.sizes.rem['mdlg']};

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    width: ${theme.sizes.viewWidth['70']};
  }
`
