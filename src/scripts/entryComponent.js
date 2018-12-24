/* entryComponent.js - This module is responsible for taking data,
building out journal entry HTML DOM components and returning those
components. */

const entryComponent = {
    name: "Dom Builder Component",

    vdateAndConcepts (style, label, title, type, name, id) {
        return `<fieldset class="${style}">
                    <label for "${label}">${title}</label>
                    <input type="${type}" name="${name}" id ="${id}">
                </fieldset>`
    },

    ventry (style, title, name, id) {
        return `<fieldset class="${style}">           
                <label for "entry">${title}</label>
                <textarea name="${name}" id="${id}" rows="5" columns="40" wrap="hard">
                </textarea>
            </fieldset>`
    },

    vmood (style, title, name, id) {
        return `<fieldset class="${style}">
         <label for "mood">${title}</label>
         <select name="${name}" id="${id}">
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
    },

    makeJournalEntryComponent () {
        return `<article>
            <h1>Daily Journal</h1>
            ${entryComponent.vdateAndConcepts("journalDateStyling containerFieldset", "journalDate", "Date of Entry", "date", "journalDate", "journal__date")}
            ${entryComponent.vdateAndConcepts("conceptsStyling containerFieldset", "concepts", "Concepts Covered", "text", "concepts", "journal__concepts")}
            ${entryComponent.ventry("entryStyling containerFieldset", "Journal Entry", "entry", "journal__entry")}
            ${entryComponent.vmood("moodStyling containerFieldset","Scale of 1 to 10", "mood", "journal__mood")}
        </article>`
    }
};

entryComponent.makeJournalEntryComponent();
addForm = entryComponent.makeJournalEntryComponent();
let container = document.querySelector("#container");
container.innerHTML = addForm;
console.log(addForm);

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