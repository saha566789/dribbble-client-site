import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SelectOptionCard from "./SelectOptionCard";

const SelectOption = () => {
    const axiosPublic = useAxiosPublic()

    const { data: total = [] } = useQuery({
        queryKey: ['total'],
        queryFn: async () => {
          const response = await axiosPublic.get('/select');
          return response.data;
        },
      });
    console.log(total)
    return (
        <div>
            <div>
                <h1 className="Dancing-Script text-5xl text-pink-600 font-semibold m-8">dribbble</h1>
            </div>

            {/* Select Option */}
            <div>
           <div className="w-[60%] mx-auto mt-10">
           <h1 className="text-4xl text-center font-extrabold">What brings you to Dribbble?</h1>
                <p className="text-gray-400 text-center text-xl mt-6">select the option that  best describe you.Don't worry.you can explore other option later.</p>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                {
                   total?.map(totals=><SelectOptionCard
                   key={totals.id}
                   totals={totals}></SelectOptionCard> )
                }
            </div>
            </div>
        </div>
    );
};

export default SelectOption;