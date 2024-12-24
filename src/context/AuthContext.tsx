import { createContext, Dispatch, SetStateAction } from "react";

interface AuthContextType {
  accessToken: string | null;
  username: string | null;
  setAccessToken: Dispatch<SetStateAction<string | null>>;
  setUsername: Dispatch<SetStateAction<string | null>>;
}

export const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  username: null,
  setAccessToken: () => {},
  setUsername: () => {},
});
