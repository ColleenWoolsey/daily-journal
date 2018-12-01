const journalEntries = [
    {

        journalDate: "2018-11-27",
        concepts: "Array methods",
        journalEntry: "Felt hopeful ... like catching up was possible",
        out_of_ten: "Seven"
    },
    {
        journalDate: "2018-11-28",
        concepts: "Array methods",
        journalEntry: "Distracted by K's problems",
        out_of_ten: "Six"
    },
    {
        journalDate: "2018-11-29",
        concepts: "Array methods",
        journalEntry: "Hours and hours of teaching today. Overview good, but hard to say how much was assimilated. Hard to stay awake. Few questions asked.",
        out_of_ten: "Five"
    }
]
const vdate = function(style, jDate) {
return `<fieldset class="${style}">
            <label for "journalDate">Date of Entry</label>
            <input type="date" name="journalDate" id = "journalDate" value="${jDate}">
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
            <label for "journalEntry">Journal Entry</label>
            <textarea name="journalEntry" id="journalEntry" 
            rows="5" columns="40" wrap="hard">"${jcontent}"</textarea>
        </fieldset>`
}  //listen for a keypress event on textarea?????

const vten = function(style, jmood ) {
    return `<fieldset class="${style}">
    <label for "out_of_ten">Scale of 1 to 10</label>
    <select name="out_of_ten" id="outOfTen" size="3">
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

const buildit = function(journalDate, concepts, journalEntry, out_of_ten) {
    return `<div class="container">
        <form action="index.html" method="post">
        <h1>Daily Journal</h1>
        ${vdate("dateStyling", journalDate)}
        ${vconcepts("conceptStyling", concepts)}
        ${ventry("entryStyling", journalEntry)}
        ${vten("scaleStyling", out_of_ten)}
        </form>
    </div>`
}
console.log(buildit)

let container = document.querySelector("#container");

journalEntries.forEach(function(entry) {
let entryComponent = "";
entryComponent = buildit(entry.journalDate, entry.concepts, entry.journalEntry)
container.innerHTML = entryComponent;

const newdiv = document.createElement('div');
newdiv.innerHTML = entryComponent;
document.querySelector('body').appendChild(newdiv);

console.log(entryComponent)
});

            // const studentf = function(name, course, info) {
            // return `<div id="student">
            //     ${h1(name, "xx-large failing")}
            //     ${section(course, "section--padded")}
            //     ${aside(info, "pushRight")}
            // </div>`
            // }

            // let container = document.querySelector("#container");

            // students.forEach(function(student) {
            // let studentComponent = "";
            // if (student.score >= 60) {
            // studentComponent = studentp(student.name, student.course, student.info);
            // container.innerHTML = studentComponent;

            // const newdiv = document.createElement('div');
            // newdiv.innerHTML = studentComponent;
            // document.querySelector('body').appendChild(newdiv);
            
            // console.log(studentComponent)
            // } else {
            //     studentComponent = studentf(student.name, student.course, student.info);
            //     container.innerHTML = studentComponent;

            //     const newdiv = document.createElement('div');
            //     newdiv.innerHTML = studentComponent;
            //     document.querySelector('body').appendChild(newdiv);

            //     console.log(studentComponent)
            // }
            // });

// let varDate = document.querySelector("#journalDate");
// varDate.addEventListener("click", function() {
// console.log(varDate);
// });

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


// const makeJournalEntryComponent = (journalEntry) {
// return `${varDate} ${varConcepts} ${varEntry} ${varOutOfTen}`
// }


// journalEntries.forEach(entry => {
//     console.log(makeJournalEntryComponent(entry))
    