import React, { Component } from 'react';

import './wibesapp.css';


class contentContainer extends Component
{
    render()
    {

        let nameContainer = (
            <div className="name-container">
                <div className="company-name">WibesApp Solutions</div>
            </div>
        );

        let tagContainer = (
            <div className="tag-container poppins">
                <div className="tag-line">Engineering Indian Businesses Transcend into the Digital Era</div>
            </div>
        );

        let companyContainer = (
            <div className="company-container raleway">
                {nameContainer}
                {tagContainer}             
            </div>
        );

        let engiContainer = (
            <div className="engi-container">
                <div className="engineering">engineering</div>
                <div className="engi-spani">/ɛndʒɪˈnɪərɪŋ/</div>
                <div className="noun"><i>noun</i></div>
                <div className="meaning">the action of working artfully to bring something about the way it needed to be.</div>
            </div>
        );

        let meaningContainer = (
            <div className="meaning-container">
                {engiContainer}       
            </div>
        );
        
        return(
            <div className="content-container flex-column">
                {companyContainer}
                {meaningContainer}
            </div>
        );
    }
}

export default contentContainer;