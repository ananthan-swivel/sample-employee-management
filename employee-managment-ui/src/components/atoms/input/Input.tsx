import React, { useEffect, useState } from 'react'

// Input Box based on the bootstrap 

type Props = {
    value?: string | string[];
    onChange: Function;
    placeholder?: string;
    name: string;
    type: string;
    label?: string;
    min?: string;
    max?: string;
    required?: boolean;
    error?: any;
  };
  const Input: React.FC<Props> = ({
    value,
    onChange,
    placeholder,
    name,
    label,
    type,
    min,
    max,
    required,
    error
    }) => {
    const [inputValue, setInputValue] = useState(value)

    
    const onChangeEvent = (value: any) => {
        setInputValue(value.target.value)
        onChange(value)
    }

    useEffect(() => {
        setInputValue(value)
      }, [value])
    

  return (
    <div className="mx-2">
        {label && <label className="form-label ">{label}</label>}
        <div className="input-group has-validation">
        <input
            type={type ?? ""}
            className={`form-control mt-1 ${
                error && error.length>0 ? "invalid" : ""
            }`}
            value={inputValue}
            onChange={(e) => onChangeEvent(e)}
            placeholder={placeholder ?? ""}
            name={name ?? ""}
            min={min}
            max={max}
            role='input'
            aria-label={name ?? ""}
            aria-describedby="inputGroupPrepend"
            required={required ??false}
        />
        {error && (
            <div className="invalid-feedback">
            {error?.map((msg:any,index:any) => (
                <div key={index}>{msg}</div>
            ))}
            </div>
        )}
        </div>
    </div>
  )
}

Input.propTypes = {}

export default Input
