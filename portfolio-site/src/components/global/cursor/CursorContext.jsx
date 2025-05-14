import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export const useCursor = () => useContext(CursorContext);

export const CursorProvider = ({ children }) => {
    const [useCustomCursor, setUseCustomCursor] = useState(false);

    return (
        <CursorContext.Provider value={{ useCustomCursor, setUseCustomCursor }}>
            {children}
        </CursorContext.Provider>
    );
};