import React from 'react';
import ReactDOM from 'react-dom';
// import Playlist from '../../src/playlist/components/playlist';
import Home from '../pages/containers/home';
import data from '../api.json'

const homeContainer =  document.getElementById('home-container');
// const holaMundo = <h1>Hola Curso</h1>;
ReactDOM.render( <Home data={data}  /> , homeContainer);