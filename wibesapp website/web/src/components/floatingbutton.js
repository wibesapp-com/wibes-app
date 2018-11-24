import React, { Component } from 'react';

import './wibesapp.css';

import downArrow from './img/left-arrow.png';


class floatingButton extends Component
{
    render()
    {

        let buttonContainer = (
            <div>
                <a href="#">
                    <div className="button-container">
                        <img className="button" src={downArrow} alt=">"/>
                    </div>
                </a>
            </div>
        );

        return(
            <div>
               {buttonContainer} 
            </div>
        );
    }
}

export default floatingButton;