import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import AssignmentsCard from "./AssignmentsCard";

const MyAttempted = () => {
    const {user} = useContext(AuthContext)
    const assignment = useLoaderData()
    const [attempted, setAttempted] = useState([])
    const [attemptedId, setAttemptedId] = useState([])
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/submitted/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setAttempted(data);
            data.map(id=>setAttemptedId(id.id))
        })
    },[])

    const myAttemt = assignment.find(ass => ass._id === attemptedId)
    console.log(attempted);
    console.log(myAttemt);

    return (
        <div>
            {/* {
                myAttemt.map(assignment=><AssignmentsCard key={assignment._id} assignment={assignment}></AssignmentsCard>)
            } */}
        </div>
    );
};

export default MyAttempted;