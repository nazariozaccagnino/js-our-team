let team = [
    {
        fullname : 'Wayne Barnett',
        role : 'Founder & CEO',
        image : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        fullname : 'Angela Caroll',
        role : 'Chief Editor',
        image : 'angela-caroll-chief-editor.jpg'
    },
    {
        fullname : 'Walter Gordon',
        role : 'Office Manager',
        image : 'walter-gordon-office-manager.jpg'
    },
    {
        fullname : 'Angela Lopez',
        role : 'Social Media Manager',
        image : 'angela-lopez-social-media-manager.jpg'
    },
    {
        fullname : 'Scott Estrada',
        role : 'Developer',
        image : 'scott-estrada-developer.jpg'
    },
    {
        fullname : 'Barbara Ramos',
        role : 'Graphic Designer',
        image : 'barbara-ramos-graphic-designer.jpg'
    },
];


for (let value of team){
    console.log(value.fullname +' '+ value.role + ' '+ value.image)
    
    // let elPeople = document.createElement('div');
    // elPeople.innerHTML = `${value.fullname}`
    let elPeople = document.createElement('div');
    elPeople.className = 'col-3 card text-center p-3'
    elPeople.innerHTML = ` <img src="img/${value.image}"> <h3>${value.fullname}</h3> <div>${value.role}</div>`
    document.querySelector('.row').appendChild(elPeople)
}
