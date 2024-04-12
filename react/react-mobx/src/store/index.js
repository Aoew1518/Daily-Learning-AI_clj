import React from 'react';
import { observer } from "mobx-react-lite";
import counter from './counterStore.jsx';
import movie from './movieStore.js';

class RootStore {
    constructor() {
        this.counterStore = counter;
        this.movieStore = movie;
    }
}

const rootStore = new RootStore();

const context = React.createContext(rootStore);

const useStore = () => {
    return React.useContext(context);
    // return rootStore
}

export { useStore, observer };