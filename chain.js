const users = [{ id: 1, name: 'abul', job: 'doctor'}]

// console.log(users[0].name);

const data = {
    count : 500,
    data: [
        {id: 1, name: 'babul', job: 'leader'}
    ]
}
const firstPersonJob = data.data[0].job;
// console.log(firstPersonJob);

const user ={ 
    id: 50043,
    name: 'Shakib',
    address: {
        street: {
            first:'35/A kochukhet lane',
            second:' third Floor',
            side: 'right side'
        },
        postOffice: 'cantonment',
        city: 'dhaka'
    }
}
const userFloor = user.address.street.second;
console.log(userFloor);

