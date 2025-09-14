import axios from 'axios';
const _url = process.env.NEXT_PUBLIC_BASE_URL;

export const refreshAccessToken = async (): Promise<string | null> => {
  const refreshToken = localStorage.getItem('refresh-token');
  if (!refreshToken) return null;

  try {
    const response = await axios.post(`${_url}/auth/refresh`, null, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    const newAccessToken = response.data?.access_token;
    if (newAccessToken) {
      localStorage.setItem('access-token', newAccessToken);
      return newAccessToken;
    }

    return null;
  } catch (error) {
    console.error('Refresh token failed:', error);
    return null;
  }
};
