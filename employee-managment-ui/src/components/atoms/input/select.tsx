import React, { useState ,Fragment } from 'react'

// Select Box based on the bootstrap 


type Props = {
    value?: string | string[];
    onChange: Function;
    placeholder?: string;
    name: string;
    label?: string;
    options?: any;
    required?: boolean;
    error?: any;
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
    <div className="px-3">
        {label && <label className="form-label ">{label}</label>} 
        <select
            className="form-select"
            onChange={(e) => onChangeEvent(e)}
            name={name}
            role='select'
            value={value}
            aria-label={name ?? ""}
            required
            >
            {options.map((option:any) => {
                return (
                <option key={option.value} value={option.value}>
                    {option.lable}
                </option>
                );
            })}
        </select>
        {error && (
            <div className="invalid-feedback">
                {error?.map((msg:any,index:any) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
        )}
    </div>
  )
}


export default Select
