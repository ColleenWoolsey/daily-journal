const data = {
    name: "Fetch Calls",
    
    saveJournalEntry (entryObject) {
        fetch("http://localhost:3000/entries", {
            method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObject)
        });
    },

    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },
    queryJournalEntries(userInput) {
        return fetch(`http://localhost:3000/entriess?q=${userInput}`)
            .then(response => response.json());
    }
};


// Below is an example configuration for launching your
// API when Grunt starts. In this configuration, the API
// will be listening on port 8088. It will watch
// (the -w flag) the file database.json. Make sure the
// path is correct when you add yor configuration file.
// The path is always relative from the directory in which
// you typed the grunt command.
// src/lib/grunt/bgShell.js

// ???? Needs another ../ ?????

// module.exports = {
//     launchAPI: {
//         cmd: "json-server -p 8088 -w ../../api/database.json"
//     },
//     _defaults: {
//         bg: true
//     }
// }