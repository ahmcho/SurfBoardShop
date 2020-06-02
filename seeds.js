const faker = require('faker');
const Post = require('./models/post');

async function seedPosts() {
    await Post.remove({});
    for(const i of new Array(40)) {
            const post = {		
                title: faker.lorem.word(),
                description: faker.lorem.text(),
                price: faker.commerce.price(),
                author: {
                    "_id" : "5ed4fea357c4c416e663b0a0",
                    "username" : "ahmad"
                }
            }
            await Post.create(post);
    }
    console.log('40 new posts created');
}

module.exports = seedPosts;