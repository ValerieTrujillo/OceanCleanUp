import axios from "axios";

class UserService {
  static Register(data, onSucess, onError) {
    axios
      .post(`/api/register`, data, { withCredentials: true })
      .then(onSucess)
      .catch(onError);
  }
}
export default UserService;
