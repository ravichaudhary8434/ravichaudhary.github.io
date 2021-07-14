PROJECT_DATA = [
    {'title': 'QwikAppoint', 'image': 'https://raw.githubusercontent.com/malhotraravi842/qwikAppoint/main/static/images/qwikappoint.jpg', 'date': 'JUNE 2021', 'platform': 'VS Code', 'source': 'https://github.com/malhotraravi842/qwikAppoint.git', 'summary': 'Website for booking appointment with any doctor or Organization.'},
    {'title': 'Instagram Frontend Clone', 'image': 'https://raw.githubusercontent.com/malhotraravi842/instagram_clone/main/public/assets/insta_ss1.jpg', 'date': 'APRIL 2021', 'platform': 'VS Code', 'source': 'https://github.com/malhotraravi842/instagram_clone.git', 'summary': 'Developed a Instagram clone in React.js after learning React.'},
    {'title': 'Meme Stream', 'image': 'https://raw.githubusercontent.com/malhotraravi842/XMeme/main/XMeme.jpg', 'date': 'JAN 2021', 'platform': 'VS Code', 'source': 'https://github.com/malhotraravi842/XMeme.git', 'summary': 'A Simple Social Website & REST API for Sharing Memes.'},
    {'title': 'Tic Tac Toe', 'image': 'images/tictactoe.jpg', 'date': 'NOV 2020', 'platform': 'VS Code', 'source': 'https://malhotraravi842.github.io/javaScript_TicTacToe/', 'summary': 'I\'ve created a Tic Tac Toe Game using HTML, CSS and JavaScript to Enhance my JavaScript Skills.'},
    {'title': 'World Clock', 'image': 'images/worldclock.png', 'date': 'NOV 2020', 'platform': 'VS Code', 'source': 'https://github.com/malhotraravi842/worldtime_flutter-app', 'summary': 'Created a World time clock using which we can see the exact time of that country. I\'ve usedFlutter framework and Dart Programming languague to create this application.'},
    {'title': 'Admission Forum Website', 'image': 'images/admissionForum.jpg', 'date': 'OCT 2020', 'platform': 'VS Code', 'source': 'https://malhotraravi842.github.io/admission_forum_project/', 'summary': 'Built a static Website for the company called Admission Forum Pvt. Ltd. Used HTML, CSS & JavaScript for the Frontend part. Connected the HTML Form with Google Spreadsheeet using Google AppScript. Used Github for the Version Control.'},
    {'title': '#JavaScript30', 'image': 'images/javascript30.png', 'date': 'AUG 2020', 'platform': 'VS Code', 'source': 'https://github.com/malhotraravi842/30DaysOfJavaScript', 'summary': 'I\'ve taken this 30 Days of JavaScript Challenge and Learn to build lot of Things using HTML,CSS and JavaScript. Example - Animated Clock, HTML Canvas etc.'},
    {'title': 'Url Shortner', 'image': 'images/urlshortner.png', 'date': 'JUN 2020', 'platform': 'VS Code', 'source': 'https://github.com/malhotraravi842/url_shortner.git', 'summary': 'Created a Url Shortner which we can use to short a big URL in a shortest form. I\'ve used Python\'s Django Framework and Some Python Libraries to redirect the short link to the original link.'},
]


const project_card = document.querySelector('.project-container .row');

PROJECT_DATA.forEach(project => {
    project_card.innerHTML += `<div class="project-card col-xl-3 col-lg-5 col-md-5 col-sm-12">
    <div class="img">
        <img src="${project.image}" alt="">
        <div class="date">${project.date}</div>
    </div>
    <div class="detail">
        <h2>${project.title}</h2>
        <div class="summary">
            <p>
                ${project.summary}
            </p>
        </div>
        <div class="bottom">
            <p class="p-box">Platform: <strong>${project.platform}</strong></p>
            <a class="p-box" target="_blank"
                href="${project.source}">See Project</a>
        </div>
    </div>
</div>`;
});