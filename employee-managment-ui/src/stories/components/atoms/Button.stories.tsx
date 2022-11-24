import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'react-bootstrap';
import { Circles } from 'react-loader-spinner';
import { BsPersonPlusFill } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const OneItem = (args:any) => (
  <Button {...args}>
    Submit
  </Button>
);

export const LoadingButton = () => (
  <Button disabled={true} className="d-flex">
    <Circles
        height="20"
        width="20"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperClass="py-1 mx-2"
        visible={true}
      />
      {" "}
      Submit
  </Button>
);
