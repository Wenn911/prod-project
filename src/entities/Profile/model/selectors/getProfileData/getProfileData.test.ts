import { StateSchema } from "app/providers/StoreProvider"
import { Country } from "../../../../Country/model/types/country"
import { Currency } from "../../../../Currency/model/types/currency"
import { getProfileData } from "./getProfileData"

describe('getProfileData', () => {
    test('should return profile state', () => {
        const data = { 
            username: '123', 
            firstName: 'asd',
            lastName: 'asd',
            city: 'asdsad',
            country: Country.Kazakhstan,
            currency: Currency.RUB,
            age: 21
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
