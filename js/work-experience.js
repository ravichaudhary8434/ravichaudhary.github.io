EXPERIENCE_DATA = [
    {'title': 'Web Developer Intern', 'date': 'May 2021 - Present', 'employer': 'Binding Bharat', 'summary': 'Developing, optimizing and maintaining the websites and applications utilizing HTML, CSS, JavaScript, jQuery and various APIs to meet my clients needs and goals.'},
    {'title': 'Campus SuperHero', 'date': 'May 2022 - Present', 'employer': 'Coding Blocks', 'summary': `<li>Representative of placement cell of BCE Bhagalpur.</li> <li>Promoting Coding Blocks courses, events & bootcamps on social media & oncampus.</li> <li>Conducting various workshops, webinars & online hackathons in college campus.</li> <li>Managed Several Programming contests on HackerBlocks.</li> <li>Recieved Certificate of Appreciation from Coding Blocks for organizing various online workshops in the month of AUG 2020.</li>`},
]


const work = document.querySelector('.work-timeline');

EXPERIENCE_DATA.forEach(experience => {
    work.innerHTML += `<li>
    <div class="timeline-icon">
        <i class="fa fa-briefcase"></i>
    </div>
    <div class="timeline-label">
        <h3>${experience.title}</h3>
        <div class="date">
            <i class="fa fa-calendar"></i>
            ${experience.date}
        </div>
        <h4><i class="fa fa-flag"></i>${experience.employer}</h4>
        <p class="work-summary">
        <ul>
            ${experience.summary}    
        </ul>
        </p>
    </div>
</li>`
});