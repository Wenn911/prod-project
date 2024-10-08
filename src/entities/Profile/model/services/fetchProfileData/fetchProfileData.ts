import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { IProfile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<IProfile>('/profile');

            if (!response.data) {
                throw new Error()
            }

            return response.data;
        } catch (e) {
            console.error(e)

            return rejectWithValue('Uncorrect username or password')
        }
    }
)