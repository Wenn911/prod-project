import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { IProfile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
    IProfile, 
    string, 
    ThunkConfig<string>
    >(
        'profile/fetchProfileData',
        async (profileId, { extra, rejectWithValue }) => {
            try {
                const response = await extra.api.get<IProfile>(`/profile/${profileId}`);

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