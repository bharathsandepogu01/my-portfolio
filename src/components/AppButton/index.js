import React from 'react';
import clsx from 'clsx';
import AppText from '@components/AppText';
import classes from './styles.module.scss';

function AppButton(props) {
  const {
    primary,
    secondary,
    btnText,
    onClick,
    children,
    customClassName,
    ariaLabel,
  } = props;

  const classNames = clsx(
    classes.button,
    primary && classes.primaryBtn,
    secondary && classes.secondaryBtn,
    customClassName && customClassName,
  );

  const btnTextClassNames = clsx(
    primary && classes.primaryBtnText,
    secondary && classes.secondaryBtnText,
  );

  return (
    <button
      className={classNames}
      onClick={() => onClick && onClick()}
      aria-label={ariaLabel}>
      <AppText
        variant="span"
        semiBold
        small
        customClassName={btnTextClassNames}>
        {btnText && btnText}
        {children}
      </AppText>
    </button>
  );
}

export default AppButton;
