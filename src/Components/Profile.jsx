import { useState } from "react";
import { BiSolidCameraPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const Profile = () => {
    const [avatar, setAvatar] = useState(null);

    const handleImageChange = event => {
        const selectedFile = event.target.files[0];
        setAvatar(selectedFile);
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
                        <label htmlFor="avatar" className="avatar border-dashed border-4 border-gray-200 rounded-full p-24 mt-6">
                            {avatar ? (
                                <img src={URL.createObjectURL(avatar)} alt="Avatar" className="w-10 h-10 object-cover rounded-full" />
                            ) : (
                                <BiSolidCameraPlus className="text-gray-200 text-4xl" />
                            )}
                            </label>
                    </div>
                    <div>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs mt-32" onChange={handleImageChange} />
                    <p className="text-gray-300 font-bold mt-6"> Or choose one of our defaults</p>
                    </div>
                </div>
                <h1 className="text-4xl font-bold mt-6">Add Your Location</h1>
                <input type="text" placeholder="Enter a Location" className="p-4 text-2xl border-b-2 w-[80%]" />
               <div>
               <button className="btn btn-xs w-72 hover:bg-pink-400 bg-pink-400 text-white font-bold mt-8 sm:btn-sm md:btn-md lg:btn-lg">Next</button>
               <Link to="/"><p className="text-gray-300 text-lg font-bold ml-14 ">or Press RETURN</p></Link>
               </div>
            </div>
           
        </div>
    );
};

export default Profile;