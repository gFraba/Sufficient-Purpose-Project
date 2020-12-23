const form = document.querySelector("#citySearch");
form.addEventListener("submit", async function(e){
    e.preventDefault();
    const searchTerm = form.elements.city.value;
    const res = await axios.get(`https://data.orghunter.com/v1/charitysearch?user_key=97ac173d954429b3489985f63bec642f&city=${searchTerm}`);
    results(res.data)
})

const results = (orgs) => {
    for (let result of orgs) {
        const par = document.createElement('p');
        par.src = result.charityName;
        document.body.append(par)
    }
}