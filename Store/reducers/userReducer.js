const initialState = { connexion: { name: "" } }

function connect(state = initialState, action) {
  let nextState
  switch (action.type) {
    case "CONNEXION":
      nextState = { name: "Hasitiana" }
      return nextState
      break

    default:
      break
  }
  return nextState
}
