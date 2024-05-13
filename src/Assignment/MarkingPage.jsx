import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MarkingPage = () => {
    const assignment = useLoaderData()
    console.log(assignment);
const navigate = useNavigate()

    const handleFormSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const gainedMark = parseFloat(form.mark.value)
        const feedback = form.feedback.value
        const status = 'Completed'
        const formAssignment = {
            gainedMark,
          feedback,
          status,
        }
        console.log(assignment._id);
        try {
            const { data } = await axios.put(
              `${import.meta.env.VITE_API_URL}/marked/${assignment?._id}`,
              formAssignment
            )
            console.log(data)
            toast.success('Assignment Feedback Sended Successfully!')
            navigate('/pendingassignments')
          } catch (err) {
            console.log(err)
          }
      }


    return (
        <div className="container mx-auto space-y-5 pt-24">
            <iframe src={assignment?.link} width="100%" height="600px"></iframe>
            <p><span className="font-bold">Note :</span> {assignment?.note}</p>
            <form onSubmit={handleFormSubmit}>
      <div>
      <label className='text-gray-700' htmlFor='mark'>
                Assignment Mark
              </label>
              <input
                id='mark'
                type='number'
                name='mark'
                placeholder="Assignment Mark"
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
      </div>
      <div>
      <label className='text-gray-700 ' htmlFor='note'>
                Feedback
              </label>
              <textarea
                id='feedback'
                type='textarea'
                name='feedback'
                placeholder="Give A Feedback"
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
      </div>
      <button className="btn w-full mt-3 bg-[#007BA7] text-white">Submit</button>
      </form>
        </div>
    );
};

export default MarkingPage;