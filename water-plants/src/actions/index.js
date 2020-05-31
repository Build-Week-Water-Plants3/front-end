import { axiosWithAuth } from "../util/axiosWithAuth";

export const PostRegister = (data) => {
    return dispatch => {
        axiosWithAuth()
            .post("auth/register", data)
            .then(res => {
                console.log(res.data)
                dispatch({ type: "POST_REGISTER", payload: res.data })
            })
            .catch(err => console.log("Error!!!", err));
    }
}