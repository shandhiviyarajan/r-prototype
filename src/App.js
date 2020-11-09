import logo from './assets/images/logo.svg';
import SampleButton from "./components/button";


const App = (props) => {

    const callFunction = () => {
        alert(0);
    }
    return (
        <div className="App">
            <header>
                <SampleButton
                    buttonClick={this.callFunction}
                    text={"Shan"}
                />
            </header>

            <main>
                <Page/>
            </main>
        </div>
    );
}

export default App;
