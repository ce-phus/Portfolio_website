import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {


    // prefer-color-schema is a CSS feature, it is used to detect if a user has requested light or dark color theme and it is based on the user preference and the operating system settings.

    const preferDarkQuery = '(prefer-color-scheme:dark)'  
    const [mode, setMode] = useState("");

    useEffect(() =>{
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const usePref = window.localStorage.getItem("theme");

        const handleChange = ()=>{
            if(usePref){
                let check = userPref === "dark" ? "dark":"light";
                setMode(check);
                if(check ==="dark"){
                    document.document.classList.add('dark')
                }else{
                    document.document.classList.remove('dark');
                }
            }else{
                let check = mediaQuery.matches ? "dark": "light";
                setMode(check);

                if(check ==="dark"){
                    document.document.classList.add('dark')
                }else{
                    document.document.classList.remove('dark');
                }

            }
                
        }

        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)

    },[])
    
    // This effect will update the values in the local storage, so we will run this effect whenever there is any change in the mode state, so when youclick on the mode to change the theme we will set it to the local storage

    useEffect(()=>{
        if(mode==='dark'){
            window.localStorage.setItem("theme","dark")
            document.documentElement.classList.add("dark")
        }
        
        if(mode ==='light'){
            window.localStorage.setItem("theme","light")
            document.documentElement.classList.remove("dark")
        }

        
    }, [mode])

  return [mode, setMode]
}

export default useThemeSwitcher