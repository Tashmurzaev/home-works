import React from "react";
import Button from "./Button";
import './Component.css'

const Component = () => {
    return (
        <div className="wrapper">
            <div className="box">
            <h2>Heading</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <Button className='btn'>view more</Button>
            </div>
            <p></p>
            <div className="box">
            <h2>Heading</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <Button className='btn'>view more</Button>
            </div>
            <p></p>
            <div className="box">
            <h2>Heading</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <Button className='btn'>view more</Button>
            </div>
        </div>
    )
}

export default Component;