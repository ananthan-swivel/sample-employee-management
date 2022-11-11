import { GenderEnum } from '../../../../src/services/enums/genderEnum';
import React from 'react'
import Input from '../../../../src/components/atoms/input/Input'
import Select from '../../../../src/components/atoms/input/select'
import { enumToSelectObject } from '../../../../src/services/utils/enum-to-select-object';
import { EmployeeInterface } from '../../../../src/services/interfaces/employeeInterface';
type Props = {
    data?: {} | EmployeeInterface;
    onChangeForm: Function;
    error?: {};
  };
export const EmployeeForm : React.FC<Props> = ({
    data,
    onChangeForm,
    error
    }) => {

    const gender = enumToSelectObject(GenderEnum);


  return (
    <>
        <div className="col-md-12">
            <Input label="First Name" placeholder="Enter first name" type='text' name="first_name" value={data?.first_name} error={error?.first_name}
                onChange={(e: any) => onChangeForm(e)} required={true} />
        </div>
        <div className="col-md-12">
            <Input label="Last Name" placeholder="Enter last name" type='text' name="last_name" value={data?.last_name} error={error?.last_name}
                onChange={(e: any) => onChangeForm(e)} required={true} />
        </div>
        <div className="col-md-12">
            <Input label="Email" placeholder="Enter email" type='email' name="email" value={data?.email} error={error?.email}
                onChange={(e: any) => onChangeForm(e)} required={true} />
        </div>
        <div className="col-md-12">
            <Input label="Phone Number" placeholder="Enter phone number" type='text' name="number" value={data?.number} error={error?.number}
                onChange={(e: any) => onChangeForm(e)} required={true} />
        </div>
        <div className="col-md-12">
            <Select label="Gender" onChange={(e) => onChangeForm(e)} name='gender' options={gender} value={data?.gender} error={error?.gender}/>
        </div>
    </>
  )
}
