# This app shows you where you can find the best coffee and pizza near you!

###### How this works - this app works by letting the user see the best coffee places in town and their ratings. With our new and improved app, you will now see the best pizza places in town. With this we just added Pizza Planet out of Amarillo, we will soon continue to add more pizza places as we get the request and reviews!

[This github repo helped us create the app that we provide to the community!](https://github.com/simonholmes/getting-MEAN)

## Some behind the stuff to how we created this app

```javascript 

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

```

### above shows the code how we process the coffee list and the pizza places. This is the code to generate the pizza planet page, with reviews, a map and times to know when to go!

# This app will continue to grow and we will keep adding places to make your experience in the area even better, enjoy!
