import { StateSchema } from "app/providers/StoreProvider"
import { ValidateProfileError } from "../../types/profile"
import { getProfileValidateErrors } from "./getProfileValidateErrors"

describe('getProfileValidateErrors', () => {
    test('should return validate errors state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.INCORRECT_AGE,
                    ValidateProfileError.NO_DATA
                ]
            }
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.NO_DATA
        ])
    })

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})
