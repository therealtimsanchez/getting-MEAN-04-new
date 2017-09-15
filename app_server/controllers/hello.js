module.exports.pizza = function(req, res) {
    res.render('pizza-list', {
        title: 'Best Pizza Resturants near you!',
        content: 'Tims Resturant Help was created to help people find places to sit down and get a bit of work done, or even enjoy a nice dinner or cup of coffee!',
         pageHeader: {
            title: '',
            strapline: 'Tim will give you the best advice on where to get your next cup of coffee!'
        },
        sidebar: "Looking for wifi and a seat? Tims resturant help, helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Tim help you find the place you're looking for.",
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        }, {
            name: 'Burger Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
        
        
    });
};

module.exports.pizzaInfo = function(req, res) {
    res.render('location-info', {
        title: 'Pizza Planet',
        pageHeader: {
            title: 'Pizza Planet'
        },
        sidebar: {
            context: 'is on Tims Resturant Help because it has the best pizza in Amarillo!',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Pizza Planet',
            address: '2400 Paramount Blvd, Amarillo, TX',
            rating: 4,
            facilities: ['Best Pizza Around', 'Arcade Games', 'Premium wifi'],
            coords: {
                lat: 35.1887935,
                lng: -101.87386830000003
            },
            openingTimes: [{
                days: 'Monday - Thursday',
                opening: '11:00am',
                closing: '11:00pm',
                closed: false
            }, {
                days: 'Friday - Saturday',
                opening: '11:00am',
                closing: '12:00am',
                closed: false
            }, {
                days: 'Sunday',
                opening: '11:00am',
                closing: '11:00pm',
                closed: false
            }],
            reviews: [{
                author: 'Thera Chavezs',
                rating: 4,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it. Their ranch is BOMB!'
            }, {
                author: 'Tim Sanchez',
                rating: 3,
                timestamp: '16 July 2013',
                reviewText: 'It was alright.'
            }]
        }
    });
};

module.exports.pizzaReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};


