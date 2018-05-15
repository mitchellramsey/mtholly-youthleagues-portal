import axios from "axios";

export default {
  // Gets all kids
  retrieveChildren: function(id) {
    return axios.get("/api/retrieveChildren/" + id);
  }
}