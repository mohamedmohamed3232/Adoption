/**
 * Java Script that uses a for loop to have all the states added in the drop down menu
 */

 let states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE",
 "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY",
 "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT",
 "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH",
 "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT",
 "VT", "VA", "WA", "WV", "WI", "WY"]

$(document).ready(function(){
// Using a for loop to iterate through the states for end user to select
for (var i=0; i<states.length; i++) {
$("select").append("<option value =" + states[i] + ">" + states[i] + "</option>");
}
});