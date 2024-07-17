import React from "react";
import "./../App.css";

function Layout(props){
    const styles ={
        background: "grey",
        height: "80px",
        borderRadius: "5px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "20px"
    }
    return (
        <div style={{"width": "90%", "margin": "auto"}}>
            <div style={styles}>
                <h2>Todo List</h2>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
}
export default Layout;