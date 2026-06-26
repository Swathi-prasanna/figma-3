import { MdWarningAmber } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { LuTestTube } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";


const HospitalData = () => {
  return (
    <section className="hospital-data">
      <div className="row gap-5 ms-4">
        <div className="beds-card col-lg-2">
          <div className="beds-inner-data">
            <FaRegClock className="bed-icon" size={20} color="Red"/>
            <span className="beds-text">Pending Tests</span>
          </div>
          <p className="beds-inner-data1">1 Orders</p>
        </div>
        <div className="patient-card col-lg-2">
          <div className="patients-inner-data">
            <LuTestTube color="skyblue" size={20} />
            <span className="patients-data">Processing</span>
          </div>
          <p className="patients-inner-data1">2 Tests</p>
        </div>
        <div className="vitals-card col-lg-2">
          <div className="vitals-inner-data">
            <LuCircleCheckBig className="vector-icon" color="grren"/> 
            <span className="vitals-data">completed Today</span>
          </div>
          <p className="vitals-inner-data1">1 Result</p>
        </div>
        <div className="task-card col-lg-2">
          <div className="task-inner-data">
             <MdWarningAmber color="#E7000B" size={20} />  
            <span className="task-data">Start Orders</span>
          </div>
          <p className="task-inner-data1">1 Urgent</p>
        </div>
      </div>
    </section>
  );
};

export default HospitalData;
