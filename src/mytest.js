
let members = [
    'Amelia',
    null,
    undefined,
    'Ruby',
    'Lily',
    11,
    'Grace',
    22,
    'Millie',
    'Daisy',
    true,
    'Freya',
    false,
    'Erin',
    new Set([1,2,3,4,5]),
    'Megan',
    {
      'John': 'Smith'
    },
    'Jasmine',
    1,
    2,
    3,
    4,
    5,
    'Brooke',
  ];
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

console.log(teamName);