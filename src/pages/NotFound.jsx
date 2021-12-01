import React from 'react';
import styled, { keyframes } from 'styled-components'


export const NotFound = () => {
    return (
        <div>
            <div id="background"></div>
            <div class="top">
                <h1>404</h1>
                <h3>page not found</h3>
            </div>
            <div class="container">
            <div class="ghost-copy">
                <div class="one"></div>
                <div class="two"></div>
                <div class="three"></div>
                <div class="four"></div>
            </div>
            <div class="ghost">
                <div class="face">
                <div class="eye"></div>
                <div class="eye-right"></div>
                <div class="mouth"></div>
                </div>
            </div>
            <div class="shadow"></div>
            </div>
            <div class="bottom">
                <p>Boo, looks like a ghost stole this page!</p>
                <button class="btn">Home</button>
            </div>
        </div>
    )
}
