import React from 'react';

import { PageTitleText } from './PageTitle.styles';
import { PageTitleProps } from '../../../types/types';

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <PageTitleText>{title}</PageTitleText>
  );
};

export default PageTitle;