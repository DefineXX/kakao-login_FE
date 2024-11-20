import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Redirect = () => {
  const location = useLocation();

  //   const queryParams = new URLSearchParams(location.search);
  const AUTH_CODE = new URLSearchParams(location.search).get("code");
  console.log(AUTH_CODE);

  useEffect(() => {
    const postAuthCode = async () => {
      try {
        const response = await axios.post(
          `http://localhost:8080/callback`,
          AUTH_CODE,
          {
            "Content-Type": "application/x-www-form-urlencoded",
          }
        );

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    postAuthCode();
  }, [AUTH_CODE]);

  return (
    <div>
      <h1>로그인 중입니다.</h1>
    </div>
  );
};

export default Redirect;
