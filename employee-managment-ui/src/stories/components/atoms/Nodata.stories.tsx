import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Nodata from '../../../components/atoms/no-data/noData';


export default {
  title: 'Components/Atoms/Nodata',
  component: Nodata,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Nodata>;


export const NodataShow: ComponentStory<typeof Nodata> = () => <Nodata />;

