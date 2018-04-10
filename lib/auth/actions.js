export const login = ({ commit }, data) => {
  data.expires_in_date = data.expires_in + Date.now()
  localStorage.setItem('auth', JSON.stringify(data))
  commit('LOGIN')
}

export const logout = ({ commit }) => {
  localStorage.removeItem('auth')
  commit('LOGOUT')
}
