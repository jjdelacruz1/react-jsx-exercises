let ProfilePic = () => {
    return <div class="text-center"><img src="/img/Image-1.jpg" height="200" width="200" class="rounded"></img></div>
}

let CommentBody = () => {
    return <div class="text-center"><p>So here is my first comment in this thing....</p></div>
}

let Comment = () => {
    return <div><ProfilePic /> <CommentBody /></div>
}

let Comments = () => {
    return <div class="container"><Comment /> </div>
}

ReactDOM.render(<Comments />, document.getElementById('root'))