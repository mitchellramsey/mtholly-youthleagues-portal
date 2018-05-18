import axios from "axios";

export default {
  // Gets all kids
  retrieveChildren: function(id) {
    return axios.get("/api/retrieveChildren/" + id);
  },

  //Delete a child 
  removeChild: function(id) {
    return axios.delete("/api/children/" + id);
  },

  //Create a sport
  addSport: function(sport) {
    return axios.post("/api/postsport");
  },

  getSports: function() {
    return axios.get("/api/getsport");
  }
}