// Shared state records data — included by index.html, platform.html, state-record-attempts.html
const BUILTIN_M_RECORDS = {
    "114": {
        sq:    { weight: 315, name: "Diondre Blake",    school: "Kalkaska" },
        bp:    { weight: 215, name: "Diondre Blake",    school: "Kalkaska" },
        dl:    { weight: 375, name: "Eric Fuller",      school: "Atherton" },
        total: { weight: 855, name: "Diondre Blake",    school: "Kalkaska" }
    },
    "123": {
        sq:    { weight: 330, name: "Nick Abalos",      school: "Lakeview" },
        bp:    { weight: 235, name: "Blake Brutton",    school: "Flushing" },
        dl:    { weight: 410, name: "Josh Heath",       school: "Lakeland" },
        total: { weight: 915, name: "Evan Wilkes",      school: "St. Joseph" }
    },
    "132": {
        sq:    { weight: 380, name: "Kaden Elzinga",    school: "Grandville" },
        bp:    { weight: 265, name: "Henry Baker",      school: "Johanesburg-Lewiston" },
        dl:    { weight: 500, name: "Henry Baker",      school: "Johanesburg-Lewiston" },
        total: { weight: 1075, name: "Sean Murray",     school: "Holly" }
    },
    "145": {
        sq:    { weight: 420, name: "Jake Mathews",     school: "Almont" },
        bp:    { weight: 280, name: "William Herman",   school: "Cros-Lex" },
        dl:    { weight: 540, name: "Jaime Cardenas",   school: "Holly" },
        total: { weight: 1195, name: "Jaime Cardenas",  school: "Holly" }
    },
    "155": {
        sq:    { weight: 465, name: "John Herman",      school: "Cros-Lex" },
        bp:    { weight: 315, name: "Conner Lipinski",  school: "Nouvel" },
        dl:    { weight: 535, name: "Sam Lopez",        school: "Lake Orion" },
        total: { weight: 1240, name: "John Herman",     school: "Cros-Lex" }
    },
    "165": {
        sq:    { weight: 510, name: "Tony Groppi",      school: "Cros-Lex" },
        bp:    { weight: 330, name: "Cameron Fern",     school: "Holly" },
        dl:    { weight: 615, name: "Ethan Tran",       school: "Grandville" },
        total: { weight: 1365, name: "Ethan Tran",      school: "Grandville" }
    },
    "181": {
        sq:    { weight: 520, name: "Tyler Titchell",   school: "Yale" },
        bp:    { weight: 360, name: "Isaiah Miller",    school: "Edwardsburg" },
        dl:    { weight: 605, name: "Sam Lopez",        school: "Lake Orion" },
        total: { weight: 1430, name: "Tyler Titchell",  school: "Yale" }
    },
    "194": {
        sq:    { weight: 535, name: "Francis Morgan",   school: "Hamady" },
        bp:    { weight: 375, name: "Jacek Klebba",     school: "Romeo" },
        dl:    { weight: 625, name: "Matt Weisberg",    school: "Chelsea" },
        total: { weight: 1455, name: "Matt Weisberg",   school: "Chelsea" }
    },
    "207": {
        sq:    { weight: 535, name: "Nick Groppi",      school: "Cros-Lex" },
        bp:    { weight: 425, name: "Taylor Bryant",    school: "Oxford" },
        dl:    { weight: 660, name: "Nick Groppi",      school: "Cros-Lex" },
        total: { weight: 1450, name: "Vincent Gjokaj",  school: "Walled Lake Western" }
    },
    "220": {
        sq:    { weight: 550, name: "Parker Graham",    school: "Michigan Center" },
        bp:    { weight: 380, name: "Quentin Faynor",   school: "Maple Valley" },
        dl:    { weight: 635, name: "Wes Russell",      school: "Whitehall" },
        total: { weight: 1510, name: "Wes Russell",     school: "Whitehall" }
    },
    "242": {
        sq:    { weight: 605, name: "Trenton Elkins",   school: "Lake Orion" },
        bp:    { weight: 420, name: "Trenton Elkins",   school: "Lake Orion" },
        dl:    { weight: 650, name: "David Deman",      school: "Troy Athens" },
        total: { weight: 1640, name: "Trenton Elkins",  school: "Lake Orion" }
    },
    "275": {
        sq:    { weight: 615, name: "Reese Worden",     school: "Standish Sterling" },
        bp:    { weight: 435, name: "Jordan Belknap",   school: "Bedford" },
        dl:    { weight: 700, name: "Roman Ignagni",    school: "Hartland" },
        total: { weight: 1700, name: "Roman Ignagni",   school: "Hartland" }
    },
    "SHW": {
        sq:    { weight: 660, name: "Deonco Brown",     school: "Flushing" },
        bp:    { weight: 425, name: "Erick Lewis",      school: "Mount Morris" },
        dl:    { weight: 700, name: "Anthony Clark",    school: "WOLL" },
        total: { weight: 1710, name: "Anthony Clark",   school: "WOLL" }
    }
};

const BUILTIN_W_RECORDS = {
    "105": {
        sq:    { weight: 310, name: "Delaney Sousley",    school: "Edwardsburg" },
        bp:    { weight: 150, name: "Delaney Sousley",    school: "Edwardsburg" },
        dl:    { weight: 325, name: "Delaney Sousley",    school: "Edwardsburg" },
        total: { weight: 785, name: "Delaney Sousley",    school: "Edwardsburg" }
    },
    "114": {
        sq:    { weight: 255, name: "Abby Franklin",      school: "Alcona" },
        bp:    { weight: 140, name: "Ashley Cordray",     school: "Whitehall" },
        dl:    { weight: 315, name: "Emily Jacot",        school: "Kearsley" },
        total: { weight: 650, name: "Alexa Burgess",      school: "Napoleon" }
    },
    "123": {
        sq:    { weight: 265, name: "Lira Bordoley",      school: "Seaholm" },
        bp:    { weight: 160, name: "Corinna Parker",     school: "Cros-Lex" },
        dl:    { weight: 350, name: "Grace Vanarendonk",  school: "Mona Shores" },
        total: { weight: 725, name: "Brooke Romeo",       school: "Whitmore Lake" }
    },
    "132": {
        sq:    { weight: 320, name: "Joselyn Stouffer",   school: "Rockford" },
        bp:    { weight: 170, name: "Katie Marsh",        school: "Marcellus" },
        dl:    { weight: 365, name: "Kendra Miller",      school: "Plainwell" },
        total: { weight: 805, name: "Joselyn Stouffer",   school: "Rockford" }
    },
    "140": {
        sq:    { weight: 280, name: "Monroe Grifhorst",   school: "Grandville" },
        bp:    { weight: 175, name: "Jaela Krosnicki",    school: "Yale" },
        dl:    { weight: 375, name: "Madison Diamond",    school: "Montague" },
        total: { weight: 780, name: "Jaela Krosnicki",    school: "Yale" }
    },
    "148": {
        sq:    { weight: 335, name: "Sarah Adams",        school: "Stoney Creek" },
        bp:    { weight: 175, name: "Kel-C Howard",       school: "Mancelona" },
        dl:    { weight: 400, name: "Madison Diamond",    school: "Montague" },
        total: { weight: 885, name: "Sarah Adams",        school: "Stoney Creek" }
    },
    "155": {
        sq:    { weight: 330, name: "Crystal Krupp",      school: "Fenton" },
        bp:    { weight: 185, name: "Maelie Hope",        school: "Whitehall" },
        dl:    { weight: 410, name: "Crystal Krupp",      school: "Fenton" },
        total: { weight: 905, name: "Crystal Krupp",      school: "Fenton" }
    },
    "165": {
        sq:    { weight: 350, name: "Reya Johnson",       school: "Troy Athens" },
        bp:    { weight: 240, name: "Maelle Hope",        school: "Whitehall" },
        dl:    { weight: 400, name: "Crystal Krupp",      school: "Fenton" },
        total: { weight: 920, name: "Maelle Hope",        school: "Whitehall" }
    },
    "181": {
        sq:    { weight: 365, name: "Alizza Schieber",    school: "Constantine" },
        bp:    { weight: 220, name: "Alizza Schieber",    school: "Constantine" },
        dl:    { weight: 390, name: "Shannon Moore",      school: "Grandville" },
        total: { weight: 945, name: "Alizza Schieber",    school: "Constantine" }
    },
    "198": {
        sq:    { weight: 385, name: "Alizza Schieber",    school: "Constantine" },
        bp:    { weight: 230, name: "Alizza Schieber",    school: "Constantine" },
        dl:    { weight: 420, name: "Mikayla Twum",       school: "Troy Athens" },
        total: { weight: 1020, name: "Alizza Schieber",   school: "Constantine" }
    },
    "220": {
        sq:    { weight: 370, name: "Abby Lemimg",        school: "Lake Orion" },
        bp:    { weight: 230, name: "Tori Harding",       school: "Lakeville" },
        dl:    { weight: 425, name: "Mikayla Twum",       school: "Troy Athens" },
        total: { weight: 920, name: "Brayley West",       school: "Lake Fenton" }
    },
    "242": {
        sq:    { weight: 395, name: "Evelyn Edenburn",    school: "Goodrich" },
        bp:    { weight: 175, name: "Madison Brooks",     school: "Port Huron" },
        dl:    { weight: 450, name: "Willow Tetmeyer",    school: "Goodrich" },
        total: { weight: 985, name: "Evelyn Edenburn",    school: "Goodrich" }
    },
    "SHW": {
        sq:    { weight: 430, name: "Hailey Ryan",        school: "Shepherd" },
        bp:    { weight: 225, name: "Hailey Ryan",        school: "Shepherd" },
        dl:    { weight: 445, name: "Hailey Ryan",        school: "Shepherd" },
        total: { weight: 1100, name: "Hailey Ryan",       school: "Shepherd" }
    }
};

// Call this on app start to ensure records are always available in localStorage
function initStateRecordsStorage() {
    if (!localStorage.getItem('trplStateRecords2_M')) {
        localStorage.setItem('trplStateRecords2_M', JSON.stringify(BUILTIN_M_RECORDS));
    }
    if (!localStorage.getItem('trplStateRecords2_W')) {
        localStorage.setItem('trplStateRecords2_W', JSON.stringify(BUILTIN_W_RECORDS));
    }
}
