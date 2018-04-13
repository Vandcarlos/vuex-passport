import auth from '../auth'

let state = auth.state
const isLogged = auth.getters.isLogged(state)

const checkOnFamily = (family) => {
  for (let i = 0; i < family.length - 1; i++) {
    if (typeof family[i].meta.guarded === 'undefined') {
      continue
    }
    return family[i].meta.guarded
  }

  return false
}

const shield = (to, from, next) => {
  if (to.name === this.a.loginPage) {
    return isLogged ? next({ name: this.a.indexPage }) : next()
  }

  let guarded = to.meta.guarded

  if (typeof guarded === 'undefined') {
    guarded = checkOnFamily(to.matched)
  }

  return (!guarded || isLogged) ? next() : next({ name: this.a.loginPage })
}

export default {
  loginPage: 'login',
  indexPage: 'index',
  shield: shield
}
