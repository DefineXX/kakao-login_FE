import axios from "axios";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Redirect = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  const AUTH_CODE = new URLSearchParams(location.search).get("code");
  console.log(AUTH_CODE);

  useEffect(() => {
    if (!isFirstRender.current) return;
    isFirstRender.current = false;

    const postAuthCodeToServer = async () => {
      try {
        const response = await axios.post(
          `http://13.125.173.168:8080/auth/login`,
          {
            social_provider: "Kakao",
            authorization_code: AUTH_CODE,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.data);
      } catch (error) {
        console.log("Authorization Code Post Error", error);
      }
    };

    postAuthCodeToServer();
  }, [AUTH_CODE]);

  return (
    <div>
      <h1>로그인 중입니다.</h1>
    </div>
  );
};

export default Redirect;
