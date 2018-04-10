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

export const authObject = () => {
  return JSON.parse(localStorage.getItem('auth'))
}

export const access_token = () => {
  return authObject().access_token
}