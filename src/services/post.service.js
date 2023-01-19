import {axiosService} from "./axios.service";
import {urls} from "./urls";




const userPost = {
    getAllPost: (id) => axiosService.get(`${urls.users}/${id}/posts`)
}

export {
    userPost
}