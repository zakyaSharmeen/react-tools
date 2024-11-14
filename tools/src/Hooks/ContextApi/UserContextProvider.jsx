// context store
// provider
// usecontext hook to get the value

import React, { createContext } from 'react'
// context
export const LoginContext = createContext()

function UserContextProvider({ children }) {
    return (
        <div>
            {/* provider */}
            <LoginContext.Provider value={true}>
                {children}
            </LoginContext.Provider>
        </div>
    )
}

export default UserContextProvider