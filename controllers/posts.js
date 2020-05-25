const Posts = require('../models/post');

module.exports = {
    //Posts Index
    async getPosts(req,res,next){
        let posts = await Posts.find({});
        res.render('posts/index', { posts });
    },

    //Posts New
    newPost(req,res,next){
        res.render('posts/new');
    },

    //Posts Create
    async createPost(req,res,next){
        let post = await Posts.create(req.body);
        res.redirect(`/posts/${post.id}`);
    },
    
    //Posts Show
    async showPost(req,res,next){
        let post = await Posts.findById(req.params.id);
        res.render('posts/show', { post });
    },

    //Posts Edit
    async editPost(req,res,next){
        let post = await Posts.findByIdAndUpdate(req.params.id);
        res.render('posts/edit', { post });
    }
    
}