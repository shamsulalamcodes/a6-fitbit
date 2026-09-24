'use client'

import { createContext, useState } from "react";

export const CreatedContext = createContext(null)

const ContextProvider = ({ children }) => {

    const [planArr, setPlanArr] = useState([])
    const [saved, setSaved] = useState([])

    const bundled = { planArr, setPlanArr, saved, setSaved }

    return (
        <CreatedContext.Provider value={bundled}>{children}</CreatedContext.Provider>
    );
};

export default ContextProvider;