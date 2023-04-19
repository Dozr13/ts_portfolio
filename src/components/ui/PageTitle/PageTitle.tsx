import React from 'react'
import { PageTitleText } from './PageTitle.styles'

interface Props {
  title: string;
}

const PageTitle = ({ title }: Props) => {
  return (
    <PageTitleText>{title}</PageTitleText>
  )
}

export default PageTitle