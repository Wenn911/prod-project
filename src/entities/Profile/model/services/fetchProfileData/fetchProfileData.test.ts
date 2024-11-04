import { fetchProfileData } from "./fetchProfileData";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/testAsyncThunk";
import { Country } from "../../../../Country/model/types/country";
import { Currency } from "../../../../Currency/model/types/currency";

const data = { 
    username: '123', 
    firstName: 'asd',
    lastName: 'asd',
    city: 'asdsad',
    country: Country.Kazakhstan,
    currency: Currency.RUB,
    age: 21
}

describe('fetchProfileData', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
       
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        
        const result = await thunk.callThunk('1')
        
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        
        const result = await thunk.callThunk('1')
        expect(result.meta.requestStatus).toBe('rejected')
    })
})