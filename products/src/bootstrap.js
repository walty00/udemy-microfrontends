import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
};

// local development
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
    // Assuming our container does not have this element
    if (el) {
        // We are probably running in isolation
        mount(el);
    }
}

// container
export { mount };
