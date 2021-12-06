const loopImages = () => {
    let numImages = 9
    let images = []
    for(let i = 1; i <= numImages; i++){
        images.push(require(`./img${i}.jpg`))
    }
    return images
}

const homeImages = loopImages()

export default homeImages