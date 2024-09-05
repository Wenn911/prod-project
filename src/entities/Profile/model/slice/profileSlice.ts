import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProfileSchema, IProfile } from '../types/profile'

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
