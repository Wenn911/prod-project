import { ProfileSchema, ValidateProfileError } from "../types/profile"
import { profileActions, profileReducer } from "./profileSlice";
import { Country } from "../../../Country/model/types/country";
import { Currency } from "../../../Currency/model/types/currency";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const data = { 
    username: '123', 
    firstName: 'asd',
    lastName: 'asd',
    city: 'asdsad',
    country: Country.Kazakhstan,
    currency: Currency.RUB,
    age: 21
}

describe('profileSlice', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema, 
            profileActions.setReadonly(true)
        )).toEqual({ readonly: true })
    })
    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { 
            username: ''
        } };
        expect(profileReducer(
            state as ProfileSchema, 
            profileActions.cancelEdit()
        )).toEqual({ 
            readonly: true,
            validateErrors: undefined,
            data,
            form: data
        })
    })
    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { 
            username: '123'
        }};
        expect(profileReducer(
            state as ProfileSchema, 
            profileActions.updateProfile({
                username: '123456'
            })
        )).toEqual({ 
            form: { username: '123456' }
        })
    })

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = { 
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR]
        };
        expect(profileReducer(
            state as ProfileSchema, 
            updateProfileData.pending
        )).toEqual({ 
            isLoading: true,
            validateError: undefined
        })
    })

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { 
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileSchema, 
            updateProfileData.fulfilled(data, '')
        )).toEqual({ 
            isLoading: false,
            validateError: undefined,
            readonly: true,
            form: data,
            data
        })
    })
})