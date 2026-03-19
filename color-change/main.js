function color_changer() {// 
    let style = document.querySelector('body');
    if (getComputedStyle(style).getPropertyValue('--background-color') === 'white') {
        style.style.setProperty('--background-color', 'black');
        style.style.setProperty('--darkmode', 'white')
        console.log('test white');
        return
    } else {
        style.style.setProperty('--background-color', 'white');
        style.style.setProperty('--darkmode', 'black');
        console.log('test not white');
        return
    }
}