module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'https://parked-iot-project.herokuapp.com/',
  }
}
