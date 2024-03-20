let quoteDisplayEl = document.getElementById("quoteDisplay");

let url = "https://apis.ccbp.in/random-quote";
let option = {
    method: "GET"
};
fetch(url, option)
    .then(function(resposne) {
        return resposne.json();
    })
    .then(function(jsonData) {
        let data = jsonData.content;
        quoteDisplayEl.textContent = data;
        function countWords(data) {
            data = data.trim();
            if (data === "") {
                return 0;
            }
            let words = data.split(/\s+/);
            return words.length;
        }
         let wordCount = countWords(data);
    




let spinnerEl = document.getElementById("spinner");
spinnerEl.classList.remove("d-none");
let imageEl = document.getElementById("image");
imageEl.classList.add("d-none");
let spanEl = document.getElementById("span");
spanEl.classList.add("d-none");

let timerEl = document.getElementById("timer");
let count = 1;
let uniqueNo1 = setInterval(function() {
    spanEl.classList.remove("d-none");
    imageEl.classList.remove("d-none");
    spinnerEl.classList.add("d-none");
    timerEl.textContent = count;
    count += 1;
}, 1000);

let quoteInputEl = document.getElementById("quoteInput");
let sumbitBtnEl = document.getElementById("submitBtn");
let resultEl = document.getElementById("result");


sumbitBtnEl.addEventListener("click", function() {
    if (quoteInputEl.value === "" || quoteInputEl.value !== quoteDisplayEl.textContent) {
        resultEl.textContent = "You Typed incorrect sentence";
    } else {
        count = count - 1;
        clearInterval(uniqueNo1);
        resultEl.textContent = "You typed "+ wordCount +" Words in "+ count + "Seconds";
    }
});
        });

let resetBtnEl = document.getElementById("resetBtn");


resetBtnEl.addEventListener("click", function() {
    quoteInputEl.value = "";
    resultEl.textContent = "";
    clearInterval(uniqueNo1);
    count = 0;
    setInterval(function() {
        timerEl.textContent = count;
        count += 1;
    }, 1000);
    let url = "https://apis.ccbp.in/random-quote";
    let option = {
        method: "GET"
    };
    fetch(url, option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            quoteDisplayEl.textContent = jsonData.content;
        });

});

