import React,{Component} from "react";

class Cronometro  extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero: 0.0,
            inputStart: 'Start',
            inputClear: 'Clear'
        }
        this.timer = null;
        this.start = this.start.bind(this);
        this.clear = this.clear.bind(this);
    }

    start(){
        let state = this.state;

        if(this.timer != null){
            clearInterval(this.timer);
            this.timer = null;
        }else{
            this.timer = setInterval(
                ()=>{
                    state.numero += 0.1;
                    this.setState(state);
                },100
            )
        }
        

    }
    clear(){
        clearInterval(this.timer);
        this.timer = null;
        this.setState({numero: 0});
    }


    render(){
        return(
            <div>
                <h2>Cronometro</h2>
                <p>{this.state.numero.toFixed(1)}</p>
                <button onClick={this.start}>{this.state.inputStart}</button>&nbsp;
                <button onClick={this.clear}>{this.state.inputClear}</button>
            
            </div>

        );
    }

}
export default Cronometro;