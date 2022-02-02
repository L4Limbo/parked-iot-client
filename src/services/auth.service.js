import axios from 'axios';

const API_URL = 'https://parked-iot-project.herokuapp.com/'

class AuthService {
  logout() {
    localStorage.removeItem('user');
  }

  login(user) {
    console.log('login')
    console.log(user)
    let data = new FormData();
    data.append('username', user.username);
    data.append('email', user.username);
    data.append('password', user.password); 
    return axios.post(API_URL + 'usersign/login/', data).then((response) => {
      console.log(response)
      if(response.data.token) {
        var user = {
          username: data.get('username'),
          password: data.get('password'),
          token: response.data.token
        }
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }    
    }).catch((err) => {
      return {status: 'fail', error: err}
    })
  }

  register(data) {
    return axios.post(API_URL + 'usersign/register/', data);
  }
}

export default new AuthService();