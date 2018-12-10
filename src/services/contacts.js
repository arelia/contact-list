export const getContacts = new Promise((resolve, reject) => {
    var data = JSON.stringify(false);

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            resolve(this.responseText)
        }
    });

    xhr.open("GET", "https://shielded-taiga-83845.herokuapp.com/https://lamppoststudios.activehosted.com/api/3/contacts");
    xhr.setRequestHeader("api-token", process.env.REACT_APP_TOKEN);

    xhr.send(data);
})