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
    {
        id: 5,
        content: 'This is a another sent text.'
    },
    {
        id: 6,
        content: 'Lorem Ipsum Dolor.'
    },
    {
        id: 7,
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
        name: 'My Android',
        device: 'Xiaomi Mi 9T',
        icon: ["Ionicons", "ios-phone-portrait"],
        status: 'disabled',
    },
    {
        id: 2,
        name: 'My iPhone',
        device: 'iPhone 11',
        icon: ["Ionicons", "ios-phone-portrait"],
        status: 'ready',
    },
    {
        id: 3,
        name: 'Android 2',
        device: 'Samsung Galaxy S10+',
        icon: ["Ionicons", "ios-phone-portrait"],
        status: 'warning',
    },
    {
        id: 4,
        name: 'Desktop',
        device: 'Windows 10 Device',
        icon: ["Entypo", "windows-store"],
        status: 'ready',
    },
    {
        id: 5,
        name: 'Android 2',
        device: 'Samsung Galaxy S10+',
        icon: ["Ionicons", "ios-desktop"],
        status: 'disabled',
    },
    {
        id: 6,
        name: 'Linux Device',
        device: 'Linux Device',
        icon: ["FontAwesome", "linux"],
        status: 'disabled',
    },
];

const profile = {
    //Stored on DB
    username: 'Jonas dos Santos',
    location: 'Europe',
    email: 'jonas.cassiano@hotmail.com',
    avatar: require('../assets/images/avatar.jpeg'),
    connected: 4,
};


export {
    clipboard,
    recents,
    favourites,
    devices,
    profile
}