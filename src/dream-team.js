const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName = "";
members.sort();
members.forEach(element => {
    if (typeof(element) === "string"){
        element = element.trim(' '); 
        element = element.toUpperCase();
        teamName += element[0];
    } else {
        
    }
});

  return teamName;

};
