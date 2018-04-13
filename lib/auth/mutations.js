export const LOGIN = (state) => {
  state.isLogged = true
  localStorage.setItem('isLogged', true)
}

export const LOGOUT = (state) => {
  state.isLogged = false
  localStorage.setItem('isLogged', false)
}
