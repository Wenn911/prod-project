import { Country, Currency } from "entities";

export interface IProfile {
    firstName?: string;
    lastName?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: IProfile;
    form?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean
}