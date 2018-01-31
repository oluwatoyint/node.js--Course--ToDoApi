var Todo = mongoose.model('Todo', {
     text: {
         type: String
    },
    completed:{
        type: Boolean
    },
    completedAt: {
        type: Number,
        default: null
    }
    console.log("what is wrong");
});