

// src/App.tsx
import StarWars from "./components/StarWars.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {People} from "./interfaces/People.ts";

const ParentDiv=styled.div`
    margin: auto;
    border: 20px darkgoldenrod solid;
    background-color: bisque;
`;

export default function App(){
  
    const [data, setData] = useState<People[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://swapi.dev/api/people/");
            const {results} : {results: People[]} = await rawData.json();
            setData(results);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []);

    return(
        <ParentDiv>
            <StarWars data={data}/>
        </ParentDiv>
    )
}


