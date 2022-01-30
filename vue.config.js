module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'https://parked-iot-client.herokuapp.com/',
  }
}
