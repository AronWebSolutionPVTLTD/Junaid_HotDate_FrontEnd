import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage/Pages/LandingPage";
import Signup from "./Dashboard/Signup_Login/Signup";
import Login from "./Dashboard/Signup_Login/Login";
import Layout from "./Dashboard/Layout";
import HomePage from "./Dashboard/MainDashboard/db_pages/HomePage";
import CreateEventPage from "./Dashboard/MainDashboard/db_pages/CreateEventPage";
import ModelDetailForm from "./Dashboard/MainDashboard/db_pages/ModelDetailForm";
import CreateClubPage from "./Dashboard/MainDashboard/db_pages/CreateClubPage";
import EventPage from "./Dashboard/MainDashboard/db_pages/EventPage";
import ClubPage from "./Dashboard/MainDashboard/db_pages/ClubPage";
import TravelPage from "./Dashboard/MainDashboard/db_pages/TravelPage";
import AgencyTravelPage from "./Dashboard/MainDashboard/db_pages/AgencyTravelPage";
import MembersModels from "./Dashboard/MainDashboard/db_pages/MembersModels";
import LandingLayout from "./LandingPage/LandingLayout";
import ContactPage from "./LandingPage/Pages/ContactPage";
import AboutPage from "./LandingPage/Pages/AboutPage";
import LiveChatPage from "./LandingPage/Pages/LiveChatPage";
import ClubBookingPage from "./LandingPage/Pages/ClubBookingPage";
import ModelBookingPage from "./LandingPage/Pages/ModelBookingPage";
import FaqPage from "./LandingPage/Pages/FaqPage";
import WithdrawlPage from "./LandingPage/Pages/WithdrawlPage";
import UserDetailPage from "./LandingPage/Pages/UserDetailPage";
import CreateTravelPage from "./Dashboard/MainDashboard/db_pages/CreateTravelPage";
import EditUserDetailsPage from "./LandingPage/Pages/EditUserDetailsPage";
import ForgotPage from "./Dashboard/Signup_Login/ForgotPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/live-chat" element={<LiveChatPage />} />
          <Route path="/club-booking" element={<ClubBookingPage />} />
          <Route path="/model-booking" element={<ModelBookingPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/withdraw" element={<WithdrawlPage />} />
          <Route path="/user-detail" element={<UserDetailPage />} />
          <Route path="/edit-detail" element={<EditUserDetailsPage />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/create_event" element={<CreateEventPage />} />
          <Route path="/model_form" element={<ModelDetailForm />} />
          <Route path="/create_club" element={<CreateClubPage />} />
          <Route path="/create_travel" element={<CreateTravelPage />} />
          <Route path="/event-page" element={<EventPage />} />
          <Route path="/club-page" element={<ClubPage />} />
          <Route path="/travel-page" element={<TravelPage />} />
          <Route path="/agency-travel-page" element={<AgencyTravelPage />} />
          <Route path="/member-models" element={<MembersModels />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
