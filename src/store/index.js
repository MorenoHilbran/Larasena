import {proxy} from "valtio"

const state = proxy({
    intro : true,
    color : "#66ccff",
    isLogoTexture : true,
    isFullTexture : false,
    logoDecal : "./favicon.png",
    fullDecal : "./favicon.png",
    selectedMask: 'square',
})

export default state