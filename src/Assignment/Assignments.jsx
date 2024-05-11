import { useLoaderData } from "react-router-dom";
import AssignmentsCard from "./AssignmentsCard";

const Assignments = () => {
    const assignments = useLoaderData()
    return (
        <div className="pt-24 container mx-auto">
            {
                assignments.map(assignment=><AssignmentsCard key={assignment._id} assignment={assignment}></AssignmentsCard>)
            }
        </div>
    );
};

export default Assignments;