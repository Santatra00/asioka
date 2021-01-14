function reducerUser(state, action) {
  let nextState

  switch (action) {
    case "CONNECTION":
      nextState = {
        ...state,
        profil: action.value
      }
      return nextState
      break
    case "REGISTER":
      return nextState
      break

    default:
      break
  }
}
