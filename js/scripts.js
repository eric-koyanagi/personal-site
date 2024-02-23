const progressBar = document.querySelector('.progressBar');
const pageContainer = document.querySelector('body');

const scrollProgressBar = () => {
    const percent = getScrollPercent();
    progressBar.style.width = percent + '%';

};

const getScrollPercent = () => {
    let scrollDistance = -(pageContainer.getBoundingClientRect().top);
    let progressPercentage = (scrollDistance / (pageContainer.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;

    let val = Math.floor(progressPercentage);
    return (val < 0) ? 0 : val;
}

window.addEventListener('scroll', scrollProgressBar);