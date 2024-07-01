import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const containerFor = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Future = () => {
  // const [futures, setFutures] = useState([])
  // useEffect(()=>{
  //     fetch(`${import.meta.env.VITE_API_URL}/future`)
  //     .then(res=>res.json())
  //     .then(data=>{
  //         setFutures(data);
  //     })
  // },[])

  const {
    data: futures = [],
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["futures"],
  });
  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/future`);
    return data;
  };
  // console.log(futures);
  // console.log(isLoading);

  if (isLoading) {
    return (
      <>
        <div className="pt-20 grid grid-cols-1 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col gap-4 w-52">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 w-52">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 w-52">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 w-52">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <motion.div
        variants={containerFor}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 md:gap-10 containerFor"
      >
        {futures.map((future, idx) => (
          <motion.div
            variants={item}
            className="shadow-xl item p-10 m-10 md:m-0 rounded-xl relative"
            key={future?._id}
          >
            <h3 className="text-xl font-bold">{future?.title}</h3>
            <p>{future?.description}</p>
            <p className="bg-[#007BA7] btn-circle absolute top-[40%] -left-6 flex items-center justify-center text-white">
              {idx + 1}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.article>
  );
};

export default Future;
