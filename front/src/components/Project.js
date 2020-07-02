import React from 'react';

import {
    Image,
    ProgressBar,
    Button
} from 'react-bootstrap';

import {
    Link45deg
} from 'react-bootstrap-icons';

export default function({ title, progress, description, color }) {

    return (
        <>
            <div className={`theme-${color} p-3 rounded mb-2`}>
                <img />
                <p className={"mb-1"}>{ title }</p>
                <p>{ description }</p>
                <ProgressBar variant="info" now={ progress } label={`${ progress }%`} />
            </div>
            <Button variant={"primary"} className={"mx-auto"}>
                <Link45deg size={24} />
                Website
            </Button>

        </>
    )
}