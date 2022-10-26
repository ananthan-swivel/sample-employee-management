import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { constants } from 'buffer';
type Props = {
    value?: string | string[];
    onChange: Function;
    placeholder?: string;
    name: string;
    label?: string;
    options?: any;
    required?: boolean;
    error?: {};
  };
const Select: React.FC<Props> = ({
    value,
    onChange,
    placeholder,
    name,
    label,
    options,
    required,
    error
    }) => {
    const [inputValue, setInputValue] = useState(value)

    
    const onChangeEvent = (value: any) => {
        setInputValue(value.target.value)
        onChange(value)
    }
  return (
    <>
        {label && <label className="form-label">{label}</label>} 
        <select
            className="form-select"
            onChange={(e) => onChangeEvent(e)}
            name={name}
            required
            >
            {options.map((option) => {
                return (
                <option key={option.value} value={option.value}>
                    {option.lable}
                </option>
                );
            })}
        </select>
        {error && (
            <div className="invalid-feedback">
                {error?.map((msg) => (
                <div>{msg}</div>
                ))}
            </div>
        )}
    </>
  )
}


export default Select
