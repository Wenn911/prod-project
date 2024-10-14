import { fetchArticleById } from "./fetchArticleById";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/testAsyncThunk";

const data = {
    "id": "2",
    "title": "another title",
    "views": 200
}

describe('fetchArticleById', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
       
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        
        const result = await thunk.callThunk("2")
        
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        
        const result = await thunk.callThunk("2")
        expect(result.meta.requestStatus).toBe('rejected')
    })
})