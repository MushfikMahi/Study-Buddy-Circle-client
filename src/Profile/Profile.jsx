import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const handelProfileUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUser(name, photo);
  };
  return (
    <div>
      

      <div className='flex justify-center items-center min-h-[calc(100vh-306px)] mb-12'>
      <div className="p-5 md:p-10 rounded-2xl border shadow-xl">
      <div className='flex flex-col md:flex-row items-center justify-center'>
  
  <div className="flex flex-col items-center space-y-5">
     <img
       className="h-32 rounded-full border-[#007BA7] border-4"
       src={user?.photoURL}
       alt=""
     />
     <h3 className="text-3xl font-bold">Name : {user?.displayName}</h3>
     <p className="text-xl">Email : {user?.email}</p>
   </div> 

<div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
 <div className='flex justify-center mx-auto'>
   <img className='w-auto h-7 sm:h-8' src='' alt='' />
 </div>
 <form onSubmit={handelProfileUpdate}>
 <div className='mt-4'>
     <label
       className='block mb-2 text-sm font-medium text-gray-600 '
       htmlFor='name'
     >
       Username
     </label>
     <input
       id='name'
       autoComplete='name'
       name='name'
       className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
       type='text'
     />
   </div>

   <div className='mt-4'>
     <label
       className='block mb-2 text-sm font-medium text-gray-600 '
       htmlFor='photo'
     >
       Photo URL
     </label>
     <input
       id='photo'
       autoComplete='photo'
       name='photo'
       className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
       type='text'
     />
   </div>
   <div className="form-control mt-6">
               <button className="btn  bg-transparent w-full border-[#007BA7] hover:border-transparent text-black hover:text-white hover:bg-[#007BA7]">
                 Update
               </button>
             </div>
 </form>
</div>
</div>
      </div>
    </div>

    </div>
  );
};

export default Profile;