let FirstComponent = () => {
    return <div className="container d-flex w-50 h-100 justify-content-center">
             <div className="left">
               <div className="red"></div>
               <div className="blue"></div>
             </div>
             <div className="right">
               <div className="green"></div>
               <div className="yellow"></div>
             </div>
           </div>
    
    // <span>Make this component render like the Windows Logo: <a href="https://goo.gl/images/mY5Qdv" target="_blank">https://goo.gl/images/mY5Qdv</a></span>
}

ReactDOM.render(<FirstComponent />, document.getElementById('root'))