import { useLoaderData } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
const DetailAssignments = () => {
  const {user} = useContext(AuthContext)
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
    const assignment = useLoaderData()

    const {
        _id,
        title,
        description,
        difficulty_level,
        deadline,
        thumbnail_url,
        marks,
        assignment_creator,
      } = assignment || {}

      const {email, name, photo} = assignment_creator || {}

      const assignmentId = _id
      const status = 'Pending'
      const handleLink = async(event) => {
        event.preventDefault()
        if(user?.email === email) return toast.error('Action not permitted')
        const form = event.target
        const link = form.link.value;
        const note = form.note.value;
        const takerEmail = user?.email
        const takerName = user?.displayName
        const creator = {name, email}
        const submit = {assignmentId,marks, link,difficulty_level, note, title, deadline,status,
          takerEmail, takerName, creator};
          console.log(submit);
        try {
          const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/submitted`,
            submit
          )
          console.log(data)
          toast.success('Assignment Submitted Successfully!')
        //   navigate('/my-created-assignments')
        } catch (err) {
          console.log(err)
        }

      };

    return (
        <div className="flex flex-col md:flex-row container mx-auto gap-5 py-20">
            <div className="flex-1">
                <img src={thumbnail_url} alt={title} />
            </div>
            <div className="flex items-center justify-center">
            <div className="flex-1 space-y-5">
                <h2 className="text-3xl font-bold">{title}</h2>
                <p>{description}</p>
                <hr />
                <div className="flex justify-between">
        <div>
        <p className="font-bold">Marks: {marks}</p>
        </div>
        <div>
        <p className="flex items-center gap-2"> <span className="font-bold">Deadline : </span>{new Date(deadline).toLocaleDateString()}</p>
        </div>
    </div>
    <hr />
    <div className="flex justify-between items-center">
        <h3><span className="font-bold">Difficulty Level :</span> {difficulty_level}</h3>
        <button onClick={onOpenModal} className="btn bg-[#007BA7] text-white">Take Assignment</button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold">Submit Your Assignment</h3>
      <form onSubmit={handleLink} >
      <div>
      <label className='text-gray-700' htmlFor='link'>
                Assignment pdf/doc link
              </label>
              <input
                id='link'
                type='text'
                name='link'
                placeholder="PDF/Doc link"
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
      </div>
      <div>
      <label className='text-gray-700 ' htmlFor='note'>
                Give a note
              </label>
              <textarea
                id='note'
                type='textarea'
                name='note'
                placeholder="Give A Quick Note"
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
      </div>
      <button className="btn w-full mt-3 bg-[#007BA7] text-white">Submit</button>
      </form>
        </div>
      </Modal>

        {/* <h4 className="flex items-center gap-2"><FaClockRotateLeft /> <span className="font-bold">Prepairing Time :</span> {time}</h4>
        <h4 className="flex items-center gap-3"><VscSettings /><span className="font-bold">Customizable :</span> {customization}</h4>
        <h4 className="flex gap-2 items-center"><AiOutlineStock /> <span className="font-bold">Stock Status :</span> {stockStatus}</h4> */}
    </div>
    <hr />
    <div>
        <p className="font-bold">Assignment Creator Information : </p>
        <p>Name : {name}</p>
        <p>Email : {email}</p>
    </div>
            </div>
            </div>
        </div>
    );
};

export default DetailAssignments;