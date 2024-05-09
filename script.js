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
        image: 'imgs/placeholder.jpg'
    },
    {
        name: 'Insert Name',
        age: NaN,
        role: 'insert role2',
        strengths: 'Insert Strengths',
        weaknesses: 'Insert Weaknesses',
        skills: ['Insert Skill 1', 'Insert Skill 2', 'Insert Skill 3'],
        alive: true,
        image: 'imgs/placeholder.jpg'
    }
]

//card generation
function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards')
    let i = 0
    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-12', 'col-md-6', 'col-lg-4')
        card.setAttribute("id", `card-container${i}`)

        //style card based on role
        let backgroundColor
        switch (member.role.toLowerCase()) {
            case 'insert role':
                backgroundColor = 'red'
                break
            case 'insert role2':
                backgroundColor = 'blue'
                break
        }



        card.innerHTML = `
        <div class="card h-100" id="card${i}" onmouseover="flipCard(${i})"">
            <div class="text-center">
                <h1>${member.name}</h1>
                <img src="${member.image}" class="w-100">
            </div>
        </div>`

        for (let i = 0; i < card.children.length; i++) {
            card.children[i].style.backgroundColor = backgroundColor
        }

        teamCardsContainer.appendChild(card)
        i = i + 1
    });
}

window.onload = generateTeamCards()

function flipCard(cardNumber) {
    document.getElementById(`card-container${cardNumber}`).classList.add('flip-card')
    document.getElementById(`card-container${cardNumber}`).classList.remove('unflip-card')
    document.getElementById(`card${cardNumber}`).setAttribute("onmouseover", "")
    document.getElementById(`card${cardNumber}`).setAttribute("onmouseleave", `unflipCard(${cardNumber})`)
    const member = teamMembers[cardNumber]
    setTimeout(() => {
        document.getElementById(`card${cardNumber}`).innerHTML = `
            <div class="card-header">
                Name: ${member.name}
            </div>
            <div class="card-body">
                <p>Age: ${member.age}</p>
            </div>`
    }, 1000);
}

function unflipCard(cardNumber) {
    document.getElementById(`card-container${cardNumber}`).classList.remove('flip-card')
    document.getElementById(`card-container${cardNumber}`).classList.add('unflip-card')
    document.getElementById(`card${cardNumber}`).setAttribute("onmouseleave", "")
    document.getElementById(`card${cardNumber}`).setAttribute("onmouseover", `flipCard(${cardNumber})`)
    const member = teamMembers[cardNumber]
    setTimeout(() => {
    document.getElementById(`card${cardNumber}`).innerHTML = `
        <div class="text-center">
            <h1>${member.name}</h1>
            <img src="${member.image}" class="w-100">
        </div>`
    }, 1000);
}