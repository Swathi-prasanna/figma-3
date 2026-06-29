import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";


// import StaticComponents from "./tasks/StaticComponents";
// import DynamicComponents from "./tasks/DynamicComponents";
// import objects from "./tasks/Objects";
// import Objects from "./tasks/Objects";
// import Hooks from "./tasks/Hooks";
// import Ternary from "./tasks/Ternary";
// import EmployeeDetails from "./tasks/EmployeeDetails";
// // import './tasks/Sample.css';
// import LiveNameDisplay from "./tasks/LiveNameDisplay";
// import Counterapp from "./tasks/Counterapp";
// import Charactercounter from "./tasks/Charactercounter";
// import Login from "./tasks/Login";
// import Header from "./Home/Header";
// import "./Home/Styling.css";
// import About from "./Home/About";
// import Services from "./Home/Services";
// import Projects from "./Home/Projects";
// import Business from "./Home/Business";
// import Pricing from "./Home/Pricing";
// import ClientsTestinomials from "./Home/ClientsTestinomials";
// import Blogs from "./Home/Blogs";
// import Footer from "./Home/Footer";
// import Header1 from "./About/Header1";
// import TeamMembers from "./About/TeamMembers";
// import Footer1 from "./About/Footer1";
// import Header2 from "./Services/Header2";
// import Services1 from "./Services/Services1";
// import Pricing1 from "./Services/Pricing1";
// import Header3 from "./Team/Header3";
// import TeamMembers1 from "./Team/TeamMembers1";
// import Header4 from "./Contact/Header4";
// import Map from "./Contact/Map";
// import Details from "./Contact/Details";
// import Header5 from "./Blog/Header5";
// import BlogDetails from "./Blog/BlogDetails";
// import Routing from "./pratice-tasks/Routing";
// import FirstName from "./pratice-tasks/FirstName";
// import SecondPage from "./pratice-tasks/SecondPage";
// import { ContextProvider } from "./pratice-tasks/Context";
// import SecondComp from "./pratice-tasks/SecondComp";
// import FirstComp from "./pratice-tasks/FirstComp";
// import ThirdComp from "./pratice-tasks/ThirdComp";
import Sidebar from "./Hospital Website/Sidebar";
import Navbar from "./Hospital Website/Navbar";
import Dashboard from "./Hospital Website/Dashboard";
import TestQueue from "./Hospital Website/TestQueue";
import ResultEntry from "./Hospital Website/ResultEntry";
import SampleCollection from "./Hospital Website/SampleCollection";

function App() {
  return (
    <div className="App">
       <div className="app-layout">
        <Sidebar />
        <div className="content">
          <Navbar />
          <main className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/sample-collection" element={<SampleCollection />} />
              <Route path="/results-entry" element={<ResultEntry />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
