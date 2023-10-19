import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
import ModelPage from "./Dashboard/MainDashboard/db_pages/ModelPage";
import WishlishtPage from "./Dashboard/MainDashboard/db_pages/WishlishtPage";
import EventDetailPage from "./LandingPage/Pages/EventDetailPage";
import EditClubPage from "./Dashboard/MainDashboard/db_pages/EditClubPage";
import { useContext, useEffect } from "react";
import EditEventPage from "./Dashboard/MainDashboard/db_pages/EditEventPage";
import VerifyEmail from "./Dashboard/Signup_Login/VerifyEmail";
import EmailVerified from "./Dashboard/Signup_Login/EmailVerified";
import SinglePersonSignUp from "./Dashboard/Signup_Login/singlePersonsign";
import SignUpCouple from "./Dashboard/Signup_Login/SignUpCouples";
import CoupleDetailPage from "./LandingPage/Pages/CoupleDetailPage";
import Myevents from "./Dashboard/MainDashboard/db_components/Myevent";
import CoupleEditDetailPage from "./LandingPage/Pages/CoupleEditDetailsPage";
import EventDetailMedia from "./LandingPage/Pages/EventDetailMedia";
import EventParticipants from "./Dashboard/MainDashboard/db_pages/EventParticipants";
import ClubDetail from "./LandingPage/Pages/ClubDetail";
import ClubDetailMedia from "./LandingPage/Pages/ClubDetailMedia";
import MyTravel from "./Dashboard/MainDashboard/db_components/MyTravel";
import UserDetailId from "./LandingPage/Pages/UserDetailId";
import CoupleDetailId from "./LandingPage/Pages/CoupleDetailid";
import EditTravelPage from "./Dashboard/MainDashboard/db_pages/EditTravelPage";
import RecentUser from "./Dashboard/MainDashboard/db_components/RecentUser";
import { Context } from "./Context/context";
import axios from "axios";

import { useCookies } from "react-cookie";
import CurrentlyOnUser from "./Dashboard/MainDashboard/db_components/CurrentlyOnUser";

function App() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const location = useLocation();
  const{userInfo,UserToken  }=useContext(Context)
  const { pathname } = location;
  const navigate=useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


// useEffect(()=>{
// if(userInfo._id){
//     getAPi()}
//   },[userInfo,UserToken])


//   const getAPi=async()=>{
//     const config = {
//       'headers':{
//         'token':UserToken
//       }
//     };

//     try{
//     const {data}=await axios.get(`${BASE_URL}/api/active/${userInfo?._id}`,config
//       )


//     }catch(err){
//       console.log(err)
//       removeCookie("token");
//  }  
// }
  
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
          <Route path="/verify_email" element={<VerifyEmail />} />
          <Route path="/verified/:id" element={<EmailVerified />} />
          <Route path="/withdraw" element={<WithdrawlPage />} />
          <Route path="/user-detail" element={<UserDetailPage />} />
          <Route path="/user-detail/:id" element={<UserDetailId />} />
          <Route path="/couple-detail-id" element={<CoupleDetailId />} />
          <Route path="/edit-detail" element={<EditUserDetailsPage />} />
          <Route path="editcouple-detail" element={<CoupleEditDetailPage/>}/>
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/single" element={<SinglePersonSignUp />} />
        <Route path="/couple" element={<SignUpCouple />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/model_form" element={<ModelDetailForm />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/recentuser" element={<RecentUser />} />
          <Route path="/currentuser" element={<CurrentlyOnUser />} />
          <Route path="/edit_travel" element={<EditTravelPage />} />
          <Route path="/create_event" element={<CreateEventPage />} />
          <Route path="/event_edit" element={<EditEventPage />} />
          <Route path="/editclubpage" element={<EditClubPage />} />
          <Route path="/create_club" element={<CreateClubPage />} />
          <Route path="/create_travel" element={<CreateTravelPage />} />
          <Route path="/event-page" element={<EventPage />} />
          <Route path="/event-detail" element={<EventDetailPage />} />
          <Route path="/club-detail" element={<ClubDetail />} />
          <Route path="/event-detail-media" element={<EventDetailMedia />} />
          <Route path="/club-detail-media" element={<ClubDetailMedia/>}/>
          <Route path="/club-page" element={<ClubPage />} />
          <Route path="/event-participants" element={<EventParticipants />} />
          <Route path="/my-event" element={<Myevents/>} />
          <Route path="/my-travel" element={<MyTravel/>}/>
          <Route path="/travel-page" element={<TravelPage />} />
          <Route path="/model-page" element={<ModelPage />} />
          <Route path="/agency-travel-page" element={<AgencyTravelPage />} />
          <Route path="/member-models" element={<MembersModels />} />
          <Route path="/wishlist" element={<WishlishtPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
