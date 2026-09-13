
import logo from '../assets/logo-text.png'
const Nav = () => {
    return (
        <div className='bg-white sticky top-0 flex justify-between container mx-auto py-1'>
             <img src={logo} className='h-[32] w-[136] ' alt="logo img" />

            <ul className='flex gap-3 text-xs my-auto '>
                <li className='text-[#DB2777]'>Home</li>
                <li>Technologies</li>
                <li>Project</li>
                <li>About</li>
                <li>contact</li>
            </ul>
            <div className='gap-2'>
            <button className='h-[92] w-[39] bold py-1 px-2 rounded-3xl '>Sign In</button>
            <button className='h-[92] w-[39] bg-[#D91B7E] text-white bold py-1 px-2 rounded-3xl '>Sign Up</button>
            </div>

        </div>

        
    );
};

export default Nav;