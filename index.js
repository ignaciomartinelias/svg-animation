const paths = Array.from(document.getElementsByTagName('path'));
paths.reverse().forEach((path, i) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.animationDelay = `${2.5 - (.25 * i)}s`;
})