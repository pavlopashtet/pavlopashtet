import {useDispatch} from "react-redux";
import StepActionCreators from "../../../redux/action/StepanActions/StepActionCreators";
import {bindActionCreators} from "redux";

export const useStepActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(StepActionCreators, dispatch)
}