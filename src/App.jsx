import './App.css'
import {useState} from "react";
import Button from "./components/buttons/Button.jsx";
import Input from "./components/textinput/Input.jsx";
import Button2 from "./components/buttons/Button2.jsx";

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
        const {name, value, type, checked} = e.target;
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

                    <Button
                        type="button"
                        text="+"
                        onClick={() => setAardbei(Aardbei + 1)}
                    />
                    <p>{Aardbei}</p>

                    <Button
                        type="button"
                        text="-"
                        onClick={Aardbei < 1 ? Aardbei = 0 : () => setAardbei(Aardbei - 1)}
                    />
                </div>
                <div>
                    <h2>Bananen</h2>
                    <Button
                        type="button"
                        text="+"
                        onClick={() => setBanaan(Banaan + 1)}
                    />
                    <p>{Banaan}</p>
                    <Button
                        type="button"
                        text="-"
                        onClick={Banaan < 1 ? Banaan = 0 : () => setBanaan(Banaan - 1)}
                    />
                </div>
                <div>
                    <h2>Appels</h2>

                    <Button
                        type="button"
                        text="+"
                        onClick={() => setAppels(Appels + 1)}
                    />
                    <p>{Appels}</p>

                    <Button
                        type="button"
                        text="-"
                        onClick={Appels < 1 ? Appels = 0 : () => setAppels(Appels - 1)}
                    />
                </div>
                <div>
                    <h2>Kiwis</h2>
                    <Button
                        type="button"
                        text="+"
                        onClick={() => setKiwis(Kiwis + 1)}
                    />
                    <p>{Kiwis}</p>
                    <Button
                        type="button"
                        text="-"
                        onClick={Kiwis < 1 ? Kiwis = 0 : () => setKiwis(Kiwis - 1)}
                    />
                </div>
                <Button2
                    onClick={handleClickreset}
                    text="Reset"
                />
                {/*<button onClick={handleClickreset}>Reset</button>*/}
            </article>
            <article>
                <Input
                    text="Voornaam"
                    type="text"
                    name="firstname"
                    value={Formstate.firstname}
                    onChange={(e) => {
                        handleChange(e)
                    }}
                />
                <Input
                    text="Achternaam"
                    type="text"
                    name="lastname"
                    value={Formstate.lastname}
                    onChange={(e) => {
                        handleChange(e)
                    }}
                />
                <Input
                    text="Leeftijd"
                    type="text"
                    name="age"
                    value={Formstate.age}
                    onChange={(e) => {
                        handleChange(e)
                    }}
                />
                <Input
                    text="Postcode"
                    type="text"
                    name="postcode"
                    value={Formstate.postcode}
                    onChange={(e) => {
                        handleChange(e)
                    }}
                />
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
                <Button2
                    onClick={handleClicksent}
                    text="Versturen"
                />
            </article>
        </>
    )
}

export default App
