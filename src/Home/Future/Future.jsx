import { useEffect, useState } from "react";

const Future = () => {

    const [futures, setFutures] = useState([])
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/future`)
        .then(res=>res.json())
        .then(data=>{
            setFutures(data);
        })
    },[])



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {
                futures.map((future, idx)=><div className="shadow-xl p-10 rounded-xl relative" key={future?._id}>
                    <h3 className="text-xl font-bold">{future?.title}</h3>
                    <p>{future?.description}</p>
                    <p className="bg-[#007BA7] btn-circle absolute top-[40%] -left-6 flex items-center justify-center text-white">{idx+1}</p>
                </div>)
            }
        </div>
    );
};

export default Future;