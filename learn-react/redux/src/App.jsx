import Counter from './components/Counter.jsx';
import {Fragment} from "react";
import Header from "./components/Header.jsx";
import Auth from "./components/Auth.jsx";
import {useSelector} from "react-redux";
import userProfile from "./components/UserProfile.jsx";
import UserProfile from "./components/UserProfile.jsx";

function App() {
    const isAuth = useSelector(state => state.auth.isAuth)

    return (
       <Fragment>
           <Header></Header>
           {
               isAuth ? <UserProfile/> : <Auth/>
           }
           <Counter />
       </Fragment>
    );
}

export default App;
