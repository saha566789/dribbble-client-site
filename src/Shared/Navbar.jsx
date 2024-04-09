import { CiSearch } from "react-icons/ci";
import { TbShoppingCartX } from "react-icons/tb";

const Navbar = () => {
    return (
        <div className="navbar mx-auto">
            <div className="flex-1 gap-8">
                <a className=" text-4xl Dancing-Script">dribbble</a>
                <a className="text-[#403d39] text-xl font-medium">Inspiration</a>
                <a className="text-[#403d39] text-xl font-medium">Find Work</a>
                <a className=" text-[#403d39] text-xl font-medium">Learn design</a>
                <a className=" text-[#403d39] text-xl font-medium">Go Pro</a>
                <a className=" text-[#403d39] text-xl font-medium">Hire Designers</a>
            </div>
            <div className="flex-none gap-2">
                <label className="input input-bordered flex items-center gap-2">
                <CiSearch />
                    <input type="text" className="grow w-16" placeholder="search" />
                </label>
                <TbShoppingCartX className="text-4xl" />
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    
        

                     
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;