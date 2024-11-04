import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { profileReducer, articleDetailsReducer } from "entities";
import { addNewCommentReducer } from "features/addNewComment/model/slices/addNewCommentSlice";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { articleDetailCommentsReducer } from "pages/ArticleDetailPage/model/slices/articleDetailCommentsSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsComments: articleDetailCommentsReducer,
    addNewComment: addNewCommentReducer,
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>, 
    asyncReducers?: ReducersList
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent />
    </StoreProvider>
)