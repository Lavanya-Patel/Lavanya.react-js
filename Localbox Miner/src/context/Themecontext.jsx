import { createContext, useState } from "react";

 export const themecontext=createContext()


export function ThemeContextProvider({children}){
    const [theme,settheme]=useState("light")

    const themeupdatefunction=()=>{
        settheme(theme=="light"?"dark":"light")
    }
    return(
        <themecontext.Provider value={{theme,themeupdatefunction}}>{children}</themecontext.Provider>
    )
}