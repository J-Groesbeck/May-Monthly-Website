//team member data

const teamMembers = [
    {
        name: 'Zeus',
        classification: 'Olympic',
        title: 'King Of The Gods',
        domains: ['Lightning', 'Sky', 'Order'],
        image: 'imgs/zeus.png',
        otherinfo: `One of the Great Three gods, and leader of the Olympic gods. He is also known to have had several affairs, much to Hera's anger.`,
        id: 'card0',
        number: 0
    },
    {
        name: 'Hades',
        classification: 'Chthonic',
        title: 'King Of The Dead',
        domains: ['The Dead', 'The Underworld', 'Funerals'],
        image: 'imgs/hades.png',
        otherinfo: 'One of the Great Three gods, the ruler of the underworld, and leader of the Chthonic gods. Notably, however, there are many Chthonic gods who do not follow his rule, as the underworld is a vast place.',
        id: 'card1',
        number: 1
    },
    {
        name: 'Poseidon',
        classification: 'Olympic',
        title: 'King Of The Oceans',
        domains: ['Water', 'Storms', 'Horses'],
        image: 'imgs/poseidon.png',
        otherinfo: 'One of the Great Three gods, holding power over the vast oceans. He is the god of horses because he created them as a gift for a city deciding on their patron god.',
        id: 'card2',
        number: 2
    },
    {
        name: 'Nyx',
        classification: 'Chthonic',
        title: 'Personification Of Night',
        domains: ['Night', 'Darkness'],
        image: 'imgs/nyx.png',
        otherinfo: 'Considered one of the most powerful gods, she is a primordial goddess who strikes fear into the hearts of those who even just hear her name.',
        id: 'card3',
        number: 3
    },
    {
        name: 'Hera',
        classification: 'Olympic',
        title: 'Queen Of The Gods',
        domains: ['Marriage', 'Womanhood', 'Family'],
        image: 'imgs/hera.png',
        otherinfo: 'She was actually tricked by Zeus into marrying him, after which he would cheat on her repeatedly. Stories of her revenge against him are commonplace in mythology.',
        id: 'card4',
        number: 4
    },
    {
        name: 'Demeter',
        classification: 'Olympic',
        title: 'The Fruitbearer',
        domains: ['Harvest', 'Fertility of the Earth', 'The Seasons'],
        image: 'imgs/demeter.png',
        otherinfo: 'She represents the seasons through her cyclic grief over her daughter, Persephone. The greeks believed that the lack of plant growth in autumn & winter was caused by her grief while Persephone was in the underworld. ',
        id: 'card5',
        number: 5
    },
    {
        name: 'Hestia',
        classification: 'Olympic',
        title: 'Keeper Of Hearth And Home',
        domains: ['The Hearth', 'Sacred Fire', 'Sacrifice'],
        image: 'imgs/hestia.png',
        otherinfo: 'Often disinterested with the affairs of the gods, she focused more on the people of Greece. She became the god of sacrifices when she swore to remain a maiden forever while Apollo and Poseidon were vying for her hand in marriage.',
        id: 'card6',
        number: 6
    },
    {
        name: 'Artemis',
        classification: 'Olympic',
        title: 'Personification Of The Hunt',
        domains: ['Hunting', 'Wildlife', 'Nature'],
        image: 'imgs/artemis.png',
        otherinfo: 'She, with her twin brother Apollo, hunted and killed the titan Tityus for sexually assaulting their mother. She also was known for her forbidden love with Orion, a mortal hunter she found interesting.',
        id: 'card7',
        number: 7
    },
    {
        name: 'Ares',
        classification: 'Olympic',
        title: 'Battle Incarnate',
        domains: ['War', 'Courage', 'Bloodlust'],
        image: 'imgs/ares.png',
        otherinfo: 'Worshipped often by the militaristic societies of Greece (like Sparta), he was often a disliked god. His most famous myth is his fight with Heracles, a result of Heracles killing his son.',
        id: 'card8',
        number: 8
    },
    {
        name: 'Athena',
        classification: 'Olympic',
        title: 'Protector Of The People',
        domains: ['Wisdom', 'Strategy', 'Virginity'],
        image: 'imgs/athena.png',
        otherinfo: `She was presented as extraordinarily intelligent in myth, having been born fully formed from Zeus' forehead. She has many myths of cursing those who wronged her, like the story of Arachne.`,
        id: 'card9',
        number: 9
    },
    {
        name: 'Hermes',
        classification: 'Olympic',
        title: 'Herald Of The Gods',
        domains: ['Trade', 'Travel', 'Luck'],
        image: 'imgs/hermes.png',
        otherinfo: 'Known for his ability to travel anywhere in blinding speeds, he often acting as a messenger of the gods. He was seen as kind and caring, with one his myths involving helping perseus kill medusa by giving him his winged sandals.',
        id: 'card10',
        number: 10
    },
    {
        name: 'Hephaestus',
        classification: 'Olympic',
        title: 'The Celestial Artificer',
        domains: ['Fire', 'Forges', 'Blacksmithing'],
        image: 'imgs/hephaestus.png',
        otherinfo: 'Born lame, he was cast off of olympus by his parents. This led him to work in solitude, perfecting his craft as a blacksmith, coming to create all of the most powerful weapons wielded by the god. He was invited back to olympus by dionysus.',
        id: 'card11',
        number: 11
    },
    {
        name: 'Aphrodite',
        classification: 'Olympic',
        title: 'Embodiment Of Love',
        domains: ['Love', 'Beauty', 'Fertility'],
        image: 'imgs/aphrodite.png',
        otherinfo: 'Being the manifestation of beauty led her to be highly sought after by the other gods, causing Zeus to marry her to Hephaestus to end the conflict. She was frequently unfaithful, and generally seen as a jealous god.',
        id: 'card12',
        number: 12
    },
    {
        name: 'Dionysus',
        classification: 'Olympic',
        title: 'Celebration Incarnate',
        domains: ['Wine', 'Festivity', 'Theatre'],
        image: 'imgs/dionysus.png',
        otherinfo: 'Known for choosing punishments on a whim, he would often be angered which would lead him to punishing mortals in ways like turning them into dolphins. However, he also in extreme anger, would cause them to go mad.',
        id: 'card13',
        number: 13
    },
    {
        name: 'Persephone',
        classification: 'Chthonic',
        title: 'Queen Of The Underworld',
        domains: ['Spring', 'Vegetation', 'The Dead'],
        image: 'imgs/persephone.png',
        otherinfo: 'On a trip to the underworld, she ate half of a pomegranate, which cursed her to stay in the underworld for half of each year. She would eventually be married to Hades, and her traversal between the living and dead realms is believed to be what causes the change of the seasons.',
        id: 'card14',
        number: 14
    },
    {
        name: 'Hecate',
        classification: 'Chthonic',
        title: 'Witch Of The Crosswords',
        domains: ['Magic', 'Witchcraft', 'Necromancy'],
        image: 'imgs/hecate.png',
        otherinfo: 'Although technically a Titan, she is often viewed more as chthonic, due to her lack of association with other titans. She presides over magic, her incantations powerful enough to bend the fates themselves.',
        id: 'card15',
        number: 15
    },
    {
        name: 'The Furies',
        classification: 'Chthonic',
        title: 'The Retributionists',
        domains: ['Jealousy', 'Anger', 'Avengeance'],
        image: 'imgs/megaera.png',
        otherinfo: 'A group composed of three separate gods- Megaera (Jealousy), Alecto (Anger), and Tisiphone (Avengeance)',
        id: 'card16',
        number: 16
    },
    {
        name: 'Nemesis',
        classification: 'Chthonic',
        title: 'Vengeance Incarnate',
        domains: ['Vengeance', 'Retribution', 'Resentment'],
        image: 'imgs/nemesis.png',
        otherinfo: 'She presides over the scales of good and evil, traveling quickly to wherever the balance has been tipped in order to enact the proper vengeance to balance them once more.',
        id: 'card17',
        number: 17
    },
    {
        name: 'Thanatos',
        classification: 'Chthonic',
        title: 'Personification Of Death',
        domains: ['Death'],
        image: 'imgs/thanatos.png',
        otherinfo: 'Holding an inverted torch and a sword of immense power, he represented death, appearing to take away the deceased to the underworld.',
        id: 'card18',
        number: 18
    },
    {
        name: 'Hypnos',
        classification: 'Chthonic',
        title: 'The Sacred Sleeper',
        domains: ['Sleep', 'Dreams', 'Hallucinations'],
        image: 'imgs/hypnos.png',
        otherinfo: 'He embodied sleep itself, able to control others and lull them into a deep sleep, powerful enough to even put down other gods (if only temporarily).',
        id: 'card19',
        number: 19
    },
    {
        name: 'Chronos',
        classification: 'Titan',
        title: 'King Of The Titans',
        domains: ['Time', 'Cycles', 'Evil'],
        image: 'imgs/chronos.png',
        otherinfo: 'Considered by far the most evil in Greek Mythology, he has waged war with the other Gods, only being defeated with the combined power of the Great Three.',
        id: 'card20',
        number: 20
    },
    {
        name: 'Selene',
        classification: 'Titan',
        title: 'Bringer Of Nighttime',
        domains: ['The Moon', 'Radiance', 'Insanity'],
        image: 'imgs/selene.png',
        otherinfo: 'She drags the Moon across the sky with a chariot each night.',
        id: 'card21',
        number: 21
    },
    {
        name: 'Helios/Apollo',
        classification: 'Titan',
        title: 'Bringer Of Daytime',
        domains: ['The Sun', 'Archery', 'Prophecy'],
        image: 'imgs/apollo.png',
        otherinfo: 'He drags the Sun across the sky with a chariot each day. Used to be known as the titan Helios, who was unpopular and eventually merged with Apollo, who is usually seen as either a titan or olympic god.',
        id: 'card22',
        number: 22
    },
    {
        name: 'Chaos',
        classification: 'Progenitor',
        title: 'Creator Of All Things',
        domains: ['Creation', 'Void', 'Entropy'],
        image: 'imgs/chaos.png',
        otherinfo: 'The original being in Greek Mythology, believed to be responsible for the creation of the universe. Included with titans on this list due to its nature of being the one to create them.',
        id: 'card23',
        number: 23
    }
]

//card generation
function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards')
    let i = 0
    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'col-xl-3', 'mb-1')
        card.setAttribute("id", `card-container${i}`)

        //style card based on role
        let backgroundColor
        switch (member.classification.toLowerCase()) {
            case 'olympic':
                backgroundColor = 'mediumaquamarine'
                textColor = 'black'
                break
            case 'chthonic':
                backgroundColor = 'purple'
                textColor = 'white'
                break
            case 'titan':
                backgroundColor = "maroon"
                textColor = 'black'
                break
            default:
                backgroundColor = "white"
                textColor = 'black'
        }



        card.innerHTML = `
        <div class="card h-100" id="${member.id}" onmouseover="flipCard(${i})"">
            <div class="text-center p-1">
                <h1>${member.name}</h1>
                <img src="${member.image}" class="w-100">
            </div>
        </div>`

        for (let i = 0; i < card.children.length; i++) {
            card.children[i].style.backgroundColor = backgroundColor
            card.children[i].style.color = textColor
        }

        teamCardsContainer.appendChild(card)
        i = i + 1
    });
}

window.onload = generateTeamCards()

function getDomains(member) {
    let finalText
    for (let i = 0; i < member.length; i++) {
        if (finalText) {
            finalText = `${finalText}, ${member[i]}`
        } else { finalText = `${member[i]}` }
    }
    return finalText
}

let furyPictures = ['imgs/megaera.png', 'imgs/alecto.png', 'imgs/tisiphone.png']
let furyNumber = 0
let chaosPictures = ['imgs/chaos.png', 'imgs/chaos2.png']
let chaosNumber = 0

function flipCard(cardNumber) {
    if (furyNumber < 2) {
        furyNumber = furyNumber + 1
    } else {
        furyNumber = 0
    }
    teamMembers[16].image = `${furyPictures[furyNumber]}`
    if (chaosNumber < 1) {
        chaosNumber = chaosNumber + 1
    } else {
        chaosNumber = 0
    }
    teamMembers[23].image = `${chaosPictures[chaosNumber]}`
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
                <p class="mb-0">Classification: ${member.classification} <br><br class="d-lg-none">
                Title: ${member.title} <br><br class="d-lg-none">
                God of: ${getDomains(member.domains)} <br><br class="d-lg-none">
                Extra Info: ${member.otherinfo}</p>
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

function sortBy(type) {
    teamMembers.forEach(member => {
        if (member.classification.toLowerCase() === type.toLowerCase()) {
            document.getElementById(`card-container${member.number}`).classList.remove('d-none');
        } else if (type.toLowerCase() === 'titan' && member.classification.toLowerCase() === 'progenitor') {
            document.getElementById(`card-container${member.number}`).classList.remove('d-none');
        } else {
            document.getElementById(`card-container${member.number}`).classList.add('d-none');
        }
    });
}

function unsort() {
    teamMembers.forEach(member => {
        document.getElementById(`card-container${member.number}`).classList.remove('d-none');
    });
}