import axios from 'axios';

const API_URL = 'https://parked-iot-project.herokuapp.com/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'usersign/login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    alert("ok")
    return axios.post(API_URL + 'usersign/register', {
      username: user.email,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService()