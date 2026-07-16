const showForm = () => {
    document.querySelector('.formWrapper').classList.remove('none');
}

const closeForm = () => {
    document.querySelector('.formWrapper').classList.add('none');
}

document.querySelector('.closeButton').addEventListener('click', (closeForm));



const handleClickOnTheShaddow = (event) => {
    if (event.target.classList.contains('formWrapper')) {
        clo
    }
}

const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = {
        title: event.target.title.value,
        subtitle: event.target.subtitle.value,
        rating: event.target.rating.value
    };
    console.log(data);
}