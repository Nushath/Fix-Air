import { Route, Routes } from "react-router-dom";

import Homepage from "./components/pages/home/Homepage";
import Login from "./components/pages/login/Login";
import Booking from "./components/pages/booking/Booking";
import Register from "./components/pages/register/Register";
import BookingResults from "./components/pages/booking-results/BookingResults";
import Navbar from "./components/pages/navbar/Navbar";
import SeatSelection from "./components/pages/seat-selection/SeatSelection";
import Payment from "./components/pages/payment/Payment";
import CancelPage from "./components/pages/cancel/CancelPage";
import Ticket from "./components/pages/ticket/Ticket";

function App() {
  return (    
    <div className="App">
    <Navbar />
      <Routes> 
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
      <Routes>
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking-results" element={<BookingResults />} />
          <Route path="/seat-selection" element={<SeatSelection />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cancel" element={<CancelPage />} />
          <Route path="/ticket" element={<Ticket />} />
          
        </Routes>
    </div>
  );
}

export default App;
