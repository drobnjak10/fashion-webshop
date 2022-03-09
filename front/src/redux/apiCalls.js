import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import {publicRequest} from '../requestMethods'

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        console.log(res.data.error)
        if(res.data.error) {
            dispatch(loginFailure())
        } else {
            dispatch(loginSuccess(res.data))
        }
    } catch (error) {
        dispatch(loginFailure())
    }
}