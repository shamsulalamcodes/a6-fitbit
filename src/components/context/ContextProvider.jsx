'use client'

import { createContext, useState } from "react";

export const CreatedContext = createContext({})

const ContextProvider = ({ children }) => {

    const [planArr, setPlanArr] = useState([])
    const [savedArr, setSaved] = useState([])

    return (
        <CreatedContext.Provider value={{ planArr, setPlanArr, savedArr, setSaved }}>{children}</CreatedContext.Provider>
    );
};

export default ContextProvider;