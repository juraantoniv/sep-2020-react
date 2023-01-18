import {axiosService} from "./axios.service";
import {urls} from "./urls";


const userService = {
    getAll: () => axiosService.get(urls.users)
}


export {
    userService,
}