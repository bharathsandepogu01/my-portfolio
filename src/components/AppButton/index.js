import React from 'react';
import clsx from 'clsx';
import AppText from '@components/AppText';
import classes from './styles.module.scss';

function AppButton(props) {
  const {primary, secondary, btnText, onClick} = props;

  const classNames = clsx(
    classes.button,
    primary && classes.primaryBtn,
    secondary && classes.secondaryBtn,
  );

  const btnTextClassNames = clsx(
    primary && classes.primaryBtnText,
    secondary && classes.secondaryBtnText,
  );

  return (
    <button className={classNames} onClick={() => onClick && onClick()}>
      <AppText
        variant="span"
        semiBold
        small
        customClassName={btnTextClassNames}>
        {btnText}
      </AppText>
    </button>
  );
}

export default AppButton;
