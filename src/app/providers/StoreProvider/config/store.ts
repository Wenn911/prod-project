import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema';
import { counterReducer, userReducer } from 'entities';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    store.reducerManager = reducerManager

    return store
}
