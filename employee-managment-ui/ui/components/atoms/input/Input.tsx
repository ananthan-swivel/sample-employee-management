import React, { useEffect, useState } from 'react'


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
    error?: {};
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
    <>
        {label && <label className="form-label">{label}</label>}
        <div className="input-group has-validation">
        <input
            type={type ?? ""}
            className={`form-control  ${
                error ? "invalid" : ""
            }`}
            value={inputValue}
            onChange={(e) => onChangeEvent(e)}
            placeholder={placeholder ?? ""}
            name={name ?? ""}
            min={min}
            max={max}
            aria-describedby="inputGroupPrepend"
            required={required ??false}
        />
        {error && (
            <div className="invalid-feedback">
            {error?.map((msg,index) => (
                <div key={index}>{msg}</div>
            ))}
            </div>
        )}
        </div>
    </>
  )
}

Input.propTypes = {}

export default Input
