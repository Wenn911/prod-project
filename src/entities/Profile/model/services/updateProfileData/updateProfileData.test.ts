import { updateProfileData } from "./updateProfileData";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/testAsyncThunk";
import { Country } from "../../../../Country/model/types/country";
import { Currency } from "../../../../Currency/model/types/currency";
import { ValidateProfileError } from "../../types/profile";

const data = { 
    username: '123', 
    firstName: 'asd',
    lastName: 'asd',
    city: 'asdsad',
    country: Country.Kazakhstan,
    currency: Currency.RUB,
    age: 21
}

describe('updateProfileData', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });
       
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        
        const result = await thunk.callThunk()
        
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        
        const result = await thunk.callThunk()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR
        ])
    })

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastName: '' }
            }
        });
        
        const result = await thunk.callThunk()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ])
    })
})