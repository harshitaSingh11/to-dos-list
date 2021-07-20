import React from 'react'

export default function Footer() {
    let footerStyle = {
        width: "100%",
        padding: "10px 10px 2px 10px"
    }
    return (
        < footer className="bg-dark text-light" style={footerStyle} >
            <p className="text-center">
                Copyright &copy; MyTodosList by Harshita
            </p>
        </footer >
    )
}