import React from "react";
import { Container } from 'semantic-ui-react';
import OffCanvas from './Offcanvas';

const BasicLayout = (props) => {
    return (
        <Container>
            {/*<OffCanvas />*/}
            <main>
                <nav></nav>
                <div className="siteContent">
                    {props.children}
                </div>
            </main>
        </Container>
    )
}

export default BasicLayout;