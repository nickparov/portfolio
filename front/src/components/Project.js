import React from 'react';

import {
    Image,
    ProgressBar,
    Button,
    Badge,
    Figure
} from 'react-bootstrap';

import {
    Link45deg
} from 'react-bootstrap-icons';

export default function({ title, progress, description, color }) {

    return (
        <div className={`theme-${color} p-3 rounded mb-2 d-flex flex-column justify-content-center`}>
            <Figure style={{position: "relative"}}>
                <Figure.Image
                style={{margin: "0px"}}
                fluid
                rounded
                alt="171x180"
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
                />
            </Figure>
            <div className={"mb-1 d-flex justify-content-between"}>
                { title }
                <div>
                    <Badge variant="secondary" className={"mx-1"}>Javascript</Badge>
                    <Badge variant="secondary" className={"mx-1"}>Laravel</Badge>
                    <Badge variant="secondary" className={"mx-1"}>PHP</Badge> 
                </div> 
            </div>
            <p>{ description }</p>
            <Button variant={"secondary"} block size="sm">
                <Link45deg size={24} />
                Website
            </Button>
        </div>
    )
}