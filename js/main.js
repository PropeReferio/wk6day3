// $('#submitButton').click(function(event){
//     event.preventDefault()
//     let year = $("#yearlap input[name=year]").val()
//     let lap = $("#yearlap input[name=lap]").val()
//     console.log(year, lap)
// })  ^ jQuery stuff that Joel couldn't get to work

// Make two vars for year and lap from form data
 //Change these

function submitForm() {
    let year = document.getElementsByTagName('form')[0].children[0].value;
    let lap = document.getElementsByTagName('form')[0].children[1].value;
    console.log(year, lap);
    $.get(`https://ergast.com/api/f1/${year}/${lap}/driverStandings.json`,function(data){
        let common = data.MRData.StandingsTable.StandingsLists[0] // the parameter 'data'
        // is the JSON file, MRData and everything that follows is what you'd see in the JSON
        // viewer as the file path
        // This is the path to a general part of the database, and we'll 
        // add more to it to get specific data
        // For loop for the table
        for(let i=0; i<8; i++){
            let position = common.DriverStandings[i].position;
            let name = common.DriverStandings[i].Driver.givenName;
            let nationality = common.DriverStandings[i].Driver.nationality;
            let sponsor = common.DriverStandings[i].Constructors[0].name;
            let points = common.DriverStandings[i].points;

            // Input Data into Table
            $("#position" + i.toString()).text(position);
            $("#driverName" + i.toString()).text(name);
            $("#nationality" + i.toString()).text(nationality);
            $("#sponsor" + i.toString()).text(sponsor);
            $("#points" + i.toString()).text(points);
        }
    })

}

// $.get(raceurl, function (data){
//     $("tr").get(1)$("td").get( 4 ).html(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points);
// });

/*
Using Jquery and the DOM you create a table of data using the F1 racer 
API. The table should have a total of 7 rows and dynamically populate 
the data when a "year" and "lap" are specified within your form. */


//For this assignment, we were not taught how to do JS or jQuery for loops,
//How to add to an HTML element what we took from the database,
// And Joel struggled to make it happen himself.