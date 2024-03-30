// import {data} from '../restApi.json'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Reservation = () => {
  const [loading, setLoading] = useState(false);
  const intitalUser = {
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    phone: "",
    time: "",
  };
  const [user, setuser] = useState(intitalUser);
  const navigate = useNavigate();
  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { ...user },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false,
        }
      );
      console.log({ data });
      toast.success(data.message);
      setuser(intitalUser);
      navigate("/success");
    } catch (err) {
      console.log({ err });
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="Reservation" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1 className="heading">Make a reservation</h1>
            <p>For Further Questions Please Call</p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={user.firstName}
                  required
                  onChange={(e) =>
                    setuser({ ...user, firstName: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  value={user.lastName}
                  onChange={(e) =>
                    setuser({ ...user, lastName: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={user.date}
                  onChange={(e) => setuser({ ...user, date: e.target.value })}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={user.time}
                  onChange={(e) => setuser({ ...user, time: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={user.phone}
                  onChange={(e) => setuser({ ...user, phone: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) => setuser({ ...user, email: e.target.value })}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                onClick={handleReservation}
              >
                RESERVE NOW
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
