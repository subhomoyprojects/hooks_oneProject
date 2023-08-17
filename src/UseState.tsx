import { FormEventHandler, useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);
  const [registration, setRegistration] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submittedData, setSubmittedData] = useState<{
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  } | null>(null);
  let onchangeHandler = (event: any) => {
    const { name, value } = event.target;
    setRegistration((prevRegistration) => ({ ...prevRegistration, [name]: value }));
  };
  let registrationSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setSubmittedData({ ...registration });
  };
  return (
    <>
      <div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>+</button>
          <button onClick={() => (count === 0 ? setCount(0) : setCount((count) => count - 1))}>-</button>
          <p>{count}</p>
        </div>
      </div>
      <div>
        <div className="registration-form">
          <h1>Registration</h1>
          <form onSubmit={registrationSubmit}>
            <div>
              <input type="text" name="fullName" placeholder="Full Name" value={registration.fullName} onChange={onchangeHandler} />
            </div>
            <div>
              <input type="email" name="email" placeholder="Email" value={registration.email} onChange={onchangeHandler} autoComplete="off" />
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" value={registration.password} onChange={onchangeHandler} autoComplete="off" />
            </div>
            <div>
              <input type="password" name="confirmPassword" placeholder="Confirm Password" value={registration.confirmPassword} autoComplete="off" onChange={onchangeHandler} />
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
          {/* Both are same */}
          {submittedData && (
            <div>
              <h2>Submitted Data:</h2>
              <p>Full Name: {submittedData.fullName}</p>
              <p>Email: {submittedData.email}</p>
            </div>
          )}
          {/* {submittedData ? (
            <div>
              <h2>Submitted Data:</h2>
              <p>Full Name: {submittedData.fullName}</p>
              <p>Email: {submittedData.email}</p>
            </div>
          ) : null} */}
        </div>
      </div>
    </>
  );
}
