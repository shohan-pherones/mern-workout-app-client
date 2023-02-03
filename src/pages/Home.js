import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutFrom from "../components/WorkoutFrom";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("/api/workouts");
      const data = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: data });
      }
    };

    fetchWorkouts();
  }, [dispatch]);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutFrom />
    </div>
  );
};

export default Home;
