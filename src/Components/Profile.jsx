import { useState } from "react";
import { BiSolidCameraPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import './Profile.css'
import { IoIosArrowForward } from "react-icons/io";

const Profile = () => {
    const [avatar, setAvatar] = useState(null);
    const [location, setLocation] = useState("");

    const handleImageChange = event => {
        const selectedFile = event.target.files[0];
        setAvatar(selectedFile);
    }

    const handleLocationChange = event => {
        setLocation(event.target.value);
    }

    //  if location is entered
    const isLocationEntered = () => {
        return location.trim() !== "";
    }
    return (
        <div>
            <div>
                <h1 className="Dancing-Script text-5xl text-pink-600 font-semibold m-8">dribbble</h1>
            </div>

            {/* create Profile  */}
            <div className="w-[50%] mx-auto mt-10">
                <h1 className="text-4xl font-extrabold">Welcome!Let's create your profile</h1>
                <p className="text-gray-400 mt-8">Let other get to Know you better!You can do these later</p>
                <div className="flex gap-10">
                    <div>
                        <h1 className="text-4xl font-bold mt-6">Add Your Avatar</h1>
                        <label htmlFor="avatar" className="avatar border-dashed border-4 border-gray-200 rounded-full w-52 h-52 p-1 mt-6">
                            {avatar ? (
                                <img src={URL.createObjectURL(avatar)} alt="Avatar" className="w-10 h-10 object-cover rounded-full" />
                            ) : (
                                <BiSolidCameraPlus className=" ml-20 mt-20  text-gray-200 text-4xl" />
                            )}
                        </label>
                    </div>
                    <div>
                        <div className="round">
                            <div className="upload">
                                <button type="button" className="btn-warning">
                                    choose image
                                    <input type="file" onChange={handleImageChange} />
                                </button>
                            </div>

                        </div>
                        <p className="text-gray-400 text-xl font-bold mt-6 flex justify-center items-center"><IoIosArrowForward />
                            Or choose one of our defaults</p>
                    </div>
                </div>
                <h1 className="text-4xl font-bold mt-6">Add Your Location</h1>
                <input
                    type="text"
                    placeholder="Enter a Location"
                    className="p-4 text-2xl outline-none border-b-2 w-[80%]"
                    onChange={handleLocationChange}
                />
                <div>
                    {!isLocationEntered()?
                       <button
                       className={`btn btn-xs w-72  hover:bg-pink-400 bg-pink-400 text-white font-bold mt-8 sm:btn-sm md:btn-md lg:btn-lg 
           ${!isLocationEntered() && 'btn-disabled'}`}
                       disabled={!isLocationEntered()}
                       style={{ backgroundColor: (!isLocationEntered()) ? 'pink' : '#f72585',color: (!isLocationEntered() )? 'white' : 'white' }}> Next
                   </button>
                   :
                   <Link to="/selectOption">
                    <button
                            className={`btn btn-xs w-72  hover:bg-pink-400 bg-pink-400 text-white font-bold mt-8 sm:btn-sm md:btn-md lg:btn-lg 
                ${!isLocationEntered() && 'btn-disabled'}`}
                            disabled={!isLocationEntered()}
                            style={{ backgroundColor: (!isLocationEntered()) ? 'pink' : '#f72585',color: (!isLocationEntered() )? 'white' : 'white' }}> Next
                        </button>
                   </Link>
                        
                    }
                    
                       
                    
                    {!isLocationEntered() ? " " : <Link to="/"><p className="text-gray-300 text-lg font-bold ml-14 ">or Press RETURN</p></Link>}
                </div>
            </div>

        </div>
    );
};

export default Profile;