//team member data

const teamMembers = [
    {
        name: 'Zeus',
        classification: 'Olympic',
        title: 'King Of The Gods',
        domains: ['Lightning', 'Sky', 'Order'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Hades',
        classification: 'Chthonic',
        title: 'King Of The Dead',
        domains: ['The Dead', 'The Underworld', 'Funerals'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Poseidon',
        classification: 'Olympic',
        title: 'King Of The Oceans',
        domains: ['Water', 'Storms', 'Horses'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Nyx',
        classification: 'Chthonic',
        title: 'Personification Of Night',
        domains: ['Night', 'Darkness'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Hera',
        classification: 'Olympic',
        title: 'Queen Of The Gods',
        domains: ['Marriage', 'Womanhood', 'Family'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Demeter',
        classification: 'Olympic',
        title: 'The Fruitbearer',
        domains: ['Harvest', 'Fertility of the Earth', 'The Seasons'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Hestia',
        classification: 'Olympic',
        title: 'Keeper Of Hearth And Home',
        domains: ['The Hearth', 'Sacred Fire', 'Family'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Artemis',
        classification: 'Olympic',
        title: 'Personification Of The Hunt',
        domains: ['Hunting', 'Wildlife', 'Nature'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Ares',
        classification: 'Olympic',
        title: 'Battle Incarnate',
        domains: ['War', 'Courage', 'Bloodlust'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Athena',
        classification: 'Olympic',
        title: 'Protector Of The People',
        domains: ['Wisdom', 'Strategy', 'Virginity'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Hermes',
        classification: 'Olympic',
        title: 'Messenger Of The Gods',
        domains: ['Trade', 'Travel', 'Luck'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Hephaestus',
        classification: 'Olympic',
        title: 'The Celestial Artificer',
        domains: ['Fire', 'Forges', 'Blacksmithing'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Aphrodite',
        classification: 'Olympic',
        title: 'Embodiment Of Love',
        domains: ['Love', 'Beauty', 'Fertility'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Dionysus',
        classification: 'Olympic',
        title: 'Drunkenness Incarnate',
        domains: ['Wine', 'Festivity', 'Theatre'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Persephone',
        classification: 'Chthonic',
        title: 'Queen Of The Underworld',
        domains: ['Spring', 'Vegetation', 'The Dead'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Hecate',
        classification: 'Chthonic',
        title: 'Witch Of The Crosswords',
        domains: ['Magic', 'Witchcraft', 'Necromancy'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'The Furies',
        classification: 'Chthonic',
        title: 'The Retributionists',
        domains: ['Jealousy', 'Anger', 'Avengeance'],
        image: 'imgs/placeholder.jpg',
        otherinfo: 'A group composed of three seperate gods- Megaera (Jealousy), Allecto (Anger), and Tisiphone (Avengeance)'
    },
    {
        name: 'Nemesis',
        classification: 'Chthonic',
        title: 'Vengeance Incarnate',
        domains: ['Vengeance', 'Retribution', 'Resentment'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Thanatos',
        classification: 'Chthonic',
        title: 'Personification Of Death',
        domains: ['Death'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Hypnos',
        classification: 'Chthonic',
        title: 'The Sacred Sleeper',
        domains: ['Sleep', 'Dreams', 'Hallucinations'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Chronos',
        classification: 'Titan',
        title: 'King Of The Titans',
        domains: ['Time', 'Cycles', 'Evil'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Selene',
        classification: 'Titan',
        title: 'Bringer Of Nighttime',
        domains: ['The Moon', 'Radiance', 'Insanity'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Helios/Apollo',
        classification: 'Titan',
        title: 'Bringer Of Daytime',
        domains: ['The Sun', 'Archery', 'Prophecy'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    },
    {
        name: 'Chaos',
        classification: 'Progenitor',
        title: 'Creator Of All Things',
        domains: ['Creation', 'Void', 'Entropy'],
        image: 'imgs/placeholder.jpg',
        otherinfo: ''
    }

]

//card generation
function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards')
    let i = 0
    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mb-1')
        card.setAttribute("id", `card-container${i}`)

        //style card based on role
        let backgroundColor
        switch (member.classification.toLowerCase()) {
            case 'olympic':
                backgroundColor = 'mediumaquamarine'
                break
            case 'chthonic':
                backgroundColor = 'purple'
                break
            case 'titan':
                backgroundColor = "maroon"
                break
            default:
                backgroundColor = "white"
        }



        card.innerHTML = `
        <div class="card h-100" id="card${i}" onmouseover="flipCard(${i})"">
            <div class="text-center p-1">
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
        <div class="text-center p-1">
            <h1>${member.name}</h1>
            <img src="${member.image}" class="w-100">
        </div>`
    }, 1000);
}