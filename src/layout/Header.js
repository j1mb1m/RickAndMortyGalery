import React from 'react';
import { headerEvents } from '../components/events';
import './Header.scss';

export default function Header() {

    const changeTypePageLoading = (e) => {
        e.target.classList.toggle('active');

        const type = e.target.classList.contains('active');
        headerEvents.emit('EPageSwitchClicked', type);

    }

    return (
        <header >
            <input type="checkbox" id="switch" onClick={changeTypePageLoading} /><label htmlFor="switch"></label>
        </header>
    )
}