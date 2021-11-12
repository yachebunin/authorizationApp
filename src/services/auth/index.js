import Vue from 'vue'

const state = new Vue({
  data: {
    isAuthenticated: !!localStorage.getItem('refreshToken')
  }
})

export function login (data) {
  localStorage.setItem('accessToken', data.accessToken)
  // eslint-disable-next-line no-prototype-builtins
  if (data.hasOwnProperty('refreshToken')) {
    localStorage.setItem('refreshToken', data.refreshToken)
  }
  state.isAuthenticated = true
}

export function isAuthenticated () {
  return state.isAuthenticated
}

export function logOut (refresh = true) {
  if (refresh) window.location.reload(false)

  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  state.isAuthenticated = false
}

export function getAccessToken () {
  return localStorage.getItem('accessToken')
}

export function getRefreshToken () {
  return localStorage.getItem('refreshToken')
}
