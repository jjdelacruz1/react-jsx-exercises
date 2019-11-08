let Header = () => {
    return <h1 class="bg-dark text-light font-weight-bold">My Super Awesome Blog!!! By Jerome</h1>
}
let Article = () => {
    return <div class="text-monospace"><p>Here is the first part of my blog to try and understand how all this works. Who knows what it will look like after I really figure it out!!!!</p><p>Here is more stuff that I want to write.</p></div>
}
let Footer = () => {
    return <div><h3>Contact Info</h3> <a href="#">jjdelacruz1@gmail.com</a></div>
}

let Blog = () => {
    return <div><Header /> <Article /> <Footer /></div>
}


ReactDOM.render(<Blog />, document.getElementById('root'))