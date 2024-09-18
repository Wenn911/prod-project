import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({});
Primary.args = {
    label: 'text',
    options: [
        {
            value: '123',
            content: '1 пункт'
        },
        {
            value: '123',
            content: '2 пункт'
        },
        {
            value: '123',
            content: '3 пункт'
        }
    ]
}