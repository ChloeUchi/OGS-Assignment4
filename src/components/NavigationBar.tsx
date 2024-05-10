import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        return savedDarkMode ? JSON.parse(savedDarkMode) : false;
    });
    const location = useLocation();

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode])

    return (
        <div className=''>
            <div className="navbar flex justify-around py-4 dark:bg-[#173f67] mb-14 items-center ">
                <div className='navCon flex gap-16 text-white font-extrabold text-[1.5em] '>
                    <Link className={location.pathname === '/' ? 'btn active' : 'btn active:text-[#3456a0] dark:active:text-[#dfecff]'} to={'/'}>Home</Link>
                    <Link className={location.pathname === '/quizpage' ? 'btn active' : 'btn active:text-[#3456a0] dark:active:text-[#dfecff]'} to={'/quizpage'}>Quiz</Link>
                    <Link className={location.pathname === '/scorepage' ? 'btn active' : 'btn active:text-[#3456a0] dark:active:text-[#dfecff]'} to={'/scorepage'}>Score</Link>
                    <Link className={location.pathname === '/evaluate' ? 'btn active' : 'btn active:text-[#3456a0] dark:active:text-[#dfecff]'} to={'/evaluate'}>Evaluate the course</Link>
                </div>

                <div className='fx-block'>
                    <div className='toggle'>
                        <div className=''>
                            <input onClick={() => setDarkMode(!darkMode)} type="checkbox" id="toggles" checked={darkMode} />
                            <div data-unchecked="Off" data-checked="On" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;
