import { useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CounterContext } from "../Context/MyContext";

const _Login = ({ state,gtt, tp, pt, tx,Component }) => {
  const navigate = useNavigate();
  const statusData=useContext(CounterContext)
  const {lin}=statusData

  
  useEffect(() => {
    if (lin) {
      navigate('/');
    }
  }, []);
      
  return <Component  gtt={gtt}  tp={tp} pt={pt} tx={tx} />
};
export default _Login;
      
        


