
import logo from '../assets/logo-text.png'
const Nav = () => {
    return (
        <div className='bg-white sticky top-0 flex items-center justify-between container mx-auto py-2'>
            <img src={logo} className='h-8 w-auto' alt="logo img" />

            <ul className='flex items-center gap-3 text-xs'>
                <li className='text-[#DB2777]'>Home</li>
                <li>Technologies</li>
                <li>Project</li>
                <li>About</li>
                <li>contact</li>
            </ul>

            <div className='flex items-center gap-2'>
                <button className='rounded-full border border-[#DB2777] px-4 py-2 text-sm font-semibold text-[#DB2777]'>Sign In</button>
                <button className='rounded-full bg-[#D91B7E] px-4 py-2 text-sm font-semibold text-white'>Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;