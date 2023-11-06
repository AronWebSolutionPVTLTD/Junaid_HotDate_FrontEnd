import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import ClubDetail from './components/Club/ClubDetail';
import ClubDetailMedia from './components/Club/ClubDetailMedia';
import CreateClubPage from './components/Club/CreateClubPage';
import EditClubPage from './components/Club/EditClubPage';
import CreateEventPage from './components/Event/CreateEventPage';
import EditEventPage from './components/Event/EditEventPage';
import EventDetailMedia from './components/Event/EventDetailMedia';
import EventDetailPage from './components/Event/EventDetailPage';
import EventParticipants from './components/Event/EventParticipants';
import Myevents from './components/Event/Myevent';
import Main_Layout from './components/Layout/HOME/Layout/Main_Layout';
import { Layout } from './components/Layout/Layout';
import CoupleEditDetailPage from './components/Profile/Edit/CoupleEditDetailsPage';
import EditUserDetailsPage from './components/Profile/Edit/EditUserDetailsPage';
import SignUpCouple from './components/Profile/SignUpCouples';
import SinglePerson from './components/Profile/SinglePerson';
import EmailVerified from './components/Profile/Verification/EmailVerified';
import VerifyEmail from './components/Profile/Verification/VerifyEmail';
import CreateTravelPage from './components/Travel/CreateTravelPage';
import EditTravelPage from './components/Travel/EditTravelPage';
import MyTravel from './components/Travel/MyTravel';
import CurrentlyOnUser from './components/Users/CurrentlyOnUser';
import MyFriends from './components/Users/MyFriends';
import Receivedrequest from './components/Users/Receivedrequest';
import RecentUser from './components/Users/RecentUser';
import SendFriendrequest from './components/Users/SendFriendrequest';
import UserDetailId from './components/Users/UserDetailId';
import AboutPage from './pages/AboutPage';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Register';
import ClubPage from './pages/ClubPage';
import ContactPage from './pages/ContactPage';
import EventPage from './pages/EventPage';
import FaqPage from './pages/FaqPage';
import { Home } from './pages/Landing/Home';
import LiveChatPage from './pages/Landing/LiveChat';
import Main_Home from './pages/Main_Home';
import TravelPage from './pages/TravelPage';
import UserDetailPage from './pages/UserDetailPage';
import { loadUser } from './redux/actions/auth';
import { LOGOUT } from './redux/actions/types';
import store from './redux/store';
import setAuthToken from './utils/setAuthToken';
import NotFound from './pages/NotFound';
function App() {
const {isAuthenticated} = useSelector((state)=>state.auth);
let location = useLocation();
const { pathname } = location;
useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);
  useEffect(() => {
    const token = localStorage.token
    if (token) {
      setAuthToken(token);    
    }
    store.dispatch(loadUser());

    window.addEventListener('storage', () => {
      if (!token){ 
        store.dispatch({ type: LOGOUT });
      }
    });
  }, []);


  return (
    <>
    <Routes>
    <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
   <Route path="/about" element={<Layout><AboutPage /></Layout>} />
   <Route path="live-chat" element={<Layout><LiveChatPage /></Layout>} />
   <Route path="/faq" element={<Layout><FaqPage /></Layout>} />
    
    <Route path='/' element={<Layout><Home/></Layout>} />
    <Route path="signup" element={<Layout><Signup /> </Layout>} />
   <Route path="login" element={<Layout><Login /></Layout>} />
   <Route path="forgot" element={<Layout><ForgotPassword /></Layout>} />
   <Route path="/single/:userId" element={<SinglePerson/>} />
   <Route path="/couple/:userId" element={<SignUpCouple/>} />
   <Route path="/verify_email" element={<Layout><VerifyEmail/></Layout>} />
   <Route path="/verified/:id" element={<Layout><EmailVerified/></Layout>} />
   <Route path="/forgot" element={<Layout><ForgotPassword/></Layout>} />
 
{/* USER  */}
<Route path="/user-detail" element={<Layout><UserDetailPage /></Layout>} />
<Route path="/user-detail/:id" element={<Layout><UserDetailId /></Layout>} />
<Route path="/edit-detail" element={<Layout><EditUserDetailsPage /></Layout>} />
<Route path="editcouple-detail" element={<Layout><CoupleEditDetailPage/></Layout>}/>

<Route path='/' element={<Main_Layout/>}>

{/* HOME */}
<Route path='/home' element={<Main_Home/>} />

{/* EVENTS */}
<Route path="/event-page" element={<EventPage />} />
<Route path="/create_event" element={<CreateEventPage />} />
<Route path="/event_edit/:id" element={<EditEventPage />} />
<Route path='/event-detail/:id' element={<EventDetailPage/>} />
<Route path="/event-detail-media" element={<EventDetailMedia />} />
<Route path="/my-event" element={<Myevents/>} />
<Route path="/event-participants" element={<EventParticipants />} />

{/* CLUBS */}
<Route path="/club-page" element={<ClubPage />} />
<Route path="/create_club" element={<CreateClubPage />} />
<Route path="/club-detail/:id" element={<ClubDetail />} />
<Route path="/club-detail-media" element={<ClubDetailMedia/>}/>
<Route path="/editclubpage/:clubId" element={<EditClubPage />} />


{/* TRAVEL */}
<Route path="/travel-page" element={<TravelPage />} />
<Route path="/my-travel" element={<MyTravel/>}/>
<Route path="/create_travel" element={<CreateTravelPage />} />
<Route path="/edit_travel/:travelid" element={<EditTravelPage />} />

{/* USER: FRIENDS */}
<Route path="/recentuser" element={<RecentUser />} />
<Route path="/my_friends" element={<MyFriends/>} />
<Route path="/received_request" element={<Receivedrequest />} />
<Route path="/send_request" element={<SendFriendrequest/>} />
<Route path="/currentuser" element={<CurrentlyOnUser />} />

</Route>
   </Routes>
   
    </>
  )
}

export default App



// const {user} = useSelector((state)=>state.auth);
// const [userInfo,setUserInfo]=useState(user);
// useEffect(()=>{
//   setUserInfo(user)
// },[])