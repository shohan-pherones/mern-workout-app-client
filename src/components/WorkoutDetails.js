import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { BsTrash } from "react-icons/bs";
import { formatDistanceToNow } from "date-fns";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();

  const handleClick = async () => {
    const res = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });

    const data = await res.json();

    if (res.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: data });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg):</strong> {workout.load}
      </p>
      <p>
        <strong>Reps:</strong> {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleClick}>
        <BsTrash />
      </span>
    </div>
  );
};

export default WorkoutDetails;
