import axios from 'axios';

// const API_URL = process.env.VUE_APP_API_URL;

class AuthService {
  logout() {
    localStorage.removeItem('user');
  }

  login(user) {
    console.log('login')
    console.log(user)
    console.log(process.env.VUE_APP_API)
    let data = new FormData();
    data.append('username', user.username);
    data.append('email', user.username);
    data.append('password', user.password); 
    return axios.post('usersign/login/', data).then((response) => {
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
    return axios.post('usersign/register/', data);
  }
}

export default new AuthService();