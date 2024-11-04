import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'Hello world',
            user: {
                id: '1',
                username: 'asd'
            },
        },
        {
            id: '2',
            text: 'Hello world2',
            user: {
                id: '2',
                username: 'asd'
            },
        }
    ]
};

export const Loading = Template.bind({});

Loading.args = {
    isLoading: true
};