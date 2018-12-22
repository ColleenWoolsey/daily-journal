//Direction of flow is outside to inside

const data = {
    name: "Fetch Call",
    
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },
    queryJournalEntries(userInput) {
        return fetch(`http://localhost:3000/entriess?q=${userInput}`)
            .then(response => response.json());
    }
};