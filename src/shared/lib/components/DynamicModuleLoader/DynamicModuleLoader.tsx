import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { FC, useEffect } from "react";
import { useStore } from "react-redux";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

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
        Object.entries(reducers).forEach(([reducerKey, reducer]) => {
            store.reducerManager.add(reducerKey as StateSchemaKey, reducer);
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerKey]) => {
                    store.reducerManager.remove(reducerKey as StateSchemaKey);
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

