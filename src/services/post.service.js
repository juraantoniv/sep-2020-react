import {axiosService} from "./axios.service";




const userPost = {
    getAllPost: (id) => axiosService.get(`urls.users/${id}/posts`)
}

export {
    userPost
}