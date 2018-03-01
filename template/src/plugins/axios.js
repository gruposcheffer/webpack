import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8000/'
})

Vue.use(VueAxios, http)

export default http
