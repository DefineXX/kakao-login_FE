import apiClient from "./apiClient";

export async function refreshAccessToken(): Promise<string> {
  try {
    const response = await apiClient.post("/auth/refresh-token", {
      refreshToken: localStorage.getItem("refreshToken"),
    });

    const newAccessToken = response.data.accessToken;
    return newAccessToken;
  } catch (error) {
    console.error("Token update fail: ", error);
  }

  throw new Error("Token update fail");
}
