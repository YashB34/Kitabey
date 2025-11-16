import React from "react";
import { useContext , useState , createContext} from "react";


export const AuthContext = createContext(null);
export  function AuthProvider({children}){
 const initialAuthUser = localStorage.getItem("Users");

 const[authUser , setAuthUser] = useState(
    initialAuthUser? JSON.parse(initialAuthUser) : undefined
 );
 return(
<AuthContext.Provider value={[authUser, setAuthUser]}>
    {children}
</AuthContext.Provider>
 )
}
export const useAuth = () =>useContext(AuthContext);
