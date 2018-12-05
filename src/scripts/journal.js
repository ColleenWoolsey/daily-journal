const journalEntries = [
    {

        date: "2018-11-27",
        concepts: "Array methods",
        entry: "Felt hopeful ... like catching up was possible",
        out_of_ten: "Seven"
    },
    {
        date: "2018-11-28",
        concepts: "Array methods",
        entry: "Distracted by K's problems",
        out_of_ten: "Six"
    },
    {
        date: "2018-11-29",
        concepts: "Array methods",
        entry: "Hours and hours of teaching today. Overview good, but hard to say how much was assimilated. Hard to stay awake. Few questions asked.",
        out_of_ten: "Five"
    }
]
const vdate = function(style, jDate) {
return `<fieldset class="${style}">
            <label for "date">Date of Entry</label>
            <input type="date" name="date" id = "journalDate" value="${jDate}">
        </fieldset>`
}

const vconcepts = function(style, jconcepts) {
    return `<fieldset class="${style}">
            <label for "concepts">Concepts Covered</label>
            <input type="text" name="concepts" id="concepts" value="${jconcepts}">
        </fieldset>`
}
 {}
const ventry = function(style, jcontent) {
    return `<fieldset class="${style}">           
            <label for "entry">Journal Entry</label>
            <textarea name="entry" id="journalEntry" 
            rows="5" columns="40" wrap="hard">"${jcontent}"
            </textarea>
        </fieldset>`
}


    const vten = function(style, mood) {
       return `<fieldset class="${style}">
        <label for "out_of_ten">Scale of 1 to 10</label>
        <select name="out_of_ten" id="mypick" value="${mood}">
            <option>Current Value: ${mood}</option>
            <option value="One">One</option>
            <option value="Two">Two</option>
            <option value="Three">Three</option>
            <option value="Four">Four</option>
            <option value="Five">Five</option>
            <option value="Six">Six</option>
            <option value="Seven">Seven</option>
            <option value="Eight">Eight</option>
            <option value="Nine">Nine</option>
            <option value="Ten">Ten</option>
          </select>
        </fieldset>`
}

const makeJournalEntryComponent = function(date, concepts, entry, out_of_ten) {
    return `<article>
        <h1>Daily Journal</h1>
        ${vdate("dateStyling", date)}
        ${vconcepts("conceptStyling", concepts)}
        ${ventry("entryStyling", entry)}
        ${vten("scaleStyling", out_of_ten)}
</article>`
}

const container = document.querySelector("#container");

    journalEntries.forEach(function(journalEntry) {
    let entryComponent = "";
    entryComponent = makeJournalEntryComponent(journalEntry.date, journalEntry.concepts, journalEntry.entry, journalEntry.out_of_ten)
   
    let addJournalEntries = document.createElement('article');
    addJournalEntries.innerHTML = entryComponent;
    document.querySelector('div').appendChild(addJournalEntries);

    console.log(entryComponent)
});



// const renderJournalEntries = (entries) => {
//     let entryComponent = "";
//     document.createElement('article');
//     renderJournalEntries.innerHTML = entryComponent;
//     document.createElement('article').appendChild(renderJournalEntries);
// } document.querySelector('form')
// renderJournalEntries(journalEntries)
  

// Purpose: To render all journal entries to the DOM
// Arguments: entries (array of objects)
// const renderJournalEntries = (entries) => { }

// // Invoke the render function
// renderJournalEntries(journalEntries)

// varDate.classList.add("another-class");
// varDate.classList.remove("another-class");
// varDate.classList.toggle("another-class"); //(switch on and off)

// let anylink = document.querySelector("a");
// anylink.getAttribute("href");
//!!!! Attributes only exist on single elements - need to loop

// let anyimgage = document.querySelector("img");
// anyimage.setAttribute("src", "newimage.png")

// can use [] index property after any selector also
// length but no loop

// If document.query a ul and ask for textcontent you get a
// node list of the text that is between the <li>. If ask for inner.HTML
// you get <li>stuff</li>

// console.log(journalEntries.indexOf("anytext"))
// gives me index of that search item if found and 
// if not returns -1 - works for "text" arrays
// for arrrays of objects ...
//journalEntires.findIndex(function(entry, index) {
//   console.log(entry)
//   return journalEntries.concepts === "Array Methods" });
// console.log(index)

 

   