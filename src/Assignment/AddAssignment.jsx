import { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import { AuthContext } from '../Provider/AuthProvider'
import toast from 'react-hot-toast'

const AddAssignment = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const [startDate, setStartDate] = useState(new Date())

  const handleFormSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const title = form.title.value
    const email = form.email.value
    const deadline = startDate
    const difficulty_level = form.difficulty_level.value
    const thumbnail_url = form.thumbnail_url.value
    const marks = parseFloat(form.marks.value)
    const description = form.description.value
    const jobData = {
      title,
      deadline,
      difficulty_level,
      thumbnail_url,
      marks,
      description,
      assignment_creator: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    }
    try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/assignments`,
          jobData
        )
        console.log(data)
        toast.success('Assignment Created Successfully!')
      //   navigate('/my-created-assignments')
      } catch (err) {
        console.log(err)
      }
  }




    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] mb-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Create A Assignments
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='title'>
                Title
              </label>
              <input
                id='title'
                name='title'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                disabled
                defaultValue={user?.email}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className='border p-2 rounded-md'
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>

            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 ' htmlFor='difficulty_level'>
                Difficulty Lavel
              </label>
              <select
                name='difficulty_level'
                id='difficulty_level'
                className='border p-2 rounded-md'
              >
                <option value='Easy'>Easy</option>
                <option value='Medium'>Medium</option>
                <option value='Hard'>Hard</option>
              </select>
            </div>
            <div>
              <label className='text-gray-700 ' htmlFor='thumbnail_url'>
                Thumbnail Url
              </label>
              <input
                id='thumbnail_url'
                name='thumbnail_url'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='marks'>
                Marks
              </label>
              <input
                id='marks'
                name='marks'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='description'>
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
            ></textarea>
          </div>
          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
    );
};

export default AddAssignment;