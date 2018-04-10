export const isLogged = (state) => {
  if (!state.isLogged) {
    return false
  }

  let auth = JSON.parse(localStorage.getItem('auth'))

  if (!auth) {
    return false
  }

  return auth.expires_in_date > Date.now()
}
