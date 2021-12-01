var index = function() {

    var commentsData =  [];
    function getApi() {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((data) => data.json())
        .then((json) => loadValue(json));
    }
    function loadValue(json) {
        commentsData = json;
        let gallery = document.getElementsByClassName('gallery')[0];
        console.log(gallery);
        var cards = '';
        for (let item of json) {
            let card = `<div class='card'> 
            <h3 class = 'cardHeader'>${item.name} </h3> 
            <div class = 'cardText'>${item.email} </div> 
            <div class= 'cardContent'>${item.body}</div>
            </div>`;
            cards += card;
        }
        
        gallery.innerHTML = cards;
    }
    getApi();

    function log(numberOfClicks, methodname = 'method'){
        console.log(methodname+ "--" + numberOfClicks);
    }
    function loadSortImage(sortStatus) {
        let sortIcon = document.querySelector(".sort i");
        sortIcon.className = `fa fa-arrow-${sortStatus}`;
    }
    function compareFun(a, b) {
        if (a.email > b.email) {
            return 1;
        } else if (a.email < b.email) {
            return -1;
        } else {
            return 0;
        }
    }
    function sort(sortStatus) {
        if (sortStatus == 'up') {
            return commentsData.sort((a, b) => b.email.localeCompare(a.email));

        } else {
            return commentsData.sort((a, b) => a.email.localeCompare(b.email));

        }
       
    }

    //eventlisteners

   
    
    let sortButton = document.getElementById("sort");
    let filterButton = document.getElementById("filter");

    let numberOfClicks = 0;
    let numberOfFilterClicks = 0;

    sortButton.addEventListener("click", function(){
        numberOfClicks++;
        let sortStatus = numberOfClicks %2 == 0 ? 'up' : 'down';
        loadSortImage(sortStatus);

        loadValue(sort(sortStatus));
        log(numberOfClicks);
    }, false);

    filterButton.addEventListener("click", function(){
        numberOfFilterClicks++;
        log(numberOfFilterClicks, "filter");
    }, false);
    
}();