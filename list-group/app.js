let ListGroupItem = () => {
    return <ul className="list-group list-unstyled"><li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Morbi leo risus</li>
    <li className="list-group-item">Porta ac consectetur ac</li>
    <li className="list-group-item">Vestibulum at eros</li>
    </ul>
    
    // <span>Make this component render like a Bootstrap list group item: <a href="https://getbootstrap.com/docs/4.1/components/list-group/" target="_blank">https://goo.gl/images/mY5Qdv</a></span>
}

let ListGroup = () => {
    return <div><ListGroupItem /></div>
    
    // <span>Make this Component render a handful of ListGroupItems</span>
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))