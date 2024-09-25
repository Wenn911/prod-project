import { StateSchema } from "app/providers/StoreProvider"
import { getProfileError } from "./getProfileError"

describe('getProfileError', () => {
    test('should return error state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: '23'
            }
        }
        expect(getProfileError(state as StateSchema)).toEqual('23')
    })

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual(undefined)
    })
})
