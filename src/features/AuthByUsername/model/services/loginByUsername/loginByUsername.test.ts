import { loginByUsername } from "./loginByUsername";
import { StateSchema } from "app/providers/StoreProvider";
import { userActions } from "entities";
import { Dispatch } from "@reduxjs/toolkit";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/testAsyncThunk";



describe('loginByUsername', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    })

    test('success login', async () => {
        const userValue = { username: 'admin', id: '1' };
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        
        const result = await thunk.callThunk({ username: 'admin', password: '123' })

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        
        const result = await thunk.callThunk({ username: 'admin', password: '123' })
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected')
    })
})