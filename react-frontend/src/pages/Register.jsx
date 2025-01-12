import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault(); // prevent page reload
    alert(`The name you entered was: ${username}`);

    if (password1 !== password2) {
      alert("The passwords do not match");
    } else {
      
      try {
        const res = await api.post("/api/user/register/", {
          "username": username,
          "password": password1,
          "first_name": firstName,
          "last_name": lastName,
          "email": email,
      });
        alert("Registered Successfully!")
        navigate("/login");

      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    }


  }

  return (
    <>
        <>
          <h1>Registration Page...</h1>

          <form method="POST" onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <p>
              Required. 150 characters or fewer. Letters, digits and @/./+/-/_
              only.
            </p>

            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Last Name" value={lastName} onChange={(e) => setLastname(e.target.value)} />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="Password" value={password1} onChange={(e) => setPassword1(e.target.value)}/>
            </label>
            <p>
              Your password can&apos;t be too similar to your other personal<br/>
              information. Your password must contain at least 8 characters.<br/>
              Your password can&apos;t be a commonly used password.<br/>
              Your password can&apos;t be entirely numeric.<br/>
            </p>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Confirm Password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </label>
            <p>Enter the same password as before, for verification.</p>
            <br/>

            {loading && <h1>Loading...</h1>}    
            {/* Loading animation/icon */}
            <button type="submit" className="btn btn-active btn-primary">Submit</button>
          </form>
        </>
    </>
  );
};

export default Register;


// import { useState } from "react";
// import api from "../api";
// import { useNavigate } from "react-router-dom";
// import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

// function Form({ route, method }) {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const name = method === "login" ? "Login" : "Register";

//     const handleSubmit = async (e) => {
//         setLoading(true);
//         e.preventDefault();

//         try {
//             const res = await api.post(route, { username, password })
//             if (method === "login") {
//                 localStorage.setItem(ACCESS_TOKEN, res.data.access);
//                 localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
//                 navigate("/")
//             } else {
//                 navigate("/login")
//             }
//         } catch (error) {
//             alert(error)
//         } finally {
//             setLoading(false)
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="form-container">
//             <h1>{name}</h1>
//             <input
//                 className="form-input"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Username"
//             />
//             <input
//                 className="form-input"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//             />
//             {loading && <LoadingIndicator />}
//             <button className="form-button" type="submit">
//                 {name}
//             </button>
//         </form>
//     );
// }

// export default Form