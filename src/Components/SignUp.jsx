import Image from '../assets/SignUpImage.webp'

const SignUp = () => {
    return (
   <div className='flex'>
    <div className='w-full'>
        <img src={Image} alt="" className='bg-[#eed578] h-[100vh] w-[70%] relative'/>
        <h1 className='Dancing-Script text-4xl absolute top-12 left-8 text-[#bc6c25]'>dribbble</h1>
        <p className='text-xl absolute top-20 left-8 mt-4 text-[#bc6c25] font-extrabold'>Discover the world top <br />Designers and creatives</p>
        <p className='absolute bottom-4 left-8 text-[#bc6c25]'>Art by <span className='underline'>Peter tarka</span></p>
    </div>
    <div className=' w-full ml-14 relative'>
   
      <div className="mt-28 ">
       <h1 className="text-5xl font-bold">Sign to Dribbble</h1>
       <form>
        {/*  Name & Username section */}
       <div className="md:flex mb-8 mt-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-extrabold">Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Name" className="border-none bg-[#e2e2e2] rounded-lg p-3 w-96" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 lg:ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-extrabold">Username</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="username" placeholder="Username" className="border-none bg-[#e2e2e2] rounded-lg p-3 w-96" />
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

                            <input type="text" name="email" placeholder="Email" className="border-none bg-[#e2e2e2] rounded-lg p-3 w-96input input-bordered w-[95%]" />
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

                            <input type="text" name="password" placeholder="6+ characters" className=" border-none bg-[#e2e2e2] rounded-lg p-3  w-[95%]" />
                        </label>
                    </div>

                </div>

                {/* terms & policy section */}
                <div className='flex gap-2'>
                <input type="checkbox" defaultChecked className="checkbox checkbox-md mt-2" />
                <p className='text-gray-400 text-2xl font-medium'>Creating an account means you're okay with our <span className='text-blue-800 font-normal'>Terms of Service,Privacy of Policy</span>and our default <span className='text-blue-800 font-medium'>Notification settings</span></p>
                </div>
                {/* btn section */}
                <input type="submit" value="Add Book" className="btn mt-8 bg-pink-400 text-white w-96" />
       </form>
       <p className='text-gray-400 text-lg mt-4'>This site is protected by reCAPTCHA and the google <br /> <span className='text-blue-800'>Privacy of Policy</span>and <span className='text-blue-800'>Terms of Service</span> apply.</p>
      </div>
      <p className='absolute top-0 left-[75%] mt-2 font-medium' >Already a member? <span  className='text-blue-800'>Sign in</span></p>
    </div>

   </div>
    );
};

export default SignUp;