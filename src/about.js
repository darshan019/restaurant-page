function about() {
    //....
    console.log('about')
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about');

    const abtUs = document.createElement('p')
    abtUs.classList.add('abt')
    abtUs.textContent = 'ABOUT US'
    aboutDiv.appendChild(abtUs)

    const para = document.createElement('p')
    para.classList.add('para')
    para.textContent = 'Mauris egestas felis quis urna pharetra ultrices ac sit amet lectus. Ut ac feugiat quam, efficitur aliquam justo. Duis rhoncus auctor purus, vel luctus sem molestie sed. Fusce in enim eu velit semper fringilla. Phasellus ullamcorper scelerisque faucibus.'
    para.textContent += 'Duis ac maximus purus. Aenean porttitor, neque ut tempor blandit, nunc tellus laoreet nulla, at accumsan massa dui in libero. Suspendisse id molestie lorem, vitae maximus ligula. Cras quis purus sem. Sed mattis orci at purus suscipit mattis. Cras eu dolor et dui sodales convallis non sed nunc. Mauris iaculis, urna vel rutrum varius, mauris purus tempus mauris, maximus elementum ipsum dolor et risus.'
    aboutDiv.appendChild(para)

    return aboutDiv
}

export { about }