import KakaoLogin from "./assets/kakao_button.png";

const LoginPage = () => {
  const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const handleKakaoLogin = () => {
    window.open(KAKAO_AUTH_URL, "_blank");
  };

  return (
    <div className="container">
      <img
        src={KakaoLogin}
        alt="kakaoLogin"
        onClick={handleKakaoLogin}
        className="kakao-button"
      />
    </div>
  );
};

export default LoginPage;
