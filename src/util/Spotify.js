const client_id = "a3ad6940f4664f17aadb4906e0d0a8e8";
const redirect_uri = "http://localhost:3000";
const spotify_url = `https://accounts.spotify.com/authorize?response_type=token&scope=playlist-modify-public&client_id=${client_id}&redirect_uri=${redirect_uri}`;
let accessToken = undefined;
let expiresIn = undefined;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

    if (urlAccessToken && urlExpiresIn) {
      accessToken = urlAccessToken[1];
      expiresIn = urlExpiresIn[1];
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
    } else {
      window.location = spotify_url;
    }
  },
};

export default Spotify;
