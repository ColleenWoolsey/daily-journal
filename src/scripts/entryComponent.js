/* entryComponent.js - This module is responsible for taking data,
building out journal entry HTML DOM components and returning those
components. */

const entryComponent = {
    name: "Dom Builder Component",
      
    vdate (style, jDate) {
    return `<fieldset class="${style}">
                <label for "date">Date of Entry</label>
                <input type="date" name="date" id = "journalDate" value="${jDate}">
            </fieldset>`
    },

    vconcepts (style, jconcepts) {
        return `<fieldset class="${style}">
                <label for "concepts">Concepts Covered</label>
                <input type="text" name="concepts" id="concepts" value="${jconcepts}">
            </fieldset>`
    },

    ventry (style, jcontent) {
        return `<fieldset class="${style}">           
                <label for "entry">Journal Entry</label>
                <textarea name="entry" id="journalEntry" 
                rows="5" columns="40" wrap="hard">"${jcontent}"
                </textarea>
            </fieldset>`
    },

    vten (style, mood) {
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
    },

    makeJournalEntryComponent (date, concepts, entry, out_of_ten) {
        return `<article>
            <h1>Daily Journal</h1>
            ${entryComponent.vdate("dateStyling", date)}
            ${entryComponent.vconcepts("conceptStyling", concepts)}
            ${entryComponent.ventry("entryStyling", entry)}
            ${entryComponent.vten("scaleStyling", out_of_ten)}
        </article>`
    }

} /* End of 5 function entryComponent object */