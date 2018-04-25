export const login = ({ commit }, data) => {
  data.expires_in_date = data.expires_in + Date.now()
  localStorage.setItem('auth', JSON.stringify(data))
  commit('LOGIN')
}

export const jwtLogin = ({ commit }, data) => {
  let token = data.token
  let tokenInfo = token.split('.')
  let timestamp = JSON.parse(atob(tokenInfo[1]))

  data.expires_in_date = timestamp.exp * 1000
  localStorage.setItem('auth', JSON.stringify(data))
  commit('LOGIN')
}

export const logout = ({ commit }) => {
  localStorage.removeItem('auth')
  commit('LOGOUT')
}
