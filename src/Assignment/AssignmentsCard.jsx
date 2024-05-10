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
        <Link
      to={`/assignment/${_id}`}
      className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'
    >
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light text-gray-800 '>
          Deadline: {new Date(deadline).toLocaleDateString()}
        </span>
        <span className='text-[8px] uppercase '>
            <span className={difficulty_level === 'Easy'
              ? 'text-blue-800 px-3 rounded-full py-1 bg-blue-200'
              : difficulty_level === 'Medium'
              ? 'text-yellow-800 px-3 rounded-full py-1 bg-yellow-200'
              : difficulty_level === 'Hard'
              ? 'text-red-800 px-3 rounded-full py-1 bg-red-200'
              : ''}>{difficulty_level}</span>
        </span>
      </div>
<div>
    <img src={thumbnail_url} alt="" />
</div>
      <div>
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
    </Link>
    );
};

export default AssignmentsCard;