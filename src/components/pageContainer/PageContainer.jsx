import React from "react";
import MenuBarComponent from "../menuBar/MenuBarComponent";

export default function PageContainer(props) {
    const {title} = props;

    return (
        <div>
            <MenuBarComponent/>
            {props.children}
        </div>
    );
}
