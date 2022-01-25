import axios from 'axios';

const API_URL = 'https://parked-iot-project.herokuapp.com/';

class AuthService {
  // constructor(endpoint="") {

  //   if (!endpoint) {
  //     this.endpoint = "";
  //   }
  //   this.endpoint = endpoint;
  // }

  // login(user) {
  //   return axios
  //     .post(API_URL + 'usersign/login', {
  //       username: user.username,
  //       password: user.password
  //     })
  //     .then(response => {
  //       if (response.data.accessToken) {
  //         localStorage.setItem('user', JSON.stringify(response.data));
  //       }

  //       return response.data;
  //     });
  // }

  logout() {
    localStorage.removeItem('user');
  }

  register(data) {
    return axios.post(API_URL + 'usersign/register/', data);
  }
}

export default new AuthService()