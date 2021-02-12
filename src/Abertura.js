import React from 'react';

//Estou renderizando um link que manda para youtube

export default props => {
    return <h3><a href="https://www.youtube.com/watch?v=atxYe-nOa9w&ab_channel=animelab">Link da abertura: {props.musica}!</a></h3>;

};