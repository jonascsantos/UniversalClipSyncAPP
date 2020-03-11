const clipboard = {

};

const recents = [
    //Stored Locally
    {
        id: 1,
        content: 'This is a sent text.',
    },
    {
        id: 2,
        content: 'This is a another sent text.'
    },
    {
        id: 3,
        content: 'Lorem Ipsum Dolor.'
    },
    {
        id: 4,
        content: 'Copied and sent'
    },

];

const favourites = [
    //Stored on DB
    {
        id: 1,
        content: 'This is a sent text.',
    },
    {
        id: 2,
        content: 'This is a another sent text.'
    },
    {
        id: 3,
        content: 'Lorem Ipsum Dolor.'
    },
];

const devices = [
    //Stored on DB  
    {
        id: 1,
        name: 'My Iphone',
        device: 'iPhone 11',
        system: 'IOS',
        image: require('../assets/images/phone.png'),
        ready: true,
    },
    {
        id: 2,
        name: 'My Android',
        device: 'Xiaomi Mi 9T',
        system: 'Android 10',
        image: require('../assets/images/phone.png'),
        ready: true,
    },
    {
        id: 3,
        name: 'Android 2',
        device: 'Samsung Galaxy S9',
        system: 'Android 10',
        image: require('../assets/images/phone.png'),
        ready: false,
    },
    {
        id: 4,
        name: 'Desktop',
        device: 'Desktop',
        system: 'Windows 10',
        image: require('../assets/images/computer.png'),
        ready: true,
    },
];

const profile = {
    //Stored on DB
    username: 'Jonas dos Santos',
    location: 'Europe',
    email: 'jonas.cassiano@hotmail.com',
    avatar: require('../assets/images/avatar.png'),
    connected: 4,
};


export {
    clipboard,
    recents,
    favourites,
    devices,
    profile
}