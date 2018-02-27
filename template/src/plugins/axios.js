import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios.create({
  baseURL: 'http://localhost:8000/'
}))
