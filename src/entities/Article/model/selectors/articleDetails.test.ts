import { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "./articleDetails";

describe('articlesDetails', () => {
    test('should return profile state', () => {
        const data = { 
            id: '1', 
            title: 'asd'
        }
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data
            }
        }
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
    })

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error'
            }
        }
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
    })

    test('should return loading state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        }
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
    })
})
