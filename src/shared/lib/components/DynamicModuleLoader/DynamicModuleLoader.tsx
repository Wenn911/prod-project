import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { FC, ReactNode, useEffect } from "react";
import { useStore } from "react-redux";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface Props {
    reducers: ReducersList;
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<Props> = (props) => {
    const { 
        children, 
        reducers, 
        removeAfterUnmount 
    } = props;

    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerKey, reducer]: ReducersListEntry) => {
            store.reducerManager.add(reducerKey, reducer);
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerKey]: ReducersListEntry) => {
                    store.reducerManager.remove(reducerKey);
                })
            }
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
};

