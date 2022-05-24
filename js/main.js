"use strict"

const colorOne = {
    r: 63,
    g: 255,
    b: 255
}

const colorTwo = {
    r: 255,
    g: 63,
    b: 255
}

const degree = -1;

const infos = [degree, colorOne, colorTwo];

function incrementDegree() {
    infos[0] += 1;
    if (infos[0] > 360) {
        infos[0] = 0;
    }
}

function changeBackground() {
    document.getElementById('background').style.background = `linear-gradient(${infos[0]}deg, 
        rgb(${infos[1].r}, ${infos[1].g}, ${infos[1].b}) 0%, rgb(${infos[2].r}, ${infos[2].g}, ${infos[2].b}) 100%)`;
}

function frameUpdate() {
    incrementDegree();
    changeBackground();
    console.log(infos[0]);
}

setInterval(frameUpdate, 100);
