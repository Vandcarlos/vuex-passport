import auth from '../auth'

const checkOnFamily = (family) => {
  for (let i = 0; i < family.length - 1; i++) {
    if (typeof family[i].meta.guarded !== 'undefined') {
      return family[i].meta.guarded
    }
  }

  return false
}

export default (login, index) => {
  if (typeof login === 'undefined') {
    login = 'login'
  }

  if (typeof index === 'undefined') {
    index = 'index'
  }

  return (to, from, next) => {
    let isLogged = auth.getters.isLogged(auth.state)

    if (to.name === login) {
      return isLogged ? next({ name: index }) : next()
    }

    let guarded = to.meta.guarded

    if (typeof guarded === 'undefined') {
      guarded = checkOnFamily(to.matched)
    }

    return (!guarded || isLogged) ? next() : next({ name: login })
  }
}
