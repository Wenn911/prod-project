import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getLoginError, getLoginLoading, getLoginPassword, getLoginState, getLoginUsername } from "./getLoginState"

describe('getLoginState', () => {
    test('should return loginForm state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: '123', password: '123' }
        }
        expect(getLoginState(state as StateSchema)).toEqual({ username: '123', password: '123' })
    })
})

describe('getLoginUsername', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: '123', password: '123' }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('123')
    })
    test('should return empty string', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: '123' }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})

describe('getLoginPassword', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: '123', password: '234' }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('234')
    })
    test('should return empty string', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: '123' }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })
})

describe('getLoginError', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: '123', password: '234', error: 'error' }
        }
        expect(getLoginError(state as StateSchema)).toEqual('error')
    })

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: '123', password: '234' }
        }
        expect(getLoginError(state as StateSchema)).toEqual(undefined)
    })
})

describe('getLoginLoading', () => {
    test('should return boolean', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: '123', password: '234', isLoading: true }
        }
        expect(getLoginLoading(state as StateSchema)).toEqual(true)
    })
    test('should return false', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: '123', password: '234' }
        }
        expect(getLoginLoading(state as StateSchema)).toEqual(false)
    })
})



