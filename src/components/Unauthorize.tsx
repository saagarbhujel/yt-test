import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.tsx";
const Unauthorized = () => {
    const { auth } = useAuth();
  const navigate = useNavigate();

  const goBack = () =>{
      !auth.accessToken ? navigate("/login") : navigate(-1)
  }

  return (
    <section>
      <h1>Unauthorized</h1>
      <br />
      <p>You do not have access to the requested page.</p>
      <div className="flexGrow">
        <button onClick={goBack}>Go Back</button>
      </div>

    </section>
  );
};

export default Unauthorized;
