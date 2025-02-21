import React, { useEffect, useState } from 'react'
import { MdModeNight, MdLightMode } from 'react-icons/md'

export const Theme = () => {

    const [darkMode, setDarkMode] = useState(true);

    const handleChangeTheme = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        const saveMode = localStorage.getItem('darkMode');
        if (saveMode === 'true') {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <div>
            <div onClick={handleChangeTheme}>
                {
                    darkMode ? (
                        <MdLightMode className='light-icon' size={30} />
                    ) : (
                        <MdModeNight className='rotate-45' size={30} />
                    )
                }
            </div>
        </div>
    )
}
