import axios from 'axios';

const API_URL = 'https://parked-iot-project.herokuapp.com/';

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
      if(response.data.token) {
        var user = {
          username: data.get('username'),
          password: data.get('password'),
          token: response.data.token
        }
        console.log('here')
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user));
        console.log('there')
        return user;
      }    
    }).catch((err) => {
      return err
    })
  }

  register(data) {
    return axios.post(API_URL + 'usersign/register/', data);
  }
}

export default new AuthService();