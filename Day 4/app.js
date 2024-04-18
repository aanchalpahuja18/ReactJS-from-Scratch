import React from "react"
import ReactDOM from "react-dom/client"

/*
* Header
 - Logo
 - Nav Items
* Body
 - Search
 - Restaurant Container
   - Restaurant Card
     - image
     - name of the restaurant
     - star rating
     - cuisine
     - delivery time
* Footer
 - Copyright
 - Links
 - Address
 - Contact Us
*/


const Header =() => {
return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)
}

const styleCard = {
    backgroundColor : "#f0f0f0"

}
const resList = [
    {
            "info": {
              "id": "765152",
              "name": "Pizza Hut",
              "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
              "locality": "Pimpri chinchwad",
              "areaName": "Punawale",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Pizzas"
              ],
              "avgRating": 3.9,
              "parentId": "721",
              "avgRatingString": "3.9",
              "totalRatingsString": "500+",
              "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 3.7,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-04-19 00:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Pizza.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-be323a0b-be79-4901-a0a5-acb0b2fd503e"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/pizza-hut-pimpri-chinchwad-punawale-pune-765152",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo", 
        }, 
        {
          "info": {
            "id": "772299",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/49774730-6b2a-4bee-ac6e-aa98dc47a584_772299.jpg",
            "locality": "W Biz",
            "areaName": "Wakad",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "630",
            "avgRatingString": "4.4",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 4.8,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "4.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-18 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-be323a0b-be79-4901-a0a5-acb0b2fd503e"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-w-biz-wakad-pune-772299",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "611808",
            "name": "UBQ by Barbeque Nation",
            "cloudinaryImageId": "noc7ieivirqxtpujhsgl",
            "locality": "1st Phase",
            "areaName": "Hinjawadi",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "North Indian",
              "Barbecue",
              "Biryani",
              "Kebabs",
              "Mughlai",
              "Desserts"
            ],
            "avgRating": 3.9,
            "parentId": "10804",
            "avgRatingString": "3.9",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 47,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-18 23:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-be323a0b-be79-4901-a0a5-acb0b2fd503e"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-1st-phase-hinjawadi-pune-611808",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "323526",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Chinchwad",
            "areaName": "Chinchwad",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Chinese",
              "Asian",
              "Tibetan",
              "Desserts"
            ],
            "avgRating": 3.9,
            "parentId": "61955",
            "avgRatingString": "3.9",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 62,
              "lastMileTravel": 8.7,
              "serviceability": "SERVICEABLE",
              "slaString": "60-65 mins",
              "lastMileTravelString": "8.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-18 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹179"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-be323a0b-be79-4901-a0a5-acb0b2fd503e"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/chinese-wok-chinchwad-pune-323526",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
              "id": "752535",
              "name": "KFC",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5d0c595a-dfb2-472b-8ca0-f4701adaa38d_752535.JPG",
              "locality": "Dattwadi",
              "areaName": "Puna wale",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
              ],
              "avgRating": 4.2,
              "parentId": "547",
              "avgRatingString": "4.2",
              "totalRatingsString": "500+",
              "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-04-19 02:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Burger.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹179"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-be323a0b-be79-4901-a0a5-acb0b2fd503e"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/kfc-dattwadi-puna-wale-pune-752535",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "862648",
              "name": "BOMBAY CHAAP CORNER",
              "cloudinaryImageId": "2a8f2f20a02025f85b9c392cdb2c1e5c",
              "locality": "Ravet",
              "areaName": "punawale",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Default"
              ],
              "veg": true,
              "parentId": "347211",
              "avgRatingString": "NEW",
              "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 2.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-04-18 23:15:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "isNewlyOnboarded": true,
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-be323a0b-be79-4901-a0a5-acb0b2fd503e"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/bombay-chaap-corner-ravet-punawale-pune-862648",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "261905",
              "name": "Zeeshan - Apna Hyderabadi Food",
              "cloudinaryImageId": "de56dffcc29d6ad046285c5b664bda8f",
              "locality": "Rajiv Gandhi Infotech Park",
              "areaName": "Hinjewadi",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Biryani",
                "Tandoor",
                "Sweets",
                "Mughlai",
                "Beverages"
              ],
              "avgRating": 4,
              "parentId": "2981",
              "avgRatingString": "4.0",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 3.5,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-04-18 23:30:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-be323a0b-be79-4901-a0a5-acb0b2fd503e"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/zeeshan-apna-hyderabadi-food-rajiv-gandhi-infotech-park-hinjewadi-pune-261905",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "400927",
              "name": "Hotel Al Zaika",
              "cloudinaryImageId": "tyay3pbsscwqfkr0t0kk",
              "locality": "Tathawade",
              "areaName": "Wakad",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "North Indian",
                "Chinese",
                "Mughlai"
              ],
              "avgRating": 3.9,
              "parentId": "97829",
              "avgRatingString": "3.9",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-04-19 03:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              "context": "seo-data-be323a0b-be79-4901-a0a5-acb0b2fd503e"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/hotel-al-zaika-tathawade-wakad-pune-400927",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
]
    

const ResCard = (props) => {
    const {resData} = props // Destructuring the props (objects)\

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.info
    return (
        <div className="res-card"  style = {styleCard}>
            <img className="res-logo" src=
                {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}.</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}
//not using keys (not acceptable) <<<<< indexes as keys <<<<<<<<<<<< unique key (best practice)
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurant) => (
                        <ResCard key={restaurant.info.id} resData = {restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className = "app">
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)