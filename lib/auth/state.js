export default {
  isLogged: (() => {
    return Boolean(localStorage.getItem('isLogged') || false)
  })()
}
