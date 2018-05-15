import axios from "axios";

export default {
  // Gets all books
  retrieveChildren: function(id) {
    return axios.get("/api/retrieveChildren/" + id);
  }
}