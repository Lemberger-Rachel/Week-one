//Title
const helloTitle = document.createElement('header');
helloTitle.innerText = 'Epidemiology Report';
document.body.appendChild(helloTitle);

//A list that I got
let locationsList = [
    { patientId: 1, locationdetails: { startDay: '10/10/2020', EndDay: '11/10/2020', city: "Jerusalem", location: "super market" } },
    { patientId: 2, locationdetails: { startDay: '12/10/2022', EndDay: '15/10/2022', city: "Tel-Aviv", location: "park" } },
    { patientId: 3, locationdetails: { startDay: '10/10/2012', EndDay: '11/10/2012', city: "Ramat-Gan", location: "school" } },
    { patientId: 4, locationdetails: { startDay: '10/10/2016', EndDay: '10/10/2016', city: "Yafo", location: "school" } },
    { patientId: 5, locationdetails: { startDay: '10/10/2015', EndDay: '10/10/2015', city: "Tel-Aviv", location: "park" } },
    { patientId: 6, locationdetails: { startDay: '10/10/2020', EndDay: '11/10/2020', city: "Jerusalem", location: "super market" } },
    { patientId: 6, locationdetails: { startDay: '12/10/2022', EndDay: '15/10/2022', city: "Tel-Aviv", location: "park" } },
    { patientId: 3, locationdetails: { startDay: '10/10/2012', EndDay: '11/10/2012', city: "Ramat-Gan", location: "school" } },
    { patientId: 6, locationdetails: { startDay: '10/10/2016', EndDay: '10/10/2016', city: "Yafo", location: "school" } },
    { patientId: 6, locationdetails: { startDay: '10/10/2015', EndDay: '10/10/2015', city: "Tel-Aviv", location: "park" } },
    { patientId: 6, locationdetails: { startDay: '12/10/2022', EndDay: '15/10/2022', city: "Tel-Aviv", location: "park" } },
    { patientId: 3, locationdetails: { startDay: '10/10/2012', EndDay: '11/10/2012', city: "Ramat-Gan", location: "school" } },
    { patientId: 4, locationdetails: { startDay: '10/10/2016', EndDay: '10/10/2016', city: "Yafo", location: "school" } },
    { patientId: 5, locationdetails: { startDay: '10/10/2015', EndDay: '10/10/2015', city: "Tel-Aviv", location: "park" } },
    { patientId: 1, locationdetails: { startDay: '10/10/2020', EndDay: '11/10/2020', city: "Jerusalem", location: "super market" } },
    { patientId: 2, locationdetails: { startDay: '12/10/2022', EndDay: '15/10/2022', city: "Tel-Aviv", location: "park" } },
    { patientId: 3, locationdetails: { startDay: '10/10/2012', EndDay: '11/10/2012', city: "Ramat-Gan", location: "school" } },
    { patientId: 4, locationdetails: { startDay: '10/12/2016', EndDay: '10/12/2016', city: "Yafo", location: "school" } },
    { patientId: 5, locationdetails: { startDay: '10/10/2015', EndDay: '10/10/2015', city: "Tel-Aviv", location: "park" } }, { patientId: 1, locationdetails: { startDay: '10/10/2020', EndDay: '11/10/2020', city: "Jerusalem", location: "super market" } },
    { patientId: 2, locationdetails: { startDay: '12/10/2022', EndDay: '15/10/2022', city: "Tel-Aviv", location: "park" } },
    { patientId: 3, locationdetails: { startDay: '10/10/2012', EndDay: '11/10/2012', city: "Ramat-Gan", location: "school" } },
    { patientId: 4, locationdetails: { startDay: '10/10/2016', EndDay: '10/10/2016', city: "Yafo", location: "school" } },
    { patientId: 5, locationdetails: { startDay: '10/10/2015', EndDay: '10/10/2015', city: "Tel-Aviv", location: "park" } },
    { patientId: 6, locationdetails: { startDay: '11/05/2017', EndDay: '11/05/2017', city: "Tel-Aviv", location: "school" } }];

// Writes the names of the columns
let listNamesForColumns = Object.keys(locationsList[0].locationdetails);

function styleTable(table) {
    table.style.textAlign = "center";
    table.setAttribute("id", "personTable");
    table.style.width = '50%';
    table.setAttribute('border', '1');
    table.style.borderColor = "red";
    table.setAttribute('cellspacing', '0');
    table.setAttribute('cellpadding', '5');
}
//Build the table according to the variables entered
function createTable(locationsList) {
    if (locationsList.length > 0) {
        var b = document.getElementsByTagName("body")[0];
        var table = document.createElement("table");
        styleTable(table);
        var col = [];
        var numberOfProperties = Object.keys(locationsList[0].locationdetails).length;
        var tHead = document.createElement("thead");
        var hRow = document.createElement("tr");
        for (let i = 0; i < numberOfProperties; i++) {
            var th = document.createElement("th");
            th.innerHTML = listNamesForColumns[i].charAt(0).toUpperCase() + listNamesForColumns[i].slice(1);
            hRow.appendChild(th);
        }
        tHead.appendChild(hRow);
        table.appendChild(tHead);
        var tBody = document.createElement("tbody");
        for (var i = 0; i < locationsList.length; i++) {
            var bRow = document.createElement("tr");
            currentRowValues = Object.values(locationsList[i].locationdetails);
            for (var item of currentRowValues) {
                var td = document.createElement("td");
                td.style.width = "50px";
                td.innerHTML = item;
                bRow.appendChild(td);
            }
            tBody.appendChild(bRow);
        }
        table.appendChild(tBody);
        b.appendChild(table);
    }
}

//Call to build the table
createTable(locationsList);

//Button of search a Specific city
const buttonSearch = document.getElementById('Search-City');

//Input of search table
const inputSearch = document.getElementById('nameOfCity');

//Button of refresh table
const refresh = document.getElementById('refresh');

//Refresh the table
refresh.addEventListener('click', function () {
    document.getElementById("personTable").remove();
    createTable(locationsList);
}
);

//When a user types a city for searching, the list is only shown to that city
inputSearch.addEventListener('mouseleave', function () {
    buttonSearch.addEventListener('click', function () {
        //Variable that hendle which city user want to check 
        const valueOfInput = document.getElementById('nameOfCity').value;
        inputSearch.value = "";
        let item;
        let flag = 0;
        if (valueOfInput != "") {
            var i = 0;
            //Variable that hendle all the person table
            const city = document.getElementById('personTable');
            for (var r = 1, index = 1, n = city.rows.length; index < n; r++, index++) {
                item = city.rows[r].cells[2].innerHTML;

                if (item === valueOfInput) {
                    flag = 1;
                }
                else {
                    document.getElementById("personTable").deleteRow(r);
                    r--;
                }
            }
            if (flag === 0) {
                document.getElementById("personTable").remove();
                createTable(locationsList);
                //    alert("Check City Spelling");
            }
        }
        else {
            // alert("Enter name of city");
        }
    });
});

//convert Date
function convertDate(d) {
    var p = d.split("/");
    return +(p[2] + p[1] + p[0]);
}

//Sort a table By Date
function sortByDate() {
    var tbody = document.querySelector("#personTable tbody");
    // get trs as array for ease of use
    var rows = [].slice.call(tbody.querySelectorAll("tr"));
    rows.sort(function (a, b) {
        return convertDate(a.cells[0].innerHTML) - convertDate(b.cells[0].innerHTML);
    });
    rows.forEach(function (v) {
        tbody.appendChild(v); // note that .appendChild() *moves* elements
    });
}
document.querySelector("button").addEventListener("click", sortByDate);


