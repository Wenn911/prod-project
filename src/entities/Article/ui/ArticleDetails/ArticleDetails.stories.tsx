import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entities';
import { ArticleBlockType, ArticleType } from '../../model/types/article';

const article: Article = {
    "id": "1",
    "title": "Javascript news",
    "subtitle": "Что нового в js",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
    "views": 1022,
    "createdAt": "30.09.2024",
    "type": [ArticleType.IT],
    "blocks": [
        {
            "id": "1",
            "type": ArticleBlockType.TEXT,
            "title": "a title",
            "paragraphs": [
                "paragraph 1",
                "paragraph 2",
                "paragraph 3"
            ]
        },
        {
            "id": "2",
            "type": ArticleBlockType.CODE,
            "code": "echo 123"
        },
        {
            "id": "3",
            "type": ArticleBlockType.IMAGE,
            "title": "a image title",
            "src": "https://images.squarespace-cdn.com/content/v1/5e10bdc20efb8f0d169f85f9/09943d85-b8c7-4d64-af31-1a27d1b76698/arrow.png"
        },
        {
            "id": "4",
            "type": ArticleBlockType.CODE,
            "code": "echo 123"
        },
        {
            "id": "5",
            "type": ArticleBlockType.TEXT,
            "title": "a title",
            "paragraphs": [
                "paragraph 1",
                "paragraph 2",
                "paragraph 3"
            ]
        },
        {
            "id": "6",
            "type": ArticleBlockType.IMAGE,
            "title": "a image title",
            "src": "https://images.squarespace-cdn.com/content/v1/5e10bdc20efb8f0d169f85f9/09943d85-b8c7-4d64-af31-1a27d1b76698/arrow.png"
        }
    ]
}

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof ArticleDetails>

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />

export const Loading = Template.bind({});
Loading.args = {}
Loading.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: true
    }
})]

export const Error = Template.bind({});
Error.args = {}
Error.decorators = [StoreDecorator({
    articleDetails: {
        error: "error"
    }
})]

export const Normal = Template.bind({});
Normal.args = {}
Normal.decorators = [StoreDecorator({
    articleDetails: {
        data: article
    }
})]
