import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Salvos from "./pages/Salvos";
import not_found from "./pages/not-found/not_found";


const Routes = ()=>{
    return(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/filme/:id" component={Filme}/>
        <Route exact path="/salvos/" component={Salvos}/>
        <Route path="*" component={not_found}/>
    </Switch>
    );

}
export default Routes