// entriesDOM.js - This module is responsible for appending
//  DOM components to the DOM
const entriesDOM = {
    name: "Appending to DOM",

    renderJournalEntries() {
        data.getJournalEntries()
        .then(entriesArray => {
        console.table(entriesArray);
        
        entriesArray.forEach(journalEntry => {        
            let ec = entryComponent.makeJournalEntryComponent(journalEntry.date, journalEntry.concepts, journalEntry.entry, journalEntry.out_of_ten)
            let addJournalEntries = document.createElement('article');
            addJournalEntries.innerHTML = ec;
            document.querySelector("div").appendChild(addJournalEntries);
            console.log(ec);   
        });
    });        
    }
}   

// How to create a button, add a class and attach an event listener using createElement.
// let newButton = document.createElement("button");
// newButton.classList.add("aclass");
// newButton.addEventListener("click", eventListeners.handleFormSubmission);
// console.log(newButton);
// displayContainer.appendChild(newButton);
// }