export class Card {
    #data;
    #selectorTemplate;
    #element;
    #handleCatTitle;
    #handleClickCatImage;
    #getTemplate(){
        const template = document.querySelector(this.#selectorTemplate).content.querySelector('.card');
        return template
    }

    constructor(data, selectorTemplate, handleCatTitle, handleClickCatImage) {
        this.#data = data;
        this.#selectorTemplate = selectorTemplate;
        this.#handleCatTitle = handleCatTitle;
        this.#handleClickCatImage = handleClickCatImage;
    }

    getElement() {
        this.#element = this.#getTemplate().cloneNode(true);
        this.cardTitleElement = this.#element.querySelector('.card__name');
        this.cardImageElement = this.#element.querySelector('.card__image');
        this.cardLikeElement = this.#element.querySelector('.card__like');

        this.cardTitleElement.textContent = this.#data.name
        this.cardImageElement.src = this.#data.image

        if(!this.#data.favorite) {
            this.cardLikeElement.remove()
        }

            this.setEventListener();
        //Наполнять карточку
        return this.#element;
    }

    getData() {
        return this.#data;
    }

    getId() {
        return this.#data.id;
    }

    setData(newData) {
        this.#data = newData;
    }

    deleteView() {
        this.#element.remove();
        this.#element = null;
    }

    setEventListener() {
        this.cardTitleElement.addEventListener('click', () => this.#handleCatTitle(this))
        this.cardImageElement.addEventListener('click', () => this.#handleClickCatImage(this.#data))
    }


}

