import react,{ Component } from "react";

class CicloComponent extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            hora: '00:00:00'
        };
    }
    
    /*Executado qunado o componente é montado*/
    componentDidMount(){
        console.log('Componente montado')
        setInterval(
            ()=>{
                this.setState({hora: new Date().toLocaleTimeString()})
            },
            1000
        )
    }

    /*Componente atualizado*/
    componentDidUpdate(){
        console.log('Componente atualizado');
    }
    
    render(){
        return(
            <div>
                <h1>Ciclo de vida</h1>
                <p>{this.state.hora}</p>
            </div>
        );
    }

    
}
export default CicloComponent;