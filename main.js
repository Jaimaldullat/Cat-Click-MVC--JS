var model = {
    currentCat: null,
    cats: [
        {
            id: 1,
            name: 'Cat1',
            picture: 'cat1.jpg',
            clicks: 0
            },
        {
            id: 2,
            name: 'Cat2',
            picture: 'cat2.jpg',
            clicks: 0
            },
        {
            id: 3,
            name: 'Cat3',
            picture: 'cat3.jpg',
            clicks: 0
            }
     ],
};

var controller = {
    init: () => {

        catView.init();
        catListView.init();
    },
    setCurrentCat: (cat) => {
        model.currentCat = cat;
    },
    getCurrentCat: () => {
        return model.currentCat;
    },
    getCats: () => {
        return model.cats;
    },
    incrementClicks: () => {
        model.currentCat.clicks++;
        catView.render();
    }
};

var catListView = {
    init: () => {
        this.catListElement = document.getElementById('cats-list');
        catListView.render();
    },
    render: () => {
        model.cats.forEach((cat) => {
            var elementLi = document.createElement('li');
            elementLi.innerHTML = cat.name;

            elementLi.addEventListener('click', ((catCopy) => {
                return () => {
                    controller.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            this.catListElement.appendChild(elementLi);
        });
    }
};

var catView = {
    init: () => {
        this.catName = document.getElementById('cat-name');
        this.catImage = document.getElementById('cat-image');
        this.catClicks = document.getElementById('cat-clicks');

        this.catImage.addEventListener('click', () => {
            controller.incrementClicks();
        });
        controller.setCurrentCat(model.cats[0]);
        catView.render();
    },
    render: () => {
        var currentcat = controller.getCurrentCat();

        this.catName.innerHTML = currentcat.name;
        this.catImage.setAttribute('src', currentcat.picture);
        this.catClicks.innerHTML = currentcat.clicks;
    }
}
controller.init();
