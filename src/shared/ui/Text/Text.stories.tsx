import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const DefaultText = Template.bind({});
DefaultText.args = {
    title: 'title',
    text: 'text'
}

export const DefaultTextDark = Template.bind({});
DefaultTextDark.args = {
    title: 'title',
    text: 'text'
}
DefaultTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
    text: 'text'
}

export const WithoutText = Template.bind({});
WithoutText.args = {
    title: 'title'
}

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'text',
    theme: TextTheme.ERROR
}