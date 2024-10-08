import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { IUser, userActions } from "entities";

import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
        IUser, 
        LoginByUsernameProps, 
        ThunkConfig<string>
        >(
            'login/loginByUsername',
            async (authData, { dispatch, extra, rejectWithValue }) => {
                try {
                    const response = await extra.api.post<IUser>('/login', authData)

                    if (!response.data) {
                        throw new Error('empty data');
                    }
                    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                    dispatch(userActions.setAuthData(response.data));
                    
                    return response.data;
                } catch (e) {
                    console.error(e)

                    return rejectWithValue('Uncorrect username or password')
                }
            }
        )