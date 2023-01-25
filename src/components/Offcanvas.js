import React from "react";
import { stack as Menu } from 'react-burger-menu';
import Link from "next/link";

export default class Offcanvas extends React.Component {
    render() {
        return (
            <Menu>
                <Link href="/">Home</Link>
                <Link href="/test">Test</Link>
            </Menu>
        )
    }
}