// Make two vars for year and lap from form data
 //Change these

function submitForm() {
    let year = document.getElementsByTagName('form')[0].children[0].value;
    let lap = document.getElementsByTagName('form')[0].children[1].value;
    console.log(raceurl);
}
// Make a formatted string that is the url
let raceurl = `https://ergast.com/api/f1/${year}/${lap}/driverStandings.json`;

console.log(raceurl);
// $.get(raceurl, function (data){
//     $("tr").get(1)$("td").get( 4 ).html(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points);
// });

/*
Using Jquery and the DOM you create a table of data using the F1 racer 
API. The table should have a total of 7 rows and dynamically populate 
the data when a "year" and "lap" are specified within your form. */