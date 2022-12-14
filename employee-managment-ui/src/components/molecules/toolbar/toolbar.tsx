import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../../../src/components/atoms/input/Input'
import Link from "next/link";
import { Button } from 'react-bootstrap';
import { BsGrid3X3GapFill, BsPersonPlusFill } from 'react-icons/bs';
import { FiList } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi';

// Tool bar for page internigation one to another page.
type Props = {
  onSearch?: Function;
  title: string;
  forwardLink: string;
  viewStyle?: boolean;
  isList?: boolean;
  viewStyleChange?: Function;
};


const Toolbar: React.FC<Props> = ({
    onSearch,
    title,
    forwardLink,
    viewStyle,
    isList,
    viewStyleChange
    }) => {
  return (
    <div className="py-3 mx-n4 d-flex justify-content-end">
        {onSearch && 
            <div className="px-2">
                  <Input placeholder={`Search ${title}`} type="text" name="search" onChange={(value :any) => onSearch(value.target.value)}/>
            </div>
        }
          <div className="px-2">
            <Link href={`${forwardLink}`} >
              <Button className="change-view-employee" data-testid="forward-link-test-id">
                {isList ? <>{<BsPersonPlusFill />} Add</> : <>{<BiArrowBack/>} View</>} {title}
              </Button>
            </Link>
          </div>
          {
            viewStyleChange &&
            <>
              <div className="">
                <Button variant="primary" onClick={() => viewStyleChange()}>
                  {viewStyle ? <FiList /> : <BsGrid3X3GapFill />}
                </Button>
              </div>
            </>
          }
        </div>
  )
}


export default Toolbar
