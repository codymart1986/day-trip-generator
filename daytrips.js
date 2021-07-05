let destinations = ['Seattle', 'Tacoma', 'Puyallup', 'Mt Rainier', 'Bonney Lake'];
let restaurants = ['Fast-Food', 'Chinese', 'Mexican', 'BBQ', 'Sushi', 'Indian'];
let formOfTransportation = ['Ride-share', 'Car', 'Truck', 'Train', 'Bus', 'Limo'];
let entertainment = ['Movie', 'Dancing', 'Shopping', 'Hiking', 'Museum', 'Theater', 'Pub-Crawl'];

let destination = destinations[Math.floor(Math.random() * destinations.length)];
let restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
let transportationType = formOfTransportation[Math.floor(Math.random() * formOfTransportation.length)];
let entertainmentType = entertainment[Math.floor(Math.random() * entertainment.length)];

let approved = false;

while(approved == false) {
    var userResponse = prompt(`1. Destination: ${destination}
                               2. restaurant: ${restaurant} \n
                               3. transportationType: ${transportationType} \n
                               4. entertainmentType: ${entertainmentType} \n
                               5. Complete
                Select an option you want to change     
    `);
    
    if(userResponse == 1){
        destination = destinations[Math.floor(Math.random() * destinations.length)]; 
    };
    if(userResponse == 2){
        restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    }
    if(userResponse == 3){
        transportationType = formOfTransportation[Math.floor(Math.random() * formOfTransportation.length)];
    }
    if(userResponse == 4){
        entertainmentType = entertainment[Math.floor(Math.random() * entertainment.length)];
    }
    if(userResponse == 5){
        approved = true;
        console.log(`1. Destination: ${destination}
                     2. restaurant: ${restaurant} \n
                     3. transportationType: ${transportationType} \n
                     4. entertainmentType: ${entertainmentType} \n`)
    }

    if(userResponse < 1 || userResponse > 5){

    }
}
