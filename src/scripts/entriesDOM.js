// entriesDOM.js - This module is responsible for appending
//  DOM components to the DOM
const entriesDOM = {
    name: "Appending to DOM",

    handleFormSubmission() {     
    console.log("Button was clicked")

    let jdate = document.querySelector("#journal__date").value;
    console.log(jdate);
           
    let jconcepts = document.querySelector("#journal__concepts").value;
    console.log(jconcepts);
    
    let jentry = document.querySelector("#journal__entry").value;
    console.log(jentry);
    
    let jmood = document.querySelector("#journal__mood").value;
    console.log(jmood);
        
    let entryObject = {
      "journalDate": jdate,
      "concepts": jconcepts,
      "entry": jentry,
      "mood": jmood
    }
    console.log(entryObject)
    // Post to API 
    data.saveJournalEntry(entryObject);
    }
}



    // searchJournalEntries() {        
    //     data.getJournalEntries()
    //     .then(entriesArray => {
    //     console.table(entriesArray);
        
    //     entriesArray.forEach(journalEntry => { 
    //        // if ( user input for whatever search field = ??? {})       
    //         let ec = entryComponent.makeJournalEntryComponent(journalEntry.date, journalEntry.concepts, journalEntry.entry, journalEntry.out_of_ten)
    //         let addJournalEntries = document.createElement('article');
    //         addJournalEntries.innerHTML = ec;
    //         document.querySelector("div").appendChild(addJournalEntries);
    //         console.log(ec);   
    //     });
    // });        
    // }
  

// How to create a button, add a class and attach an event listener using createElement.
// let newButton = document.createElement("button");
// newButton.classList.add("aclass");
// newButton.addEventListener("click", eventListeners.handleFormSubmission);
// console.log(newButton);
// displayContainer.appendChild(newButton);
// }