// // Coding Ranks

const codingCard = document.querySelectorAll('.coding-card');

// Codechef
let url = `https://competitive-coding-api.herokuapp.com/api/${codingCard[0].dataset.platform}/${codingCard[0].dataset.username}`
fetch(url)
    .then(data => data.json())
    .then(json => {
        codingCard[0].querySelector('.rating').textContent = json.highest_rating;
        codingCard[0].querySelector('.rank').textContent = json.country_rank;
        codingCard[0].querySelector('.solved').textContent = json.fully_solved.count + json.partially_solved.count;
    })

// Leetcode
url = `https://competitive-coding-api.herokuapp.com/api/${codingCard[1].dataset.platform}/${codingCard[1].dataset.username}`
console.log(url);
fetch(url)
    .then(data => data.json())
    .then(json => {
        codingCard[1].querySelector('.rating').textContent = json.rating;
        codingCard[1].querySelector('.rank').textContent = json.country_rank;
        codingCard[1].querySelector('.solved').textContent = json.fully_solved.count + json.partially_solved.count;
    })

// Codeforces
url = `https://competitive-coding-api.herokuapp.com/api/${codingCard[2].dataset.platform}/${codingCard[2].dataset.username}`
fetch(url)
    .then(data => data.json())
    .then(json => {
        codingCard[2].querySelector('.rating').textContent = json.rating;
        codingCard[2].querySelector('.rank').textContent = json.rank;
    })

// Hackerrank
url = `https://competitive-coding-api.herokuapp.com/api/${codingCard[3].dataset.platform}/${codingCard[3].dataset.username}`
fetch(url)
    .then(data => data.json())
    .then(json => {
        codingCard[3].querySelector('.rating').textContent = json.rating;
        codingCard[3].querySelector('.rank').textContent = json.rank;
    })