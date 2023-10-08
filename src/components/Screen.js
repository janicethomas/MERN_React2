// import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    // <Textfit className="screen" mode="single" max={70}>
    //   {value}
    // </Textfit>
    <div className="screen">{value}</div>
  );
};
export default Screen;