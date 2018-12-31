/* entryComponent.js - This module is responsible for taking data,
building out journal entry HTML DOM components and returning those
components. */
// pattern="[A-Za-z(){}}:;0-9"
const entryComponent = {
    name: "Dom Builder Component",

    vdate (style, label, title, type, name, id) {
        return `<fieldset class="${style}">
                    <label for "${label}">${title}</label>
                    <input type="${type}" name="${name}" id ="${id}" required>
                </fieldset>`
    },

     vconcepts (style, label, title, type, name, id, jvalue) {
        return `<fieldset class="${style}">
                    <label for "${label}">${title}</label>
                    <input type="${type}" name="${name}" id ="${id}" required value="${jvalue}" pattern="[A-Za-z(){}}:;0-9">
                </fieldset>`
    },

    ventry (style, title, name, id, jvalue) {
        return `<fieldset class="${style}">           
                <label for "entry">${title}</label>
                <textarea name="${name}" id="${id}" required value="${jvalue}">
                </textarea>
            </fieldset>`
    },

    vmood (style, title, name, id, jvalue) {
        return `<fieldset class="${style}">
         <label for "mood">${title}</label>
         <select name="${name}" id="${id}" required value="${jvalue}">
             <option value=""></option> 
             <option value=""></option><option value="One">One</option>
             <option value="Two">Two</option>
             <option value="Three">Three</option>
             <option value="Four">Four</option>
             <option value="Five">Five</option>
         </select>
         </fieldset>`
    },

    // ventryBtn (type, id, title) {
    //     return `
    //     <button type="${type}" id="${id}">${title}</button>
    //     `
    //     ${entryComponent.ventryBtn("submit", "#entry__save", "Record Journal Entry")}
    // },
    
    makeJournalEntryComponent () {
        return `
            <h1>Daily Journal</h1>
            ${entryComponent.vdate("journalDateStyling containerFieldset", "journalDate", "Date of Entry", "date", "journalDate", "journal__date")}
            ${entryComponent.vconcepts("conceptsStyling containerFieldset", "concepts", "Concepts Covered", "text", "concepts", "journal__concepts", "")}
            ${entryComponent.ventry("entryStyling containerFieldset", "Journal Entry", "entry", "journal__entry", "")}
            ${entryComponent.vmood("moodStyling containerFieldset","Scale of 1 to 5", "mood", "journal__mood", "")}
        `
    },

    appendInputForm () {
        console.log("Hello");
        addForm = entryComponent.makeJournalEntryComponent();
        const container = document.querySelector("#journalForm");
        container.innerHTML = addForm;
        console.log(addForm);
    },
    
    addEventListener () {
        let entryBtn = document.querySelector("#entry__save");
        console.log(entryBtn.innerHTML)
        entryBtn.addEventListener("click", function() {
            entriesDOM.handleFormSubmission();
        });
        console.log("eventListener is added");
    }
}

// const entryComponent = {
//     name: "Dom Builder Component", 
//     vdate () {
//     return `<fieldset class="journalDateStyling containerFieldset">
//                 <label for "journalDate">Date of Entry</label>
//                 <input type="date" name="journalDate" id = "journal__date" value = "">
//             </fieldset>`
//         },    
//     vconcepts () {
//         return `<fieldset class="conceptsStyling containerFieldset">
//                 <label for "concepts">Concepts Covered</label>
//                 <input type="text" name="concepts" id="journal__concepts">
//             </fieldset>`
//         },    
//     ventry () {
//         return `<fieldset class="entryStyling containerFieldset">           
//                 <label for "entry">Journal Entry</label>
//                 <textarea name="entry" id="journal__entry" 
//                 rows="5" columns="40" wrap="hard">
//                 </textarea>
//             </fieldset>`
//         },
//     vmood () {
//            return `<fieldset class="moodStyling containerFieldset">
//             <label for "mood">Scale of 1 to 10</label>
//             <select name="mood" id="journal__mood">
//                 <option value="One">One</option>
//                 <option value="Two">Two</option>
//                 <option value="Three">Three</option>
//                 <option value="Four">Four</option>
//                 <option value="Five">Five</option>
//                 <option value="Six">Six</option>
//                 <option value="Seven">Seven</option>
//                 <option value="Eight">Eight</option>
//                 <option value="Nine">Nine</option>
//                 <option value="Ten">Ten</option>
//               </select>
//             </fieldset>`
//     },
//     appendInputForm () {
//         let jdate = entryComponent.vdate();
//         let jconcepts = entryComponent.vconcepts();
//         let jentry = entryComponent.ventry();
//         let jmood = entryComponent.vmood();
//         let journalComponent = `${jdate} ${jconcepts} ${jentry} ${jmood}`;
//         console.log(journalComponent);
//         let container = document.querySelector("#container");
//         container.innerHTML = journalComponent;
//     }
// }