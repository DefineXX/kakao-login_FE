import React, { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  // localStorage에서 초기값 로드
  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedUsername = localStorage.getItem("username");

    if (storedAccessToken) {
      setAccessToken(storedAccessToken);

      // localStorage에 accessToke이 존재할 때만 username 처리하도록
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }
  }, []);

  // 상태 변경 시 localStorage에 저장
  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    } else {
      localStorage.removeItem("");
    }

    if (username) {
      localStorage.setItem("username", username);
    } else {
      localStorage.removeItem("username");
    }
  }, [accessToken, username]);

  return (
    <AuthContext.Provider
      value={{ accessToken, username, setAccessToken, setUsername }}
    >
      {children}
    </AuthContext.Provider>
  );
};
