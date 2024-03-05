import { useRoutes } from "react-router-dom";
import { AllLessons, AllProject, EntryRoads } from "./entry";

export default function AllRoads(){
    return useRoutes([EntryRoads,AllLessons,AllProject])
}