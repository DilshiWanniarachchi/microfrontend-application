import faker from 'faker';

const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

    el.innerHTML = cartText;
};

//Situation #1
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');

    if(el) {
        mount(el);
    }
}

//Situation #2
export { mount };





