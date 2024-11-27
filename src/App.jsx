import './App.css'
import {useState} from "react";

function App() {


    let [Aardbei, setAardbei] = useState(0)
    let [Banaan, setBanaan] = useState(0)
    let [Appels, setAppels] = useState(0)
    let [Kiwis, setKiwis] = useState(0)


    function handleClickreset() {
        setAardbei(0)
        setBanaan(0)
        setAppels(0)
        setKiwis(0)
    }

    const[Formstate, setFormstate] = useState({
        firstname:'',
        lastname:'',
        age:0,
        postcode:'',
        momemt:'day',



    });

    function handleChange(e){
        const changeFieldName= e.target.name;
        setFormstate((prevState)=>({
            ...prevState,
           [changeFieldName]: e.target.value,
        }));
    }

    return (
        <>
            <article>
                <div>
                    <label>Voornaam</label>
                    <input
                        type="text"
                        name="firstname"
                        value={Formstate.firstname}
                        onChange={(e)=>{
                            console.log(`Firstname: ${e.target.value}`);
                            handleChange(e);
                        }}
                    />
                </div>
                <div>
                    <label>Achternaam</label>
                    <input
                        type="text"
                        name="lastname"
                        value={Formstate.lastname}
                        onChange={(e)=>{
                            console.log(`Lastname: ${e.target.value}`);
                            handleChange(e);
                        }}
                    />
                </div>
                <div>
                    <label>Leeftijd</label>
                    <input
                        type="text"
                        name="age"
                        value={Formstate.age}
                        onChange={(e) => {
                            console.log(`Age: ${e.target.value}`);
                            handleChange(e);
                        }}
                    />
                </div>
                <div>
                    <label>Postcode</label>
                    <input
                        type="text"
                        name="postcode"
                        value={Formstate.postcode}
                        onChange={(e) => {
                            console.log(`Postcode: ${e.target.value}`);
                            handleChange(e);
                        }}
                    />
                </div>
                <div>
                    <h3>Bezorgfrequentie</h3>
                </div>
                <div>
                    <div>
                        <input type="radio" id="huey" name="moment" value="day" onClick={ (e)=>{
                            console.log(`Moment:${e.target.value}`);
                            handleChange(e);
                        }}/>
                        <label htmlFor="huey">Overdag</label>
                    </div>
                    <div>
                        <input type="radio" id="dewey" name="moment" value="night" onClick={ (e)=> {
                            console.log(`Moment:${e.target.value}`);
                            handleChange(e);
                        }}/>
                        <label htmlFor="dewey">'s Avonds</label>
                    </div>
                </div>
                <div>
                    <h3>Opmerking</h3>
                </div>
                <div>
                    <h3>Ik ga akkoord met de voorwaarden</h3>
                </div>
            </article>
            {/*<article>
                <h1>Fruitmand bezorgservice</h1>
                <div>
                    <h2>Aardbeien</h2>
                    <button
                        type="button"
                        onClick={() => setAardbei(Aardbei + 1)}
                    >
                        +
                    </button>
                    <p>{Aardbei}</p>
                    <button
                        type="button"
                        onClick={Aardbei < 1 ? Aardbei = 0 : () => setAardbei(Aardbei - 1)}
                    >
                        -
                    </button>
                </div>
                <div>
                    <h2>Bananen</h2>
                    <button
                        type="button"
                        onClick={() => setBanaan(Banaan + 1)}
                    >
                        +
                    </button>
                    <p>{Banaan}</p>
                    <button
                        type="button"
                        onClick={Banaan < 1 ? Banaan = 0 : () => setBanaan(Banaan - 1)}
                    >
                        -
                    </button>
                </div>
                <div>
                    <h2>Appels</h2>
                    <button
                        type="button"
                        onClick={() => setAppels(Appels + 1)}
                    >
                        +
                    </button>
                    <p>{Appels}</p>
                    <button
                        type="button"
                        onClick={Appels < 1 ? Appels = 0 : () => setAppels(Appels - 1)}
                    >
                        -
                    </button>
                </div>
                <div>
                    <h2>Kiwis</h2>
                    <button
                        type="button"
                        onClick={() => setKiwis(Kiwis + 1)}
                    >
                        +
                    </button>
                    <p>{Kiwis}</p>
                    <button
                        type="button"
                        onClick={Kiwis < 1 ? Kiwis = 0 : () => setKiwis(Kiwis - 1)}
                    >
                        -
                    </button>
                </div>
                <button onClick={handleClickreset}>Reset</button>
            </article>*/}
        </>
    )
}

export default App
