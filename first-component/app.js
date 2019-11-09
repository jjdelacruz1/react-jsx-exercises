let FirstComponent = () => {
    return <div className="container d-flex w-50 h-100 justify-content-center">
             <div className="left">
               <div className="red">RED</div>
               <div className="blue">BLUE</div>
             </div>
             <div className="right">
               <div className="green col">GREEN</div>
               <div className="yellow col">YELLOW</div>
             </div>
           </div>
    
    // <span>Make this component render like the Windows Logo: <a href="https://goo.gl/images/mY5Qdv" target="_blank">https://goo.gl/images/mY5Qdv</a></span>
}

ReactDOM.render(<FirstComponent />, document.getElementById('root'))