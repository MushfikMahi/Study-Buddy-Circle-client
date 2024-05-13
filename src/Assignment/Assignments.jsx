import { Link, useLoaderData, useNavigate } from "react-router-dom";
import AssignmentsCard from "./AssignmentsCard";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";



const Assignments = () => {
    const [control, setControl] = useState(false)
    const [assignments, setAssignments] = useState([])
    const {user}= useContext(AuthContext)
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/assignments`)
        .then(res=>res.json())
        .then(data=>{
            setAssignments(data);
        })
    },[user, control])
    
 
      // console.log(assignment.assignment_creator);
      const navigate = useNavigate()
      const handleUpdate=(email, id)=>{
        // if('salehinmahi2004@gmail.com'===user?.email){}
        navigate(`/update_assignment/${id}`)
        // else return toast.error('Action not permitted')
        
      }
      
      const handleDelete=(email, id)=>{
        if(email===user?.email){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`${import.meta.env.VITE_API_URL}/delete/${id}`,{
                        method:'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Craft has been deleted.',
                                    'success'
                                )
                                setControl(!control)
                            }
                        })
    
                }
            })
        }
        
        else return toast.error('Action not permitted')
        
      }
    return (
        <div className="pt-24 container mx-auto">
            {
                assignments?.map(assignment=><div key={assignment._id}
                    className='w-full px-4 py-3 my-5 rounded-md shadow-md hover:scale-[1.05] transition-all'
                  >
                    <div className='flex items-center justify-between'>
                      <span className='text-xs font-bold '>
                        Deadline: {new Date(assignment?.deadline).toLocaleDateString()}
                      </span>
                      <span className='text-[12px] uppercase font-bold'>
                          <span className={assignment?.difficulty_level === 'Easy'
                            ? 'text-blue-800 px-3 rounded-full py-1 bg-blue-200'
                            : assignment?.difficulty_level === 'Medium'
                            ? 'text-yellow-800 px-3 rounded-full py-1 bg-yellow-200'
                            : assignment?.difficulty_level === 'Hard'
                            ? 'text-red-800 px-3 rounded-full py-1 bg-red-200'
                            : ''}>{assignment?.difficulty_level}</span>
                      </span>
                    </div>
              <div className='flex flex-col md:flex-row gap-5 my-5'>
              <div className='w-[250px]'>
                  <img className='rounded-2xl' src={assignment?.thumbnail_url} alt="" />
              </div>
                    <div className='mb-5 w-full'>
                      <h1 className='mt-2 text-lg font-semibold '>
                        {assignment?.title}
                      </h1>
              
                      <p title={assignment?.description} className='mt-2 text-sm  '>
                        {assignment?.description.substring(0, 70)}...
                      </p>
                      <p className='mt-2 text-sm font-bold '>
                        Mark: {assignment?.marks}
                      </p>
                      <div className='flex justify-end items-center gap-3'>
                        <h3 className="font-bold">{assignment?.assignment_creator.name}</h3>
                  <img className='rounded-full h-16 w-16' src={assignment?.assignment_creator.photo} alt="" />
              </div>
                    </div>
                    
              </div>
                    <hr />
                    <div className='flex justify-between my-5'>
                      <Link to={`/assignment/${assignment?._id}`} className='btn'>View Assignments</Link>
                      <button onClick={()=>handleUpdate(assignment?.assignment_creator.email, assignment?._id)} className='btn'>Update</button>
                      <button onClick={()=>handleDelete(assignment?.assignment_creator.email, assignment?._id)} className='btn'>Delete</button>
                    </div>
                  </div>)
            }
        </div>
    );
};

export default Assignments;