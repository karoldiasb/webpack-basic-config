class Image {

    insert(imageSrc){
        const image = document.createElement('img');
        image.src = imageSrc;
        document.querySelector('body').appendChild(image);
    }

}

export default Image;