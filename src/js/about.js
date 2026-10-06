const elementsMembers = [
    {
        name: 'Esmeralda Rocío González Tolay',
        dni: '46792170',
        lu:'TUV000821',
        link: 'https://github.com/LilEsme87',
        image: '../images/members/gonzalez_perfil.jpeg'
    },
    {
        name: 'Nayla Aixa Leiva',
        dni: '43211009',
        lu:'TUV000028',
        link: 'https://github.com/NaylaLeiva',
        image: '../images/members/leiva_perfil.jpeg'
    },
    {
        name: 'Yesica Fabiana Salas',
        dni: '44516066',
        lu:'TUV000499',
        link: 'https://github.com/jessiesala',
        image: '../images/members/salas_perfil.jpeg'
    },
    {
        name: 'Facundo Guillermo Robert Fuentes',
        dni: '46597991',
        lu:'TUV000808',
        link: 'https://github.com/facucraft234saz-png',
        image: '../images/members/robert_perfil.jpeg'
    },
    {
        name: 'Gianella Alexadra Gutierrez',
        dni: '45253615',
        lu:'TUV0008000',
        link: 'https://github.com/AlezzzGutierrez',
        image: '../images/members/gutierrez_perfil.jpeg'
    }
]

const membersList = document.getElementById('members-list');

if (membersList) {
    elementsMembers.forEach(item => {
        const li = document.createElement('li');

        li.classList.add('member-item');

        li.innerHTML = `
            <img src="${item.image}" alt="${item.name} image" class="member-image">
            <div class="member-info">
                <h3 class="member-name">${item.name}</h3>
                <p class="member-dni"> <strong>DNI:</strong> ${item.dni}</p>
                <p class="member-lu"> <strong>LU:</strong> ${item.lu}</p>
                <a href="${item.link}" class="member-link">GitHub</a>
            </div>
        `;

        membersList.appendChild(li);
    });
}
