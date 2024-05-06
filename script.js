//team member data

const teamMembers = [
    {
        name: 'Insert Name',
        age: NaN,
        role: 'Insert Role',
        strengths: 'Insert Strengths',
        weaknesses: 'Insert Weaknesses',
        skills: ['Insert Skill 1', 'Insert Skill 2', 'Insert Skill 3'],
        alive: true,
        allegiance: ''
    }
]

//card generation
function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards')
    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-12', 'col-md-6', 'col-lg-4')
        card.innerHTML = `
        <div class="card">
            <div class="card-header">
                ${member.name}
            </div>
            <div class="card-body">
                <p>Age: ${member.age}</p>
            </div>
        </div>`
        teamCardsContainer.appendChild(card)
    });

}

window.onload = generateTeamCards()