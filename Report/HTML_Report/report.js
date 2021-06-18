$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"\u003cusername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"\u003cpassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;login-page;;1"
    },
    {
      "cells": [
        "abc",
        "123"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application;login-page;;2"
    },
    {
      "cells": [
        "def",
        "456"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;login-page;;3"
    },
    {
      "cells": [
        "bodapatireshma",
        "Cucumber@123"
      ],
      "line": 15,
      "id": "hotel-booking-in-adactin-application;login-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"abc\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 4270609700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_Username_In_Username_Field(String)"
});
formatter.result({
  "duration": 143560700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_Password_In_Password_Field(String)"
});
formatter.result({
  "duration": 109540900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel()"
});
formatter.result({
  "duration": 589722400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"def\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"456\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 523204100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_Username_In_Username_Field(String)"
});
formatter.result({
  "duration": 91115400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_Password_In_Password_Field(String)"
});
formatter.result({
  "duration": 83594100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel()"
});
formatter.result({
  "duration": 661510600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"bodapatireshma\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"Cucumber@123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 603370400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bodapatireshma",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_Username_In_Username_Field(String)"
});
formatter.result({
  "duration": 80983700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber@123",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_Password_In_Password_Field(String)"
});
formatter.result({
  "duration": 80958900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel()"
});
formatter.result({
  "duration": 1473151100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "search hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;search-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user Select The Location",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user Select The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Select The Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Select The Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Select Number Of Adults",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Select Number Of Children",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user Click On The Search Button And It Navigates To Select Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Location()"
});
formatter.result({
  "duration": 207172300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 141162100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 149954800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Check_In_Date()"
});
formatter.result({
  "duration": 19000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Check_Out_Date()"
});
formatter.result({
  "duration": 15900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_Number_Of_Adults()"
});
formatter.result({
  "duration": 110072500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_Number_Of_Children()"
});
formatter.result({
  "duration": 117895700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Search_Button_And_It_Navigates_To_Select_Hotel()"
});
formatter.result({
  "duration": 1007041900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "select hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "user Select The Radio Button To Select Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user Click On The Continue Button And It Navigates To Book A Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Radio_Button_To_Select_Hotel()"
});
formatter.result({
  "duration": 112315600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Continue_Button_And_It_Navigates_To_Book_A_Hotel()"
});
formatter.result({
  "duration": 1209568200,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "book a hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "user Select The First Name",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user Select The Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Select The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Select The Creditcard Number",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user Select The Creditcard Type",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user Select The Expiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user Select The Expiry Year",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user Select The Cvv Number",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user Click On The Book Now Button And It Navigates To Booking Confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_The_First_Name()"
});
formatter.result({
  "duration": 135533400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Last_Name()"
});
formatter.result({
  "duration": 114926500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Billing_Address()"
});
formatter.result({
  "duration": 112826700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Creditcard_Number()"
});
formatter.result({
  "duration": 115994000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Creditcard_Type()"
});
formatter.result({
  "duration": 186172700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Expiry_Month()"
});
formatter.result({
  "duration": 191678500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Expiry_Year()"
});
formatter.result({
  "duration": 109806200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Cvv_Number()"
});
formatter.result({
  "duration": 87511500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Book_Now_Button_And_It_Navigates_To_Booking_Confirmation()"
});
formatter.result({
  "duration": 116950400,
  "status": "passed"
});
});