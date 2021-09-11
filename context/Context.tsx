import React, {createContext, useState} from 'react'

const defaultStoreValue = {
  user: {
    name: 'Leonard',
    id: '1',
  },
  setUser: ({name, id}: {name: string, id: string})=>{}
}

type User = {
  user: {
    name: string,
    id: string,
  },
  setUser: ({name, id}: {name: string, id: string})=> void
}

const SampleContext = createContext<User>(defaultStoreValue)


export const ContextProvider = (props: any) : JSX.Element=>{

  const [user, setUser] = useState({name: 'Leonard', id: '1'})
  
  
  return(
    <SampleContext.Provider value={{
      user,
      setUser,
    }}>
      {props.children}
    </SampleContext.Provider>
  )

}

export default SampleContext