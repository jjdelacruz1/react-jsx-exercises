let FirstComponent = () => {
    return <div class="container d-flex w-50 h-50 justify-content-center">
             <div class="left h-50">
               <div class="red">RED</div>
               <div class="blue">BLUE</div>
             </div>
             <div class="right h-50">
               <div class="green">GREEN</div>
               <div class="yellow">YELLOW</div>
             </div>
           </div>
    
    // <span>Make this component render like the Windows Logo: <a href="https://goo.gl/images/mY5Qdv" target="_blank">https://goo.gl/images/mY5Qdv</a></span>
}

ReactDOM.render(<FirstComponent />, document.getElementById('root'))