import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({});
Light.args = {}
Light.decorators = [StoreDecorator({
    
})]

export const Dark = Template.bind({});
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
Dark.decorators = [StoreDecorator({
    
})]

export const UserAuth = Template.bind({});
UserAuth.args = {}
UserAuth.decorators = [ThemeDecorator(Theme.DARK)]
UserAuth.decorators = [StoreDecorator({
    user: { authData: {}}
})]