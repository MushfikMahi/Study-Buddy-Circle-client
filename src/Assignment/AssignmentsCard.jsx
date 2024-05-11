import { Link } from 'react-router-dom'
const AssignmentsCard = ({assignment}) => {
    const {
        _id,
        title,
        description,
        difficulty_level,
        deadline,
        thumbnail_url,
        marks,
      } = assignment || {}
    return (
        <div
      
      className='w-full px-4 py-3 my-5 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'
    >
      <div className='flex items-center justify-between'>
        <span className='text-xs font-bold text-gray-800 '>
          Deadline: {new Date(deadline).toLocaleDateString()}
        </span>
        <span className='text-[12px] uppercase font-bold'>
            <span className={difficulty_level === 'Easy'
              ? 'text-blue-800 px-3 rounded-full py-1 bg-blue-200'
              : difficulty_level === 'Medium'
              ? 'text-yellow-800 px-3 rounded-full py-1 bg-yellow-200'
              : difficulty_level === 'Hard'
              ? 'text-red-800 px-3 rounded-full py-1 bg-red-200'
              : ''}>{difficulty_level}</span>
        </span>
      </div>
<div className='flex flex-col md:flex-row gap-5 my-5'>
<div className='w-[250px]'>
    <img className='rounded-2xl' src='https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-132231.jpg?t=st=1715348731~exp=1715352331~hmac=cfb5bfee8a9c6790e0197c33cbef134a686d6661422bcaba9d5e10d3cefd1334&w=996' alt="" />
</div>
      <div className='mb-5'>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
          {title}
        </h1>

        <p title={description} className='mt-2 text-sm text-gray-600 '>
          {description.substring(0, 70)}...
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 '>
          Mark: {marks}
        </p>
      </div>
</div>
      <hr />
      <div className='flex justify-between my-5'>
        <Link to={`/assignment/${_id}`} className='btn'>View Assignments</Link>
        <Link to={`/update_assignment/${_id}`} className='btn'>Update</Link>
        <button className='btn'>Delete</button>
      </div>
    </div>
    );
};

export default AssignmentsCard;