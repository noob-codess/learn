window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})
const functionAPI = 'http://localhost:7071/api/GetCount';
const getVisitCount = () => {
    let count = 30;
    fetch(functionAPI).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called Function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}
