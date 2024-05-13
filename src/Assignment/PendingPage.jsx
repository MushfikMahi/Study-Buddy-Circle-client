import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PendingPage = () => {
    const [assignments, setAssignments] = useState([])
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/pending`)
        .then(res=>res.json())
        .then(data=>{
            setAssignments(data);
        })
    },[])
    const navigate = useNavigate()
    const handleMarking =(id)=>{
        navigate(`/marking/${id}`)
    }
    return (
        <section className='container px-4 mx-auto pt-24 min-h-[80vh]'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 '>Pending Assignments</h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
          {assignments?.length} Assignments
        </span>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span>Examinee</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Marks</span>
                      </button>
                    </th>
                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Actions
                    </th>
                  </tr>
                </thead>
                {
                    assignments.map(assignment=><tbody key={assignment._id} className='bg-white divide-y divide-gray-200 '>
                    <tr>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {assignment?.title}
                      </td>
  
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {assignment?.takerName}
                      </td>
  
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {assignment?.marks}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <button
                        onClick={()=>handleMarking(assignment?._id)}
                          className='bg-[#007BA7] text-white px-3 py-2 rounded-lg transition-colors duration-200   hover:bg-blue-700 focus:outline-none disabled:cursor-not-allowed'
                        >
                          Give Mark
                        </button>
                      </td>
                    </tr>
                  </tbody>)
                }
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default PendingPage;



