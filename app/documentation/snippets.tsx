export const snippets = [
    [
        "/quotes/random", 
        `None`,
        `
        {
            "id": "1",
            "quote": "Happiness depends upon ourselves.",
            "author": "Aristotle",
            "category": "positivity",
            "language": "english",
            "date_added": "2023-11-20T14:45:00Z",
            "popularity": 9.2
        }
        `
    ],

    [
        "/quotes/id", 
        `TYPE: Integer`,
        `
        {
            "id": "2",
            "quote": "Act as if what you do makes a difference. It does.",
            "author": "William James",
            "category": "motivational",
            "language": "english",
            "date_added": "2024-02-01T08:15:00Z",
            "popularity": 8.7
        }
        `
    ],

    [
        "/quotes/category/{category}", 
        `TYPE: String,
enum: ["motivation", "affirmation", "fitness", "relationship", "positivity"]`,
        `
        [
            {
                "id": "3",
                "quote": "The only way to do great work is to love what you do.",
                "author": "Steve Jobs",
                "category": "motivational",
                "language": "english",
                "date_added": "2023-10-05T12:00:00Z",
                "popularity": 9.5
            },
            {
                "id": "4",
                "quote": "Believe you can and you're halfway there.",
                "author": "Theodore Roosevelt",
                "category": "motivational",
                "language": "english",
                "date_added": "2022-09-18T09:30:00Z",
                "popularity": 9.0
            }
        ]
        `
    ],

    [
        "/quotes/author/{author}", 
        `TYPE: String`,
        `
        [
            {
                "id": "5",
                "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                "author": "Winston Churchill",
                "category": "affirmations",
                "language": "english",
                "date_added": "2023-06-21T16:10:00Z",
                "popularity": 8.8
            },
            {
                "id": "6",
                "quote": "Do what you can, with what you have, where you are.",
                "author": "Winston Churchill",
                "category": "positivity",
                "language": "english",
                "date_added": "2021-12-30T11:20:00Z",
                "popularity": 9.3
            }
        ]
        `
    ],

    [
        "/quotes/popularity/{popularity}", 
        `TYPE: Float,
enum: ["<", "between", ">"]`,
        `
        [
            {
                "id": "7",
                "quote": "Quality is not an act, it is a habit.",
                "author": "Aristotle",
                "category": "fitness",
                "language": "english",
                "date_added": "2023-04-12T07:45:00Z",
                "popularity": 9.6
            },
            {
                "id": "8",
                "quote": "With the new day comes new strength and new thoughts.",
                "author": "Eleanor Roosevelt",
                "category": "affirmations",
                "language": "english",
                "date_added": "2022-07-15T13:25:00Z",
                "popularity": 9.1
            }
        ]
        `
    ],

    [
        "/quotes/language/{language}", 
        `TYPE: String,
enum: ["english", "sanskrit"]`,
        `
        [
            {
                "id": "9",
                "quote": "स्वयमेव मृगेंद्रता।",
                "author": "Chanakya",
                "category": "motivational",
                "language": "sanskrit",
                "date_added": "2022-03-27T18:00:00Z",
                "popularity": 8.9
            },
            {
                "id": "10",
                "quote": "धर्मो रक्षति रक्षितः।",
                "author": "Manusmriti",
                "category": "affirmations",
                "language": "sanskrit",
                "date_added": "2021-11-03T15:10:00Z",
                "popularity": 8.7
            }
        ]
        `
    ],

    [
        "/quotes/date/{date}", 
        `TYPE: Date,
enum: ["<", "between", ">"]`,
        `
        [
            {
                "id": "11",
                "quote": "A journey of a thousand miles begins with a single step.",
                "author": "Lao Tzu",
                "category": "motivational",
                "language": "english",
                "date_added": "2022-05-14T20:40:00Z",
                "popularity": 9.0
            },
            {
                "id": "12",
                "quote": "The best way to predict the future is to create it.",
                "author": "Peter Drucker",
                "category": "inspiration",
                "language": "english",
                "date_added": "2023-08-09T05:30:00Z",
                "popularity": 9.4
            }
        ]`
    ]
];
