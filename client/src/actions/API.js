// Imports
import axios from "axios";

// ---------------------------------------------------------------
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
    const data = {
      name: sport
    }
    return axios.post("/api/postsport", data);
  },

  getSports: function() {
    return axios.get("/api/getsport");
  },

  createTeam: function(teamData) {
    return axios.post("/api/teams", teamData);
  },

  findKids: function(sportId) {
    return axios.get("/api/assignChildren/" + sportId);
  },

  findCoaches: function(sportId) {
    return axios.get("/api/assignCoach/" + sportId);
  },

  findTeams: function(sportId) {
    return axios.get("/api/findteams/" + sportId);
  },

  assignPlayer: function(data) {
    return axios.put("/api/children", data);
  },

  assignCoach: function(data) {
    return axios.put("/api/coach", data);
  },

  retrieveKidInfo: function(kidId) {
    return axios.get("/api/kidInfo/" + kidId);
  }
}