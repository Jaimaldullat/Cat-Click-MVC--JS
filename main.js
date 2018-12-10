/**************
MODEL
***************/

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

/**************
Controller
***************/

var controller = {
    // Initialize
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

/**************
Cat List View
***************/

var catListView = {
    init: () => {
        // Get catlist UL elemnt
        this.catListElement = document.getElementById('cats-list');
        // Call catlistview
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

/**************
Single Cat View
***************/

var catView = {
    // Initialize
    init: () => {
        // Result elements
        this.catName = document.getElementById('cat-name');
        this.catImage = document.getElementById('cat-image');
        this.catClicks = document.getElementById('cat-clicks');

        // Add image click event listener
        this.catImage.addEventListener('click', () => {
            controller.incrementClicks();
        });
        // Set first cat in starting
        controller.setCurrentCat(model.cats[0]);
        catView.render();
    },
    render: () => {
        // Get current cat and show on page
        var currentcat = controller.getCurrentCat();

        this.catName.innerHTML = currentcat.name;
        this.catImage.setAttribute('src', currentcat.picture);
        this.catClicks.innerHTML = 'Click count: ' + currentcat.clicks;
    }
}
// Initialize process
controller.init();
