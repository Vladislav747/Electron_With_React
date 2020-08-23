import React from "react";
import { Container } from 'react-bootstrap';

const DefaultLayout = ({ children}) => (
    <Container fluid>
        {children}
    </Container>
);

export default DefaultLayout;