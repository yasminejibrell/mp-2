

// src/components/StarWars.tsx
import styled from "styled-components";
import {People} from "../interfaces/People.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleCharDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 20%;
    padding: 2%;
    margin: 5%;
    background-color: darkblue;
    color: white;
    border: 10px darkred solid;
    font: italic small-caps bold calc(1px + 1vw) TimesNewRoman;
    text-align: center;
`;

const Title = styled.h1`
    text-align: center;
    font-size: calc(40px + 2vw);
    color: darkred;
    font-family: TimesNewRoman;
    background-color: bisque;
    padding: 3%;
    text-decoration: underline;
`;

export default function StarWars(props : { data:People[] } ){
    return (
        <>
            <Title>Star Wars Characters</Title>
            <AllCharsDiv >
                {
                    props.data.map((char: People) =>
                        <SingleCharDiv key={char.name}>
                            <h1>{char.name}</h1>
                            <h2>Born: {char.birth_year}</h2>
                            <h2>Gender: {char.gender}</h2>
                            <h2>Height: {char.height}</h2>
                            <h2>Mass: {char.mass}</h2>
                        </SingleCharDiv>
                    )
                }
            </AllCharsDiv>
        </>
    );
}
