// A user enters the website and finds a list of the names, dates, times, locations, and descriptions of all the parties that are happening.
// Next to each party in the list is a delete button. The user clicks the delete button for one of the parties. That party is then removed from the list.
// There is also a form that allows the user to enter information about a new party that they want to schedule. After filling out the form and submitting it, the user observes their party added to the list of parties.


function createEventTableRow(event){
    const tr = document.createElement('tr');

    const nameData = document.createElement('td');
}

function getEvents(){
    fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events')
        .then(response => response.json())
        .then(data => {
            
            console.log(data);
        })

}

// getEvents();