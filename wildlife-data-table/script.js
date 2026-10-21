const animals = [
    { name: 'Koala', habitat: 'Forest', diet: 'Eucalyptus leaves', type: 'Mammal' },
    { name: 'Red Kangaroo', habitat: 'Grassland', diet: 'Grasses', type: 'Mammal' },
    { name: 'Platypus', habitat: 'Freshwater', diet: 'Aquatic insects', type: 'Mammal' },
    { name: 'Bare-nosed Wombat', habitat: 'Forest', diet: 'Grasses', type: 'Mammal' },
    { name: 'Emu', habitat: 'Woodland', diet: 'Plants and insects', type: 'Bird' },
    { name: 'Saltwater Crocodile', habitat: 'Rivers and swamps', diet: 'Other animals', type: 'Reptile' }
];

const createAnimalRow = (animal) => `
    <tr>
        <td>${animal.name}</td>
        <td>${animal.habitat}</td>
        <td>${animal.diet}</td>
        <td>${animal.type}</td>
    </tr>
`;

const createTable = () => {
    const tbody = document.querySelector('#wildlife-table tbody');
    const selectedType = document.querySelector('#animal-type').value;
    let rows = '';

    animals.forEach(animal => {
        if (selectedType === 'All' || animal.type === selectedType) {
            rows = rows + createAnimalRow(animal);
        }
    });

    tbody.innerHTML = rows;
};

document.querySelector('#btn-filter').addEventListener('click', createTable);

createTable();