import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Image from '../assets/SignUpImage.webp'
import Swal from 'sweetalert2'
import { RiAlertFill } from "react-icons/ri";
import './Loading.css'

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser } = useAuth()
    const [usernameError, setUsernameError] = useState("");
    const navigate = useNavigate()
    const [time, setTime] = useState(false);

    const handleCreate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const username = form.username.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, username, email, password);
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
            Swal.fire('Minimum eight characters, at least one letter and one number.')
            return;
        }
        setTime(true);
        axiosPublic.get(`/users/username/${username}`)
            .then(response => {
                if (response.data.exists) {
                    setUsernameError("Username has already been taken.");
                    setTime(false);
                } else {
                    createUser(email, password)
                        .then(() => {
                            const userInfo = {
                                name: name,
                                email: email,
                                username: username,
                                password: password
                            }
                            axiosPublic.post('/users', userInfo)
                                .then(res => {
                                    if (res.data.insertedId) {
                                        setTimeout(() => {
                                            navigate('/profile');
                                        }, 3000);
                                    }

                                });

                        })
                        .catch(error => {
                            console.log(error.message);
                        });
                }
            })
            .catch(error => {
                console.log(error.message);
            });

    }
    return (
        <>
        {time ? (
           <div>
            <div className="loading-screen">
           <div className="loading-spinner"></div>
         </div>
         <p className='loading-screen'>Creating Account......</p>
           </div>
         
        ) : (
            <div className='flex'>
            <div className='w-full'>
                <img src={Image} alt="" className='bg-[#eed578] h-[100vh] w-[70%] relative' />
                <h1 className='Dancing-Script text-4xl absolute top-12 left-8 text-[#bc6c25]'>dribbble</h1>
                <p className='text-xl absolute top-20 left-8 mt-4 text-[#bc6c25] font-extrabold'>Discover the world top <br />Designers and creatives</p>
                <p className='absolute bottom-4 left-8 text-[#bc6c25]'>Art by <span className='underline'>Peter tarka</span></p>
            </div>
            <div className=' w-full ml-14 relative'>

                <div className="mt-24">
                    <h1 className="text-4xl anton-regular">Sign up to Dribbble</h1>
                    {usernameError && <p className="text-red-500 font-bold mt-4">&#8226;
                        <span className='ml-2'>{usernameError}</span></p>}

                    <div>
                        <form onSubmit={handleCreate} >
                            {/*  Name section */}
                            <div className="md:flex mb-8 mt-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-xl font-extrabold">Name</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="text" name="name" placeholder="Name" className="border-none bg-[#e2e2e2] rounded-lg p-3 w-96" required />
                                    </label>
                                </div>

                                {/* Username section */}
                                <div className="form-control md:w-1/2 ml-0 lg:ml-4">
                                    <label className="label">
                                        {usernameError ?
                                            <span className="label-text text-xl flex gap-2 font-extrabold">
                                                <RiAlertFill className='mt-1 text-red-500' />Username</span>
                                            :
                                            <span className="label-text text-xl font-extrabold">
                                                Username</span>
                                        }
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="username" placeholder="Username" className="border-none bg-[#e2e2e2]  rounded-lg p-3 w-96" required />
                                    </label>
                                </div>
                            </div>

                            {/* Email section */}
                            <div className="mb-8">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-xl font-extrabold">Email</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="email" name="email" placeholder="Email" className="border-none bg-[#e2e2e2] rounded-lg p-3 w-96input input-bordered w-[95%]" required />
                                    </label>
                                </div>

                            </div>

                            {/* Password section */}
                            <div className="mb-8">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-xl font-extrabold">Password</span>
                                    </label>
                                    <label className="input-group">

                                        <input type="password" name="password" placeholder="6+ characters" className=" border-none bg-[#e2e2e2] rounded-lg p-3  w-[95%]" required />
                                    </label>
                                </div>

                            </div>

                            {/* terms & policy section */}
                            <div className='flex gap-2'>
                                <input type="checkbox" defaultChecked className="checkbox checkbox-md mt-2" />
                                <p className='text-gray-400 text-2xl font-medium'>Creating an account means you are okay with our <span className='text-blue-800 font-normal'>Terms of Service,Privacy of Policy</span>and our default <span className='text-blue-800 font-medium'>Notification settings</span></p>
                            </div>
                            {/* btn section */}
                           
                                <input type="submit" value="Create Account" className="btn font-medium text-xl mt-8 hover:text-black bg-pink-400 text-white w-96" />
                         
                        </form>
                        <p className='text-gray-400 text-lg mt-4'>This site is protected by reCAPTCHA and the google <br /> <span className='text-blue-800'>Privacy of Policy</span>and <span className='text-blue-800'>Terms of Service</span> apply.</p>
                    </div>
                </div>
                <p className='absolute top-0 left-[75%] mt-2 font-medium' >Already a member? <span className='text-blue-800'>Sign in</span></p>
            </div>

        </div> 
        )}
        </>
        
    );
};

export default SignUp;