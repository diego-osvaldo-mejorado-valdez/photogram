import Axios from "../utils/Axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import endpoints from "../utils/endpoints.js";

const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
const maxDate = `${yyyy}-${mm}-${dd}`;

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });

  const validValue = Object.values(data).every((e) => e);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios({
        ...summaryApi.register,
        data: data,
      });
      if (response.data.error) {
        toast.error(response.data.message);
      }
      if (response.data.success) {
        toast.success(response.data.message);
        setData({
          name: "",
          dob: "",
          email: "",
          password: "",
        });
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="form-container">
      <p className="subtitle">Register</p>
      <form onSubmit={handleSubmit} className="form-dimensions">
        <label htmlFor="name">Name</label>
        <input
          autoFocus
          id="name"
          type="text"
          className="form-input"
          autoComplete="name"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <label htmlFor="dob">DOB</label>
        <input
          id="dob"
          type="date"
          className="form-input"
          autoComplete="off"
          name="dob"
          max={maxDate}
          value={data.dob}
          onChange={handleChange}
        />
        <label htmlFor="newEmail">Email</label>
        <input
          id="newEmail"
          type="email"
          className="form-input"
          autoComplete="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <label htmlFor="newPassword">Password</label>
        <input
          id="newPassword"
          type="password"
          className="form-input"
          autoComplete="off"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
       
          <label>Gender:</label>
          <div className="flex space-x-2">
          <input type="radio" id="male" name="gender" value="male" />
          <label for="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" />
          <label for="female">Female</label>
          <input type="radio" id="other" name="gender" value="other" />
          <label for="other">I'd rather not specify.</label>
        </div>
        <button
          type="submit"
          disabled={!validValue}
          className={`w-full ${
            validValue ? "primary-button" : "blocked-button"
          }`}
        >
          Submit
        </button>
      </form>
      <Link to="/login" className="blue-underline">
        Back to login.
      </Link>
    </div>
  );
}
