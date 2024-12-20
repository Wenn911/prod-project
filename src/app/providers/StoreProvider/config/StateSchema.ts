import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema, CounterSchema, UserSchema } from "entities";
import { ProfileSchema } from "entities";
import { AddNewCommentSchema } from "features/addNewComment";
import { LoginSchema } from "features/AuthByUsername";
import { ArticleDetailCommentsSchema } from "pages/ArticleDetailPage";
import { To, NavigateOptions } from "react-router-dom";
import { AppDispatch } from "..";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;


    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsComments?: ArticleDetailCommentsSchema;
    addNewComment?: AddNewCommentSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    dispatch: AppDispatch;
    state: StateSchema;
}
