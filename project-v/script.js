// State and Union Territory Data
const statesData = [
    // Detailed Examples (as requested)
    {
        name: "Delhi",
        capital: "New Delhi",
        type: "National Capital Territory",
        heritage: {
            text: "Red Fort (Lal Qila), Qutub Minar, India Gate, Humayun's Tomb, Jama Masjid",
            image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Diwali, Holi, Durga Puja celebrations, Mughlai influence, Hindi and Punjabi culture blend",
            image: "https://images.unsplash.com/photo-1585159812596-0ebebb3a14d2?w=300&h=200&fit=crop"
        },
        food: {
            text: "Chole Bhature, Butter Chicken, Paranthas, Rajma Rice, Street food at Chandni Chowk",
            image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Uttar Pradesh",
        capital: "Lucknow",
        type: "State",
        heritage: {
            text: "Taj Mahal (Agra), Bara Imambara, Chota Imambara, Fatehpur Sikri, Varanasi Ghats",
            image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Nawabi culture, Kathak dance, Ganga Aarti, Classical music, Urdu poetry",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        },
        food: {
            text: "Tunday Kababi, Lucknowi Biryani, Kebabs, Kulfi, Pani Puri, Makhan Malai",
            image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Rajasthan",
        capital: "Jaipur",
        type: "State",
        heritage: {
            text: "Hawa Mahal, Amer Fort, City Palace, Mehrangarh Fort, Udaipur Palace, Jaisalmer Fort",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Rajputana folk dances (Ghoomar), Camel festivals, Puppet shows, Rajasthani music",
            image: "https://images.unsplash.com/photo-1571104508999-893933ded431?w=300&h=200&fit=crop"
        },
        food: {
            text: "Dal Baati Churma, Laal Maas, Ghewar, Kachori, Rajasthani Thali",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
        }
    },

    // Template entries for remaining states (commented with basic info)
    {
        name: "Maharashtra",
        capital: "Mumbai",
        type: "State",
        heritage: {
            text: "Gateway of India, Ajanta & Ellora Caves, Chhatrapati Shivaji Terminus, Aga Khan Palace",
            image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Marathi culture, Ganesh Chaturthi, Lavani dance, Bollywood influence",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        },
        food: {
            text: "Vada Pav, Misal Pav, Bhel Puri, Puran Poli, Modak",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Tamil Nadu",
        capital: "Chennai",
        type: "State",
        heritage: {
            text: "Meenakshi Temple, Brihadeeswara Temple, Mamallapuram, Nilgiri Mountain Railway",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Tamil culture, Bharatanatyam dance, Carnatic music, Tamil literature",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        },
        food: {
            text: "Dosa, Idli, Sambar, Chettinad Chicken, Rasam, Filter Coffee",
            image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Gujarat",
        capital: "Gandhinagar",
        type: "State",
        heritage: {
            text: "Rani Ki Vav, Somnath Temple, Sabarmati Ashram, Sun Temple Modhera",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Gujarati culture, Garba dance, Navratri festival, Business community",
            image: "https://images.unsplash.com/photo-1571104508999-893933ded431?w=300&h=200&fit=crop"
        },
        food: {
            text: "Dhokla, Khandvi, Gujarati Thali, Fafda Jalebi, Undhiyu",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Karnataka",
        capital: "Bengaluru",
        type: "State",
        heritage: {
            text: "Mysore Palace, Hampi ruins, Gol Gumbaz, Belur and Halebidu temples",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Kannada culture, Classical music, Dasara festival, IT hub culture",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        },
        food: {
            text: "Masala Dosa, Bisi Bele Bath, Mysore Pak, Rava Idli, Filter Coffee",
            image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Kerala",
        capital: "Thiruvananthapuram",
        type: "State",
        heritage: {
            text: "Backwaters, Padmanabhaswamy Temple, Fort Kochi, Hill stations, Spice plantations",
            image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Malayalam culture, Kathakali dance, Theyyam, Onam festival, Ayurveda",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        },
        food: {
            text: "Appam, Fish Curry, Sadya, Puttu, Banana Chips, Kerala Parotta",
            image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop"
        }
    },
    {
        name: "West Bengal",
        capital: "Kolkata",
        type: "State",
        heritage: {
            text: "Victoria Memorial, Howrah Bridge, Dakshineswar Temple, Sundarbans",
            image: "https://images.unsplash.com/photo-1578736641330-3155e606cd40?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Bengali culture, Durga Puja, Rabindra Sangeet, Literature, Arts",
            image: "https://images.unsplash.com/photo-1585159812596-0ebebb3a14d2?w=300&h=200&fit=crop"
        },
        food: {
            text: "Fish Curry, Rosogolla, Mishti Doi, Kathi Rolls, Puchka",
            image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Andhra Pradesh",
        capital: "Amaravati",
        type: "State",
        heritage: {
            text: "Tirumala Temple, Charminar (Hyderabad), Golconda Fort, Borra Caves",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Telugu culture, Kuchipudi dance, Ugadi festival, Classical traditions",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        },
        food: {
            text: "Hyderabadi Biryani, Andhra Meals, Pesarattu, Gongura Pickle",
            image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Telangana",
        capital: "Hyderabad",
        type: "State",
        heritage: {
            text: "Charminar, Golconda Fort, Ramoji Film City, Thousand Pillar Temple",
            image: "https://images.unsplash.com/photo-1578736641330-3155e606cd40?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Telugu culture, Bathukamma festival, Bonalu, Folk traditions",
            image: "https://images.unsplash.com/photo-1571104508999-893933ded431?w=300&h=200&fit=crop"
        },
        food: {
            text: "Hyderabadi Biryani, Haleem, Qubani Ka Meetha, Nihari",
            image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Punjab",
        capital: "Chandigarh",
        type: "State",
        heritage: {
            text: "Golden Temple, Jallianwala Bagh, Wagah Border, Anandpur Sahib",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Punjabi culture, Bhangra dance, Vaisakhi, Sikh traditions",
            image: "https://images.unsplash.com/photo-1571104508999-893933ded431?w=300&h=200&fit=crop"
        },
        food: {
            text: "Butter Chicken, Makki di Roti, Sarson da Saag, Lassi, Kulcha",
            image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Haryana",
        capital: "Chandigarh",
        type: "State",
        heritage: {
            text: "Kurukshetra, Panipat battlefields, Sultanpur Bird Sanctuary",
            image: "https://images.unsplash.com/photo-1578736641330-3155e606cd40?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Haryanvi culture, Folk songs, Wrestling traditions, Rural lifestyle",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        },
        food: {
            text: "Bajra Roti, Churma, Kadhi, Lassi, Mixed Dal",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Himachal Pradesh",
        capital: "Shimla",
        type: "State",
        heritage: {
            text: "Shimla Ridge, Rohtang Pass, Dharamshala, Kullu Valley, Ancient temples",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Pahari culture, Hill festivals, Buddhist influence, Mountain traditions",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        },
        food: {
            text: "Dham, Siddu, Trout fish, Apples, Local hill cuisine",
            image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Uttarakhand",
        capital: "Dehradun",
        type: "State",
        heritage: {
            text: "Kedarnath, Badrinath, Haridwar, Rishikesh, Valley of Flowers",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Garhwali and Kumaoni culture, Char Dham Yatra, Yoga traditions",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        },
        food: {
            text: "Kafuli, Phaanu, Aloo ke Gutke, Bal Mithai, Kumaoni Raita",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Jammu & Kashmir",
        capital: "Srinagar",
        type: "Union Territory",
        heritage: {
            text: "Dal Lake, Mughal Gardens, Amarnath Cave, Vaishno Devi, Gulmarg",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Kashmiri culture, Sufi traditions, Handicrafts, Shikara rides",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        },
        food: {
            text: "Rogan Josh, Kahwa, Yakhni, Kashmiri Pulao, Modur Pulao",
            image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Ladakh",
        capital: "Leh",
        type: "Union Territory",
        heritage: {
            text: "Leh Palace, Hemis Monastery, Pangong Lake, Nubra Valley, Magnetic Hill",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Ladakhi culture, Buddhist monasteries, Tibetan influence, High altitude lifestyle",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        },
        food: {
            text: "Thukpa, Momos, Chang, Skyu, Chhurpi",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Goa",
        capital: "Panaji",
        type: "State",
        heritage: {
            text: "Bom Jesus Basilica, Fort Aguada, Old Goa churches, Portuguese architecture",
            image: "https://images.unsplash.com/photo-1578736641330-3155e606cd40?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Konkani culture, Carnival, Portuguese influence, Beach lifestyle, Feni culture",
            image: "https://images.unsplash.com/photo-1571104508999-893933ded431?w=300&h=200&fit=crop"
        },
        food: {
            text: "Fish Curry Rice, Bebinca, Prawn Balchao, Feni, Vindaloo",
            image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Odisha",
        capital: "Bhubaneswar",
        type: "State",
        heritage: {
            text: "Jagannath Temple (Puri), Konark Sun Temple, Udayagiri Caves, Lingaraja Temple",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Odia culture, Jagannath worship, Odissi dance, Rath Yatra",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        },
        food: {
            text: "Dalma, Pakhala, Rasgulla, Chhena Poda, Macha Besara",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Jharkhand",
        capital: "Ranchi",
        type: "State",
        heritage: {
            text: "Parasnath Hills, Betla National Park, Deoghar temples, Tribal heritage",
            image: "https://images.unsplash.com/photo-1578736641330-3155e606cd40?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Tribal cultures, Sarhul festival, Folk dances, Jhumar dance",
            image: "https://images.unsplash.com/photo-1571104508999-893933ded431?w=300&h=200&fit=crop"
        },
        food: {
            text: "Litti Chokha, Rugra, Bamboo shoots, Tribal cuisine",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Chhattisgarh",
        capital: "Raipur",
        type: "State",
        heritage: {
            text: "Chitrakote Falls, Bastar Palace, Sirpur archaeological site, Tribal villages",
            image: "https://images.unsplash.com/photo-1578736641330-3155e606cd40?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Tribal culture, Bastar Dussehra, Folk arts, Traditional crafts",
            image: "https://images.unsplash.com/photo-1571104508999-893933ded431?w=300&h=200&fit=crop"
        },
        food: {
            text: "Fara, Petha, Sabudana Vada, Aamat, Local tribal delicacies",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Bihar",
        capital: "Patna",
        type: "State",
        heritage: {
            text: "Nalanda University ruins, Bodh Gaya, Vikramshila, Patna Sahib",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Bihari culture, Madhubani paintings, Folk songs, Chhath Puja",
            image: "https://images.unsplash.com/photo-1571104508999-893933ded431?w=300&h=200&fit=crop"
        },
        food: {
            text: "Litti Chokha, Sattu, Khaja, Tilkut, Bihar ki Tehri",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Assam",
        capital: "Dispur",
        type: "State",
        heritage: {
            text: "Kamakhya Temple, Kaziranga National Park, Majuli Island, Ahom monuments",
            image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Assamese culture, Bihu festival, Tea culture, Sattriya dance",
            image: "https://images.unsplash.com/photo-1571104508999-893933ded431?w=300&h=200&fit=crop"
        },
        food: {
            text: "Assamese Thali, Fish Tenga, Pitha, Assam Tea, Duck curry",
            image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Arunachal Pradesh",
        capital: "Itanagar",
        type: "State",
        heritage: {
            text: "Tawang Monastery, Bomdila Monastery, Tribal heritage, Mountain landscapes",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Tribal cultures, Buddhist influence, Traditional festivals, Handicrafts",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        },
        food: {
            text: "Thukpa, Momos, Zan, Local tribal cuisine, Bamboo shoot curry",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Manipur",
        capital: "Imphal",
        type: "State",
        heritage: {
            text: "Kangla Palace, Loktak Lake, Keibul Lamjao National Park, War memorials",
            image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Manipuri culture, Manipuri dance, Lai Haraoba festival, Martial arts",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        },
        food: {
            text: "Eromba, Chamthong, Ngari, Chak-hao kheer, Fish curry",
            image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Meghalaya",
        capital: "Shillong",
        type: "State",
        heritage: {
            text: "Living root bridges, Cherrapunji, Mawlynnong village, Sacred groves",
            image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Khasi, Garo, and Jaintia cultures, Matrilineal society, Traditional music",
            image: "https://images.unsplash.com/photo-1571104508999-893933ded431?w=300&h=200&fit=crop"
        },
        food: {
            text: "Jadoh, Tungrymbai, Pumaloi, Local pork dishes, Traditional rice beer",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Mizoram",
        capital: "Aizawl",
        type: "State",
        heritage: {
            text: "Reiek, Champhai, Traditional Mizo villages, Tribal heritage",
            image: "https://images.unsplash.com/photo-1578736641330-3155e606cd40?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Mizo culture, Chapchar Kut festival, Traditional dances, Bamboo crafts",
            image: "https://images.unsplash.com/photo-1571104508999-893933ded431?w=300&h=200&fit=crop"
        },
        food: {
            text: "Bai, Sawhchiar, Vawksa rep, Zu (rice beer), Smoked meat",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Nagaland",
        capital: "Kohima",
        type: "State",
        heritage: {
            text: "Kohima War Cemetery, Hornbill Festival ground, Traditional villages",
            image: "https://images.unsplash.com/photo-1578736641330-3155e606cd40?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Naga tribal culture, Hornbill Festival, Traditional warfare, Handicrafts",
            image: "https://images.unsplash.com/photo-1571104508999-893933ded431?w=300&h=200&fit=crop"
        },
        food: {
            text: "Smoked pork, Axone, Galho, Bamboo shoot, Raja Mirchi",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Tripura",
        capital: "Agartala",
        type: "State",
        heritage: {
            text: "Ujjayanta Palace, Neermahal, Tripura Sundari Temple, Archaeological sites",
            image: "https://images.unsplash.com/photo-1578736641330-3155e606cd40?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Bengali and tribal cultures, Garia dance, Kharchi Puja, Traditional music",
            image: "https://images.unsplash.com/photo-1571104508999-893933ded431?w=300&h=200&fit=crop"
        },
        food: {
            text: "Mui Borok, Bamboo shoot curry, Fish preparations, Traditional sweets",
            image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Sikkim",
        capital: "Gangtok",
        type: "State",
        heritage: {
            text: "Rumtek Monastery, Nathu La Pass, Pemayangtse Monastery, Buddhist heritage",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Lepcha, Bhutia, Nepali cultures, Buddhist festivals, Mountain traditions",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        },
        food: {
            text: "Momos, Thukpa, Gundruk, Kinema, Sel roti",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
        }
    },
    {
        name: "Madhya Pradesh",
        capital: "Bhopal",
        type: "State",
        heritage: {
            text: "Khajuraho temples, Sanchi Stupa, Gwalior Fort, Bhimbetka caves",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=200&fit=crop"
        },
        culture: {
            text: "Central Indian culture, Folk dances, Tribal arts, Classical music",
            image: "https://images.unsplash.com/photo-1571104508999-893933ded431?w=300&h=200&fit=crop"
        },
        food: {
            text: "Poha, Bhutte ka Kees, Dal Bafla, Mawa Bati, Indori cuisine",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
        }
    }
];

// Carousel functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
let autoPlayInterval;

function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
    restartAutoPlay();
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

function restartAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        filterStates(searchTerm);
    });
}

function filterStates(searchTerm) {
    const statesGrid = document.getElementById('statesGrid');
    
    if (searchTerm === '') {
        renderAllStates();
        return;
    }
    
    const filteredStates = statesData.filter(state => 
        state.name.toLowerCase().includes(searchTerm) ||
        state.capital.toLowerCase().includes(searchTerm)
    );
    
    renderStates(filteredStates);
}

function renderStates(statesToRender) {
    const statesGrid = document.getElementById('statesGrid');
    
    if (statesToRender.length === 0) {
        statesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #666;">
                <h3>No states found</h3>
                <p>Try searching with a different term</p>
            </div>
        `;
        return;
    }
    
    statesGrid.innerHTML = statesToRender.map(state => createStateCard(state)).join('');
}

function renderAllStates() {
    renderStates(statesData);
}

function createStateCard(state) {
    return `
        <div class="state-card">
            <div class="state-header">
                <h3>${state.name}</h3>
                <p class="capital">Capital: ${state.capital} | ${state.type}</p>
            </div>
            <div class="state-info">
                <div class="info-section">
                    <h4>🏛️ Heritage</h4>
                    <div class="info-content">
                        <img src="${state.heritage.image}" alt="${state.name} Heritage" class="info-image">
                        <p class="info-text">${state.heritage.text}</p>
                    </div>
                </div>
                <div class="info-section">
                    <h4>🎭 Culture & Tradition</h4>
                    <div class="info-content">
                        <img src="${state.culture.image}" alt="${state.name} Culture" class="info-image">
                        <p class="info-text">${state.culture.text}</p>
                    </div>
                </div>
                <div class="info-section">
                    <h4>🍽️ Famous Food</h4>
                    <div class="info-content">
                        <img src="${state.food.image}" alt="${state.name} Food" class="info-image">
                        <p class="info-text">${state.food.text}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Mobile menu functionality
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Carousel pause on hover
function initializeCarouselHover() {
    const carousel = document.querySelector('.carousel-container');
    
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    renderAllStates();
    initializeSearch();
    initializeMobileMenu();
    initializeSmoothScrolling();
    initializeCarouselHover();
    
    // Start carousel autoplay
    startAutoPlay();
    
    // Add loading animation to state cards
    setTimeout(() => {
        document.querySelectorAll('.state-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }, 100);
});

// Handle window resize
window.addEventListener('resize', function() {
    // Close mobile menu if window is resized to desktop
    if (window.innerWidth > 768) {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});