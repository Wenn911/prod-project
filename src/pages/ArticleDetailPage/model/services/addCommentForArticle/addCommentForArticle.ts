import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment, getUserAuthData, getArticleDetailsData } from "entities";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
        Comment, 
        string, 
        ThunkConfig<string>
        >(
            'articleDetails/addCommentForArticle',
            async (text, thunkApi) => {
                const { dispatch, extra, rejectWithValue, getState } = thunkApi;
                const userData = getUserAuthData(getState());
                const article = getArticleDetailsData(getState())
                
                if (!userData || !text || !article) {
                    return rejectWithValue('no data')
                }

                try {
                    const response = await extra.api.post<Comment>('/comments', {
                        articleId: article?.id,
                        userId: userData.id,
                        text,
                    })

                    if (!response.data) {
                        throw new Error('empty data');
                    }

                    dispatch(fetchCommentsByArticleId(article.id))

                    return response.data;
                } catch (e) {
                    return rejectWithValue('Uncorrect username or password')
                }
            }
        )