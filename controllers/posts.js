const Posts = require('../models/post');

module.exports = {
    //Posts Index
    async postIndex(req,res,next){
        let posts = await Posts.find({});
        res.render('posts/index', { posts });
    },

    //Posts New
    postNew(req,res,next){
        res.render('posts/new');
    },

    //Posts Create
    async postCreate(req,res,next){
        let post = await Posts.create(req.body.post);
        res.redirect(`/posts/${post.id}`);
    },
    
    //Posts Show
    async postShow(req,res,next){
        let post = await Posts.findById(req.params.id);
        res.render('posts/show', { post });
    },

    //Posts Edit
    async postEdit(req,res,next){
        let post = await Posts.findById(req.params.id);
        res.render('posts/edit', { post });
    },
    
    //Posts Update
    async postUpdate(req, res, next) {
        let post = await Posts.findByIdAndUpdate(req.params.id, req.body.post, { new: true });
        res.redirect(`/posts/${post.id}`);
    },

    //Posts Destroy
    async postDestroy(req, res, next){
        await Posts.findByIdAndRemove(req.params.id);
        res.redirect('/posts');
    }
}