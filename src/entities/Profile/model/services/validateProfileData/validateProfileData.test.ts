import { validateProfileData } from "./validateProfileData";
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

describe('validateProfileData', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([])
    })

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, firstName: '', lastName: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })

    test('without age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    })

    test('without country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
    })

    test('without all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY
        ])
    })
})