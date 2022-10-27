import { AppRoutes } from "../../common/Routes";
import { Navigate } from "react-router-dom";

export const MentorRoute = ({authUser, Component}) => {
    return authUser === null
        ? <Navigate to={AppRoutes.NOT_FOUND}/>
        : authUser?.role === "mentor"
            ? <Component/>
            : authUser?.role === "student"
            && <Navigate to={AppRoutes.MAIN}/>
}
