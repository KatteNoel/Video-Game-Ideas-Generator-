import React from 'react';
import { useState } from 'react';

import { Button } from 'react-bootstrap';

export const Generator = (props) => {
    let settings = props.settings;
    let genres = props.genres;
    let artstyles = props.artstyles;

    const [ideas, setIdeas] = useState([]);

    const getRandomInt = (max) => {
        //gets random number and rounds it to nearest whole number
        return Math.floor(Math.random() * max);
    }

    const generateIdeas = () => {
        let idea = {
            setting: null,
            genre: null,
            artstyle: null
        };

        idea.setting = settings[getRandomInt(settings.length)];
        idea.genre = genres[getRandomInt(genres.length)];
        idea.artstyle = artstyles[getRandomInt(artstyles.length)];

        return idea;
    }

    const onClick = (x) => {
        //generate x ideas
        let ideaArray = [];
        for (let i = 0; i < x; i++) {
            ideaArray.push(generateIdeas());
        }

        //store ideas in state
        setIdeas(ideaArray);
    }

    return (
        <div className="center">
            <Button className="padding" variant="dark" onClick={() => onClick(1)}>Generate 1 Game Idea</Button>
            <Button className="padding" variant="dark" onClick={() => onClick(10)}>Generate 10 Game Ideas</Button>
            {ideas.map((idea) => <p>A {idea.setting} {idea.genre} with a {idea.artstyle} artstyle.</p>)}
        </div>
    );
};