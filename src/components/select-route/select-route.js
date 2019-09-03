import React from 'react';
import Select from 'react-select';

import './select-route.css';
const customStyles = {
  menu: (base) => {
    return { ...base, marginTop: 2 };
  },
  control: (base, state) => {
    return {
      ...base,
      borderWidth: 2,
      borderColor: 'white',
      '&:hover': {
        borderColor: 'white',
      },
      boxShadow: state.isFocused ? null : null,
    };
  },
};
export const SelectRoute = (props) => {
  const optionVal = (arr) =>
    arr.map((lab, val) => ({ value: val, label: lab }));
  return (
    <Select
      styles={customStyles}
      options={optionVal(props.options)}
      // autoFocus={true}
      placeholder={props.placeholder}
      label={props.label}
      isDisabled={props.isDisabled}
      isLoading={props.isLoading}
      // isClearable
      noOptionsMessage={() => props.emptyMessage}
      onChange={props.handleChange}
    />
  );
};
