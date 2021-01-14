import { createStore } from "redux"
import { connect } from "./reducers/userReducer"

export default createStore(connect)
