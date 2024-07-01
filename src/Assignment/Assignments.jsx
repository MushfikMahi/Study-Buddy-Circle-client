import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { IoIosArrowDown } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Assignments = () => {
  const navigate = useNavigate();
  const [control, setControl] = useState(false);
  const [filter, setFilter] = useState("All");
  // const [assignments, setAssignments] = useState([]);
  const { user } = useContext(AuthContext);
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}/assignments`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAssignments(data);
  //     });
  // }, [user, control]);

  const {
    data: assignments = [],
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["assignments"],
  });
  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/assignments`);
    return data;
  };
  console.log(isLoading);
  if (isLoading) {
    return (
      <>
        <div className="pt-20">
          <div className="flex flex-col gap-4 w-52">
            <div className="skeleton h-8 w-40"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      </>
    );
  }

  // console.log(assignment.assignment_creator);

  const handleUpdate = (email, id) => {
    // if('salehinmahi2004@gmail.com'===user?.email){}
    navigate(`/update_assignment/${id}`);
    // else return toast.error('Action not permitted')
  };

  const handleDelete = (email, id) => {
    if (email === user?.email) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`${import.meta.env.VITE_API_URL}/delete/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire(
                  "Deleted!",
                  "Your Craft has been deleted.",
                  "success"
                );
                setControl(!control);
              }
            });
        }
      });
    } else return toast.error("Action not permitted");
  };

  const filteredAssignments = () => {
    if (filter === "Easy") {
      return assignments.filter(
        (assignment) => assignment.difficulty_level === "Easy"
      );
    } else if (filter === "Medium") {
      return assignments.filter(
        (assignment) => assignment.difficulty_level === "Medium"
      );
    } else if (filter === "Hard") {
      return assignments.filter(
        (assignment) => assignment.difficulty_level === "Hard"
      );
    } else {
      return assignments;
    }
  };

  return (
    <div className="pt-24 container mx-auto">
      <div className="flex justify-center my-5">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="m-1 pr-8 relative btn bg-[#007BA7] text-white"
          >
            Filter by Difficullty{" "}
            <IoIosArrowDown className="absolute text-white text-xl right-2 top-4" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li
              className="hover:bg-[#007BA7] hover:text-white rounded-xl"
              onClick={() => setFilter("All")}
            >
              <a>All</a>
            </li>
            <li
              className="hover:bg-[#007BA7] hover:text-white rounded-xl"
              onClick={() => setFilter("Easy")}
            >
              <a>Easy</a>
            </li>
            <li
              className="hover:bg-[#007BA7] hover:text-white rounded-xl"
              onClick={() => setFilter("Medium")}
            >
              <a>Medium</a>
            </li>
            <li
              className="hover:bg-[#007BA7] hover:text-white rounded-xl"
              onClick={() => setFilter("Hard")}
            >
              <a>Hard</a>
            </li>
          </ul>
        </div>
      </div>
      {filteredAssignments().map((assignment) => (
        <div
          key={assignment._id}
          className="w-full px-4 py-3 my-5 rounded-md shadow-md hover:scale-[1.05] transition-all"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold ">
              Deadline: {new Date(assignment?.deadline).toLocaleDateString()}
            </span>
            <span className="text-[12px] uppercase font-bold">
              <span
                className={
                  assignment?.difficulty_level === "Easy"
                    ? "text-blue-800 px-3 rounded-full py-1 bg-blue-200"
                    : assignment?.difficulty_level === "Medium"
                    ? "text-yellow-800 px-3 rounded-full py-1 bg-yellow-200"
                    : assignment?.difficulty_level === "Hard"
                    ? "text-red-800 px-3 rounded-full py-1 bg-red-200"
                    : ""
                }
              >
                {assignment?.difficulty_level}
              </span>
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-5 my-5">
            <div className="md:w-[250px]">
              <img
                className="rounded-2xl"
                src={assignment?.thumbnail_url}
                alt=""
              />
            </div>
            <div className="mb-5 w-full space-y-2">
              <h1 className="mt-2 text-lg font-semibold ">
                {assignment?.title}
              </h1>

              <p title={assignment?.description} className="mt-2 text-sm  ">
                {assignment?.description.substring(0, 70)}...
              </p>
              <p className="mt-2 text-sm font-bold ">
                Mark: {assignment?.marks}
              </p>
              <div className="flex justify-end items-center gap-3 pb-8">
                <h3 className="font-bold">
                  {assignment?.assignment_creator.name}
                </h3>
                <img
                  className="rounded-full h-14 w-14 border-4 border-[#007BA7]"
                  src={assignment?.assignment_creator.photo}
                  alt={assignment?.assignment_creator.name}
                />
              </div>
              <hr />
              <div className="flex justify-between">
                <Link
                  to={`/assignment/${assignment?._id}`}
                  className="btn bg-[#007BA7] text-white"
                >
                  View Assignments
                </Link>
                <button
                  onClick={() =>
                    handleUpdate(
                      assignment?.assignment_creator.email,
                      assignment?._id
                    )
                  }
                  className="btn bg-[#007BA7] text-white"
                >
                  Update
                </button>
                <button
                  onClick={() =>
                    handleDelete(
                      assignment?.assignment_creator.email,
                      assignment?._id
                    )
                  }
                  className="btn bg-red-400 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          {/* <hr />
                    <div className='flex justify-between my-5'>
                      <Link to={`/assignment/${assignment?._id}`} className='btn bg-[#007BA7] text-white'>View Assignments</Link>
                      <button onClick={()=>handleUpdate(assignment?.assignment_creator.email, assignment?._id)} className='btn bg-[#007BA7] text-white'>Update</button>
                      <button onClick={()=>handleDelete(assignment?.assignment_creator.email, assignment?._id)} className='btn bg-red-400 text-white'>Delete</button>
                    </div> */}
        </div>
      ))}
    </div>
  );
};

export default Assignments;
