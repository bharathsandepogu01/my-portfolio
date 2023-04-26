import React from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';

function AppText(props) {
  const classNames = clsx(
    classes.commonTextStyles,
    props.tiny && classes.tiny,
    props.small && classes.small,
    props.medium && classes.medium,
    props.large && classes.large,
    props.extraLarge && classes.extraLarge,
    props.secondaryText && classes.secondaryText,
    props.primaryColor && classes.primaryColor,
    props.bold && classes.bold,
    props.light && classes.light,
    props.customClassName,
  );

  const Text = props.variant;

  return (
    <Text className={classNames} style={props.style}>
      {props.children}
    </Text>
  );
}

export default AppText;
