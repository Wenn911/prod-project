import { StateSchema } from "app/providers/StoreProvider"
import { Country } from "../../../../Country/model/types/country"
import { Currency } from "../../../../Currency/model/types/currency"
import { getProfileForm } from "./getProfileForm"

describe('getProfileForm', () => {
    test('should return form state', () => {
        const form = { 
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
                form
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(form)
    })

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
