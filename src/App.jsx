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


    const [Formstate, setFormstate] = useState({
        firstname: '',
        lastname: '',
        age: 0,
        postcode: '',
        moment: '',
        dropoff: 'Iedere week',
        opmerking: '',
        avw: '',


    });

    function handleChange(e) {
        /*const changeFieldName = e.target.name;*/
        const { name, value, type, checked } = e.target;
        setFormstate((prevState) => ({
            ...prevState,
            /*[changeFieldName]: e.target.value,*/
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    function handleClicksent() {
        console.log("Voornaam:", Formstate.firstname)
        console.log("Achternaam:", Formstate.lastname)
        console.log("Leeftijd:", Formstate.age)
        console.log("Postcode:", Formstate.postcode)
        console.log("Wanneer:", Formstate.dropoff)
        console.log("Moment:", Formstate.moment)
        console.log("Opmerking:", Formstate.opmerking)
        console.log("avw:", Formstate.avw)

    }

    return (
        <>
            <article>
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
            </article>
            <article>
                <div>
                    <label>Voornaam</label>
                    <input
                        type="text"
                        name="firstname"
                        value={Formstate.firstname}
                        onChange={(e) => {
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
                        onChange={(e) => {
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
                            handleChange(e);
                        }}
                    />
                </div>
                <div>
                    <h3>Bezorgfrequentie</h3>
                    <select
                        name="dropoff"
                        value={Formstate.dropoff}
                        onChange={(e) => {
                            handleChange(e);
                        }}>
                        <option value="Iedere week">Iedere week</option>
                        <option value="Om de week">Om de week</option>
                        <option value="Iedere maand">Iedere maand</option>
                    </select>
                </div>
                <div>
                    <div>
                        <input type="radio"
                               id="huey"
                               name="moment"
                               value="day"
                               checked={Formstate.moment === "day"}
                               onChange={(e) => {
                                   handleChange(e);
                               }}/>
                        <label htmlFor="huey">Overdag</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="dewey"
                            name="moment"
                            value="night"
                            checked={Formstate.moment === "night"}
                            onChange={(e) => {
                                handleChange(e);
                            }}/>
                        <label htmlFor="dewey">'s Avonds</label>
                    </div>
                </div>
                <div>
                    <label>Opmerking</label>
                    <textarea
                        type="text"
                        name="opmerking"
                        value={Formstate.opmerking}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <div>
                    <div>
                        <input type="checkbox"
                               id="voorwaarde"
                               name="avw"
                               checked={Formstate.checked}
                               onClick={(e) => {
                                   handleChange(e);
                               }}/>
                        <label htmlFor="voorwaarde">Ik ga akkoord met de voorwaarde</label>
                    </div>
                </div>
                <button onClick={handleClicksent}>Versturen</button>
            </article>
        </>
    )
}

export default App
