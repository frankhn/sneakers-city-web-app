import React, { Fragment } from 'react';
import './index.scss';

export interface InputProps {
  class?: string
  placeholder?: string
  value?: string
  changed?: any
  invalid?: boolean
  shouldValidate?: any
  touched?: boolean
  elementType: string
  elementConfig?: any
  label?: string
  disabled?: boolean
  focused?: any
  focusOut?: any
  clicked?: any
}

const input: React.SFC<InputProps> = (props: InputProps) => {
  const classes = [props.class];
  if (props.invalid && props.touched && props.shouldValidate) {
    classes.push('invalid');
  }
  let inputElement = null;
  switch (props.elementType) {
    case 'input':
      inputElement = (<input
        className={`input__element ${classes.join(' ')}`}
        {...props.elementConfig}
        placeholder={props.placeholder}
        onChange={props.changed}
        onFocus={props.focused}
        value={props.value}
        onBlur={props.focusOut}
      />);
      break;
    case 'button':
      inputElement = (<button
        className={`button__element ${props.class}`}
        onClick={props.clicked}
      >{props.value}</button>);
      break;

    case ('textarea'):
      inputElement = <textarea
        className={`input__element ${props.class}`} {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
      />;
      break;
    case ('select'):
      inputElement = (
        <select
          className={`input__element ${props.class}`}
          value={props.value}
          onChange={props.changed}>
          {props.elementConfig.options.map((option: any) => (
            <option key={option.value} value={option.value}> {
              option.displayValue
            }</option>
          ))}
        </select>);
      break;
    default:
      inputElement = <input
        className={`input__element ${props.class}`} {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
      />;
      break;
  }
  return (
    <Fragment>{inputElement}</Fragment>
  );
};

export default input;
export interface Props {

}
