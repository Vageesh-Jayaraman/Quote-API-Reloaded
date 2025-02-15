export const snippets = [
    [
        "/api/random",
        "None",
        "/api/random",
        `
        {
            "id": "1",
            "quote": "Happiness depends upon ourselves.",
            "author": "Aristotle",
            "category": "positivity",
            "language": "english",
            "date_added": "2023-11-20",
            "popularity": 9.2
        }
        `
    ],
    [
        "/api/{id}",
        "TYPE: Integer",
        "/api/2",
        `
        {
            "id": "2",
            "quote": "Act as if what you do makes a difference. It does.",
            "author": "William James",
            "category": "motivation",
            "language": "english",
            "date_added": "2024-02-01",
            "popularity": 8.7
        }
        `
    ],
    [
        "/api/category/{category}",
        `TYPE: String 
enum: ['motivation', 'affirmation', 'fitness', 'relationship', 'positivity']`,
        "/api/category/motivation",
        `
        [
            {
                "id": "3",
                "quote": "The only way to do great work is to love what you do.",
                "author": "Steve Jobs",
                "category": "motivation",
                "language": "english",
                "date_added": "2023-10-05",
                "popularity": 9.5
            },
            {
                "id": "4",
                "quote": "Believe you can and you're halfway there.",
                "author": "Theodore Roosevelt",
                "category": "motivation",
                "language": "english",
                "date_added": "2022-09-18",
                "popularity": 9.0
            }
        ]
        `
    ],
    [
        "/api/author/{author}",
        "TYPE: String",
        "/api/author/Winston%20Churchill",
        `
        [
            {
                "id": "5",
                "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                "author": "Winston Churchill",
                "category": "affirmation",
                "language": "english",
                "date_added": "2023-06-21",
                "popularity": 8.8
            },
            {
                "id": "6",
                "quote": "Do what you can, with what you have, where you are.",
                "author": "Winston Churchill",
                "category": "positivity",
                "language": "english",
                "date_added": "2021-12-30",
                "popularity": 9.3
            }
        ]
        `
    ],
    [
        "/api/popularity-range?minPopularity={minPopularity}&maxPopularity={maxPopularity}",
        "TYPE: Float (0.0 - 10.0)",
        "/api/popularity-range?minPopularity=9.0&maxPopularity=9.6",
        `
        [
            {
                "id": "7",
                "quote": "Quality is not an act, it is a habit.",
                "author": "Aristotle",
                "category": "fitness",
                "language": "english",
                "date_added": "2023-04-12",
                "popularity": 9.6
            },
            {
                "id": "8",
                "quote": "With the new day comes new strength and new thoughts.",
                "author": "Eleanor Roosevelt",
                "category": "affirmation",
                "language": "english",
                "date_added": "2022-07-15",
                "popularity": 9.1
            }
        ]
        `
    ],
    [
        "/api/language/{language}",
        `TYPE: String
enum: ['english', 'sanskrit']`,
        "/api/language/sanskrit",
        `
        [
            {
                "id": "9",
                "quote": "स्वयमेव मृगेंद्रता।",
                "author": "Chanakya",
                "category": "motivation",
                "language": "sanskrit",
                "date_added": "2022-03-27",
                "popularity": 8.9
            },
            {
                "id": "10",
                "quote": "धर्मो रक्षति रक्षितः।",
                "author": "Manusmriti",
                "category": "affirmation",
                "language": "sanskrit",
                "date_added": "2021-11-03",
                "popularity": 8.7
            }
        ]
        `
    ],
    [
        "/api/date-range?startDate={startDate}&endDate={endDate}",
        "TYPE: Date (YYYY-MM-DD)",
        "/api/date-range?startDate=2022-05-14&endDate=2023-08-09",
        `
        [
            {
                "id": "11",
                "quote": "A journey of a thousand miles begins with a single step.",
                "author": "Lao Tzu",
                "category": "motivation",
                "language": "english",
                "date_added": "2022-05-14",
                "popularity": 9.0
            },
            {
                "id": "12",
                "quote": "The best way to predict the future is to create it.",
                "author": "Peter Drucker",
                "category": "inspiration",
                "language": "english",
                "date_added": "2023-08-09",
                "popularity": 9.4
            }
        ]
        `
    ]
];