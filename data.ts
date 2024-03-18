const sportsWithUnderscores = [
    "arm_wrestling",
    "atheletics",
    "badminton",
    "chess",
    "cricket",
    "football",
    "handball",
    "lawn_tennis",
    "shotput",
    "skipping",
    "tabletennis",
    "taekondo",
    "volleyball",
    "weight_lifting"
];

const pastelColors = [
    "#FFF1EB",
    "#FAFAEF",
    "#F2F0F9",
    "#F2F5F7"
];

const capitalizeFirstLetter = (str: string) => {
    return str.toLowerCase().replace(/(^|\s)\S/g, function (firstLetter) {
        return firstLetter.toUpperCase();
    });
};

const generateRandomPastelColor = () => {
    return pastelColors[Math.floor(Math.random() * pastelColors.length)];
};

export const SportsCarouselImages = sportsWithUnderscores.map((sportName, index) => {
    const formattedText = capitalizeFirstLetter(sportName.replace(/_/g, ' '));
    return {
        path: `/assets/carousel/${sportName}.svg`,
        text: formattedText,
        bgcolor: generateRandomPastelColor(),
    };
});



export const SportsCarouselImages2 = [
    {
        path: "/assets/carousel/tennis.svg",
        text: "Tennis",
        bgcolor: "#FFF1EB",
    },
    {
        path: "/assets/carousel/badminton.svg",
        text: "Badminton",
        bgcolor: '#FAFAEF',

    },
    {
        path: "/assets/carousel/football.svg",
        text: "Football",
        bgcolor: "#F2F0F9",

    },
    {
        path: "/assets/carousel/cricket.svg",
        text: "Cricket",
        bgcolor: "#F2F5F7",
    },
    {
        path: "/assets/carousel/tennis.svg",
        text: "Tennis",
        bgcolor: "#FFF1EB",
    },
    {
        path: "/assets/carousel/badminton.svg",
        text: "Badminton",
        bgcolor: '#FAFAEF',

    },
    {
        path: "/assets/carousel/football.svg",
        text: "Football",
        bgcolor: "#F2F0F9",

    },
    {
        path: "/assets/carousel/cricket.svg",
        text: "Cricket",
        bgcolor: "#F2F5F7",
    },
]

export const TeamGridData = [
    {
        path: "/next.svg",
        name: "John Doe",
        role: "President",
    },
    {
        path: "/next.svg",
        name: "John Doe",
        role: "President",
    }, {
        path: "/next.svg",
        name: "John Doe",
        role: "President",
    }, {
        path: "/next.svg",
        name: "John Doe",
        role: "President",
    }, {
        path: "/next.svg",
        name: "John Doe",
        role: "President",
    }, {
        path: "/next.svg",
        name: "John Doe",
        role: "President",
    }, {
        path: "/next.svg",
        name: "John Doe",
        role: "President",
    },
]

export const ContactUsData = [
    {
        number: "+91 8178129896",
        name: "Raja Kumar",
        role: "Treasurer",
    },
    {
        number: "+91 9760344552",
        name: "Shubh Goel",
        role: "Secretary",
    },
    {
        number: "+91 9899210863",
        name: "Deepanshi Mishra",
        role: "Secretary",
    },
]

export const SportsIconsData = [
    {
        iconPath: "/assets/images/sport_icon_1.svg",
        brushStrokePath: "/assets/images/brush_stroke_red.svg",
        styles: {

        }
    },
    {
        iconPath: "/assets/images/sport_icon_2.svg",
        brushStrokePath: "/assets/images/brush_stroke_green.svg",
        styles: {
            top: "10",
        }
    },
    {
        iconPath: "/assets/images/sport_icon_3.svg",
        brushStrokePath: "/assets/images/brush_stroke_yellow.svg",
        styles: {
            top: "6",
        }
    },
    {
        iconPath: "/assets/images/sport_icon_4.svg",
        brushStrokePath: "/assets/images/brush_stroke_blue.svg",
        styles: {
            top: "10",

        }
    },
    {
        iconPath: "/assets/images/sport_icon_5.svg",
        brushStrokePath: "/assets/images/brush_stroke_yellow.svg",
        styles: {
            top: "10",
        }
    },
    {
        iconPath: "/assets/images/sport_icon_6.svg",
        brushStrokePath: "/assets/images/brush_stroke_green.svg",
        styles: {
        }
    },
    {
        iconPath: "/assets/images/sport_icon_7.svg",
        brushStrokePath: "/assets/images/brush_stroke_red.svg",
        styles: {
            
        }
    },

]

export const SportsMarqueeData = [
    "Atheletics", "Chess", "Tennis", "Badminton", "Cricket", "Football", "Weight Lifitng", "Badminton", "Table Tennis",
]