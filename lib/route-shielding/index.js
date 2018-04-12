import auth from '../auth'

let state = auth.state
const isLogged = auth.getters.isLogged(state)
const loginPage = 'login'
const indexPage = 'index'

const checkOnFamily = (family) => {
  for (let i in family) {
    if (typeof family[i].meta.guarded === 'undefined') {
      continue
    }

    return family[i].meta.guarded
  }

  return false
}

export default (to, from, next) => {
  if (to.name === loginPage) {
    return isLogged ? next({ name: indexPage }) : next()
  }

  let guarded = to.meta.guarded

  if (typeof guarded === 'undefined') {
    guarded = checkOnFamily(to.matched)
  }

  return (!guarded || isLogged) ? next() : next({ name: loginPage })
}
