import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { IProfile } from "../../types/profile";

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        const formData = getProfileForm(getState())

        try {
            const response = await extra.api.put<IProfile>('/profile', formData);

            return response.data;
        } catch (e) {
            console.error(e)

            return rejectWithValue('Uncorrect username or password')
        }
    }
)