import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import ArticleDetailPage from './ArticleDetailPage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article, ArticleBlockType, ArticleType } from 'entities';

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
    title: 'pages/ArticleDetailPage',
    component: ArticleDetailPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof ArticleDetailPage>

const Template: ComponentStory<typeof ArticleDetailPage> = (args) => <ArticleDetailPage {...args} />

export const Normal = Template.bind({});
Normal.args = {}
Normal.decorators = [StoreDecorator({
    articleDetails: {
        data: article
    }
})]
