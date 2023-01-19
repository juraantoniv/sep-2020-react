import {axiosService} from "./axios.service";
import {urls} from "./urls";




const userComments = {
    getAllComments: (id) => axiosService.get(`${urls.posts}/${id}/comments`)
}

export {
    userComments
}