import { createContext,useContext } from "react";
export const ThemeContext=createContext(
    {
        Theme:"light",
        darkTheme:()=>{},
        lightTheme:()=>{}

    }


)

export const ThemeProvider=ThemeContext.Provider;

export default function useTheme()
{
    return useContext(ThemeContext)
} 


