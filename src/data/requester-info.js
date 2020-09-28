import Faker from 'faker'

const requester = [
{
    name: Faker.name.findName(),
    desc: Faker.lorem.paragraph(),
    img: Faker.image.avatar()
},
{
    name: Faker.name.findName(),
    desc: Faker.lorem.paragraph(),
    img: Faker.image.avatar()
},
{
    name: Faker.name.findName(),
    desc: Faker.lorem.paragraph(),
    img: Faker.image.avatar()
},
{
    name: Faker.name.findName(),
    desc: Faker.lorem.paragraph(),
    img: Faker.image.avatar()
},
{
    name: Faker.name.findName(),
    desc: Faker.lorem.paragraph(),
    img: Faker.image.avatar()
},
{
    name: Faker.name.findName(),
    desc: Faker.lorem.paragraph(),
    img: Faker.image.avatar()
}
]

export default requester