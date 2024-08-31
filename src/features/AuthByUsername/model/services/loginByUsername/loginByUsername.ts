import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { IUser, userActions } from "entities";

import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData)

            if (!response.data) {
                throw new Error('empty data')
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkApi.dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (e) {
            console.error(e)

            return thunkApi.rejectWithValue('Uncorrect username or password')
        }
    }
)