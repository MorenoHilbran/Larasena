import {proxy} from "valtio"

const state = proxy({
    intro : true,
    color : "#D8B08C", // Nusantara light brown
    isLogoTexture : true,
    isFullTexture : false,
    logoDecal : "/favicon.png", // Use public path
    fullDecal : "/favicon.png", // Use public path
    selectedMask: 'circle', // Start with circle instead of square
})

export default state