 const colors_of_properties = {
  "Blue": "#5656f5",
  "Green": "#008000",
  "Yellow": "#FFFF00",
  "Red": "#FF0000",
  "Orange": "#FFA500",
  "Pink": "#FF69B4",
  "Light_Blue": "#ADD8E6",
  "Brown": "#A52A2A",
  "Inherit":"inherit",
};


const card_details = {
  "cities": { 
    "Rasayani": {
      "Card_Color": "#A52A2A",
      "City": "Rasayani",
      "Purchase_Price": "$60",
      "Rent": "$2",
      "Rent_with_1_House": "$10",
      "Rent_with_2_Houses": "$30",
      "Rent_with_3_Houses": "$90",
      "Rent_with_4_Houses": "$160",
      "Rent_with_Hotel": "$250",
      "House_Price": "$50",
      "Hotel_Price": "$50",
      "Mortgage_Price": "$30"
    },
    "Community_Chest_1":{
      "Card_Color":"inherit",
      "City":"Community Chest",
    },
    "Karjat": {
      "Card_Color": "#A52A2A",
      "City": "Karjat",
      "Purchase_Price": "$60",
      "Rent": "$4",
      "Rent_with_1_House": "$20",
      "Rent_with_2_Houses": "$60",
      "Rent_with_3_Houses": "$180",
      "Rent_with_4_Houses": "$320",
      "Rent_with_Hotel": "$450",
      "House_Price": "$50",
      "Hotel_Price": "$50",
      "Mortgage_Price": "$30"
    },
    "Income_Tax":{
      "Card_Color":"inherit",
      "City":"Income Tax",
      "Purchase_Price": "$200",
    },
    "Turbhe Station": {
      "Card_Color": "inherit",
      "City": "Turbhe Station",
      "Purchase_Price": "$200",
      "Rent": "$25",
      "Rent_with_1_Railroads": "$20",
      "Rent_with_2_Railroads": "$50",
      "Rent_with_3_Railroads": "$100",
      "Rent_with_4_Railroads": "$200",
      "Mortgage_Price": "$100"
    },
    "Turbhe": {
      "Card_Color": "#ADD8E6",
      "City": "Turbhe",
      "Purchase_Price": "$100",
      "Rent": "$6",
      "Rent_with_1_House": "$30",
      "Rent_with_2_Houses": "$90",
      "Rent_with_3_Houses": "$270",
      "Rent_with_4_Houses": "$400",
      "Rent_with_Hotel": "$550",
      "House_Price": "$50",
      "Hotel_Price": "$50",
      "Mortgage_Price": "$50"
    },
    "Chance_1":{
      "Card_Color":"inherit",
      "City":"Chance",
    },
    "Kopar Kairane": {
      "Card_Color": "#ADD8E6",
      "City": "Kopar Kairane",
      "Purchase_Price": "$100",
      "Rent": "$6",
      "Rent_with_1_House": "$30",
      "Rent_with_2_Houses": "$90",
      "Rent_with_3_Houses": "$270",
      "Rent_with_4_Houses": "$400",
      "Rent_with_Hotel": "$550",
      "House_Price": "$50",
      "Hotel_Price": "$50",
      "Mortgage_Price": "$50"
    },
    "Ghansoli": {
      "Card_Color": "#ADD8E6",
      "City": "Ghansoli",
      "Purchase_Price": "$120",
      "Rent": "$8",
      "Rent_with_1_House": "$40",
      "Rent_with_2_Houses": "$100",
      "Rent_with_3_Houses": "$300",
      "Rent_with_4_Houses": "$450",
      "Rent_with_Hotel": "$600",
      "House_Price": "$50",
      "Hotel_Price": "$50",
      "Mortgage_Price": "$60"
    },
    "Airoli": {
      "Card_Color": "#FF69B4",
      "City": "Airoli",
      "Purchase_Price": "$140",
      "Rent": "$10",
      "Rent_with_1_House": "$50",
      "Rent_with_2_Houses": "$150",
      "Rent_with_3_Houses": "$450",
      "Rent_with_4_Houses": "$625",
      "Rent_with_Hotel": "$750",
      "House_Price": "$100",
      "Hotel_Price": "$100",
      "Mortgage_Price": "$70"
    },
    "Electric Company": {
      "Card_Color": "inherit",
      "City": "Electric Company",
      "Purchase_Price": "$150",
      "Rent": "Dice roll * 4 times the roll if one utility is owned, or * 10 times the roll if both utilities are owned",
      "Mortgage_Price": "$75"
    },
    "Uran": {
      "Card_Color": "#FF69B4",
      "City": "Uran",
      "Purchase_Price": "$140",
      "Rent": "$10",
      "Rent_with_1_House": "$50",
      "Rent_with_2_Houses": "$150",
      "Rent_with_3_Houses": "$450",
      "Rent_with_4_Houses": "$625",
      "Rent_with_Hotel": "$750",
      "House_Price": "$100",
      "Hotel_Price": "$100",
      "Mortgage_Price": "$70"
    },
    "Ulew": {
      "Card_Color": "#FF69B4",
      "City": "Ulew",
      "Purchase_Price": "$160",
      "Rent": "$12",
      "Rent_with_1_House": "$60",
      "Rent_with_2_Houses": "$180",
      "Rent_with_3_Houses": "$500",
      "Rent_with_4_Houses": "$700",
      "Rent_with_Hotel": "$900",
      "House_Price": "$100",
      "Hotel_Price": "$100",
      "Mortgage_Price": "$80"
    },
    "Ulwe Station": {
      "Card_Color": "inherit",
      "City": "Ulwe Station",
      "Purchase_Price": "$200",
      "Rent": "$25",
      "Rent_with_2_Railroads": "$50",
      "Rent_with_3_Railroads": "$100",
      "Rent_with_4_Railroads": "$200",
      "Mortgage_Price": "$100"
    },
    "Pushpak Nagar": {
      "Card_Color": "#FFA500",
      "City": "Pushpak Nagar",
      "Purchase_Price": "$180",
      "Rent": "$14",
      "Rent_with_1_House": "$70",
      "Rent_with_2_Houses": "$200",
      "Rent_with_3_Houses": "$550",
      "Rent_with_4_Houses": "$750",
      "Rent_with_Hotel": "$950",
      "House_Price": "$100",
      "Hotel_Price": "$100",
      "Mortgage_Price": "$90"
    },
    "Community_Chest_2":{
      "Card_Color":"inherit",
      "City":"Community Chest",
    },
    "Dronagiri": {
      "Card_Color": "#FFA500",
      "City": "Dronagiri",
      "Purchase_Price": "$180",
      "Rent": "$14",
      "Rent_with_1_House": "$70",
      "Rent_with_2_Houses": "$200",
      "Rent_with_3_Houses": "$550",
      "Rent_with_4_Houses": "$750",
      "Rent_with_Hotel": "$950",
      "House_Price": "$100",
      "Hotel_Price": "$100",
      "Mortgage_Price": "$90"
    },
    "Taloja": {
      "Card_Color": "#FFA500",
      "City": "Taloja",
      "Purchase_Price": "$200",
      "Rent": "$16",
      "Rent_with_1_House": "$80",
      "Rent_with_2_Houses": "$220",
      "Rent_with_3_Houses": "$600",
      "Rent_with_4_Houses": "$800",
      "Rent_with_Hotel": "$1000",
      "House_Price": "$100",
      "Hotel_Price": "$100",
      "Mortgage_Price": "$100"
    },
    "Taloja MIDC": {
      "Card_Color": "#FF0000",
      "City": "Taloja MIDC",
      "Purchase_Price": "$220",
      "Rent": "$18",
      "Rent_with_1_House": "$90",
      "Rent_with_2_Houses": "$250",
      "Rent_with_3_Houses": "$700",
      "Rent_with_4_Houses": "$875",
      "Rent_with_Hotel": "$1050",
      "House_Price": "$150",
      "Hotel_Price": "$150",
      "Mortgage_Price": "$110"
    },
    "Chance_2":{
      "Card_Color":"inherit",
      "City":"Chance",
    },
    "Kalamboli": {
      "Card_Color": "#FF0000",
      "City": "Kalamboli",
      "Purchase_Price": "$220",
      "Rent": "$18",
      "Rent_with_1_House": "$90",
      "Rent_with_2_Houses": "$250",
      "Rent_with_3_Houses": "$700",
      "Rent_with_4_Houses": "$875",
      "Rent_with_Hotel": "$1050",
      "House_Price": "$150",
      "Hotel_Price": "$150",
      "Mortgage_Price": "$110"
    },
    "New Panvel": {
      "Card_Color": "#FF0000",
      "City": "New Panvel",
      "Purchase_Price": "$240",
      "Rent": "$20",
      "Rent_with_1_House": "$100",
      "Rent_with_2_Houses": "$300",
      "Rent_with_3_Houses": "$750",
      "Rent_with_4_Houses": "$925",
      "Rent_with_Hotel": "$1100",
      "House_Price": "$150",
      "Hotel_Price": "$150",
      "Mortgage_Price": "$120"
    },
    "Panvel Station": {
      "Card_Color": "inherit",
      "City": "Panvel Station",
      "Purchase_Price": "$200",
      "Rent": "$25",
      "Rent_with_2_Railroads": "$50",
      "Rent_with_3_Railroads": "$100",
      "Rent_with_4_Railroads": "$200",
      "Mortgage_Price": "$100"
    },
    "Mansarovar": {
      "Card_Color": "#FFFF00",
      "City": "Mansarovar",
      "Purchase_Price": "$260",
      "Rent": "$22",
      "Rent_with_1_House": "$110",
      "Rent_with_2_Houses": "$330",
      "Rent_with_3_Houses": "$800",
      "Rent_with_4_Houses": "$975",
      "Rent_with_Hotel": "$1150",
      "House_Price": "$150",
      "Hotel_Price": "$150",
      "Mortgage_Price": "$130"
    },
    "Juinagar": {
      "Card_Color": "#FFFF00",
      "City": "Juinagar",
      "Purchase_Price": "$260",
      "Rent": "$22",
      "Rent_with_1_House": "$110",
      "Rent_with_2_Houses": "$330",
      "Rent_with_3_Houses": "$800",
      "Rent_with_4_Houses": "$975",
      "Rent_with_Hotel": "$1150",
      "House_Price": "$150",
      "Hotel_Price": "$150",
      "Mortgage_Price": "$130"
    },
    "Water Works": {
      "Card_Color": "inherit",
      "City": "Water Works",
      "Purchase_Price": "$150",
      "Rent": "Dice roll * 4 times the roll if one utility is owned, or * 10 times the roll if both utilities are owned",
      "Mortgage_Price": "$75"
    },
    "Sanpada": {
      "Card_Color": "#FFFF00",
      "City": "Sanpada",
      "Purchase_Price": "$280",
      "Rent": "$24",
      "Rent_with_1_House": "$120",
      "Rent_with_2_Houses": "$360",
      "Rent_with_3_Houses": "$850",
      "Rent_with_4_Houses": "$1025",
      "Rent_with_Hotel": "$1200",
      "House_Price": "$150",
      "Hotel_Price": "$150",
      "Mortgage_Price": "$140"
    },
    "Seawoods": {
      "Card_Color": "#008000",
      "City": "Seawoods",
      "Purchase_Price": "$300",
      "Rent": "$26",
      "Rent_with_1_House": "$130",
      "Rent_with_2_Houses": "$390",
      "Rent_with_3_Houses": "$900",
      "Rent_with_4_Houses": "$1100",
      "Rent_with_Hotel": "$1275",
      "House_Price": "$200",
      "Hotel_Price": "$200",
      "Mortgage_Price": "$150"
    },
    "CBD Belapur": {
      "Card_Color": "#008000",
      "City": "CBD Belapur",
      "Purchase_Price": "$300",
      "Rent": "$26",
      "Rent_with_1_House": "$130",
      "Rent_with_2_Houses": "$390",
      "Rent_with_3_Houses": "$900",
      "Rent_with_4_Houses": "$1100",
      "Rent_with_Hotel": "$1275",
      "House_Price": "$200",
      "Hotel_Price": "$200",
      "Mortgage_Price": "$150"
    },
    "Community_Chest_3":{
      "Card_Color":"inherit",
      "City":"Community Chest",
    },
    "Nerul": {
      "Card_Color": "#008000",
      "City": "Nerul",
      "Purchase_Price": "$320",
      "Rent": "$28",
      "Rent_with_1_House": "$150",
      "Rent_with_2_Houses": "$450",
      "Rent_with_3_Houses": "$1000",
      "Rent_with_4_Houses": "$1200",
      "Rent_with_Hotel": "$1400",
      "House_Price": "$200",
      "Hotel_Price": "$200",
      "Mortgage_Price": "$160"
    },
    "Kharghar Station": {
      "Card_Color": "inherit",
      "City": "Kharghar Station",
      "Purchase_Price": "$200",
      "Rent": "$25",
      "Rent_with_2_Railroads": "$50",
      "Rent_with_3_Railroads": "$100",
      "Rent_with_4_Railroads": "$200",
      "Mortgage_Price": "$100"
    },
    "Chance_3":{
      "Card_Color":"inherit",
      "City":"Chance",
    },
    "Kharghar": {
      "Card_Color": "#5656f5",
      "City": "Kharghar",
      "Purchase_Price": "$350",
      "Rent": "$35",
      "Rent_with_1_House": "$175",
      "Rent_with_2_Houses": "$500",
      "Rent_with_3_Houses": "$1100",
      "Rent_with_4_Houses": "$1300",
      "Rent_with_Hotel": "$1500",
      "House_Price": "$200",
      "Hotel_Price": "$200",
      "Mortgage_Price": "$175"
    },
    "Luxary_Tax":{
      "Card_Color":"inherit",
      "City":"Luxary Tax",
      "Purchase_Price": "$75"
    },
    "Vashi": {
      "Card_Color": "#5656f5",
      "City": "Vashi",
      "Purchase_Price": "$400",
      "Rent": "$50",
      "Rent_with_1_House": "$200",
      "Rent_with_2_Houses": "$600",
      "Rent_with_3_Houses": "$1400",
      "Rent_with_4_Houses": "$1700",
      "Rent_with_Hotel": "$2000",
      "House_Price": "$200",
      "Hotel_Price": "$200",
      "Mortgage_Price": "$200"
    }
  }
};

const chances_cards = [
  {
    "title": "Advance to Go (Collect $200)",
    "description": "Collect $200 as you pass \"Go.\""
  },
  {
    "title": "Advance to Kalamboli",
    "description": "If you pass \"Go,\" collect $200."
  },
  {
    "title": "Advance to Karanjade",
    "description": "If you pass \"Go,\" collect $200."
  },
  {
    "title": "Advance to the nearest Railroad",
    "description": "Pay owner twice the rental, if unowned, you may buy it from the Bank."
  },
  {
    "title": "Advance to the nearest Utility",
    "description": "If unowned, you may buy it from the Bank. If owned, throw dice and pay the owner ten times the amount thrown."
  },
  {
    "title": "Bank pays you dividend of $50.",
    "description": ""
  },
  {
    "title": "Get Out of Jail Free",
    "description": "This card may be kept until needed or sold."
  },
  {
    "title": "Go Back 3 Spaces",
    "description": "Do not pass \"Go,\" do not collect $200."
  },
  {
    "title": "Go to Jail",
    "description": "Go directly to Jail. Do not pass \"Go,\" do not collect $200."
  },
  {
    "title": "Make repairs on all your property",
    "description": "For each house pay $25, for each hotel $100."
  },
  {
    "title": "Pay poor tax of $15.",
    "description": ""
  },
  {
    "title": "Advance to Seawoods",
    "description": "If you pass \"Go,\" collect $200."
  },
  {
    "title": "Advance to Vashi",
    "description": "Advance to Vashi."
  }
];
const chest_cards =  [
  {
    "title": "Advance to Go (Collect $200)",
    "description": "Collect $200 as you pass \"Go.\""
  },
  {
    "title": "Bank error in your favor",
    "description": "Collect $200."
  },
  {
    "title": "Doctor's fees",
    "description": "Pay $50."
  },
  {
    "title": "From sale of stock you get $50.",
    "description": ""
  },
  {
    "title": "Get Out of Jail Free",
    "description": "This card may be kept until needed or sold."
  },
  {
    "title": "Go to Jail",
    "description": "Go directly to Jail. Do not pass \"Go,\" do not collect $200."
  },
  {
    "title": "Grand Opera Night",
    "description": "Collect $50 from every player for opening night seats."
  },
  {
    "title": "Holiday Fund matures",
    "description": "Collect $100."
  },
  {
    "title": "Income tax refund",
    "description": "Collect $20."
  },
  {
    "title": "It is your birthday",
    "description": "Collect $10 from every player."
  },
  {
    "title": "Life insUlewce matures",
    "description": "Collect $100."
  },
  {
    "title": "Pay hospital fees of $100.",
    "description": ""
  },
  {
    "title": "Pay school fees of $150.",
    "description": ""
  },
  {
    "title": "Receive $25 consultancy fee.",
    "description": ""
  },
  {
    "title": "You are assessed for street repairs",
    "description": "Pay $40 per house and $115 per hotel."
  }
];

export {colors_of_properties,card_details,chances_cards,chest_cards};