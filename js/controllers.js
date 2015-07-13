'use strict';

/* Controllers */

var eventcatControllers = angular.module('eventcatControllers', []);

eventcatControllers.controller('EventListCtrl', ['$scope', '$http',
    function($scope, $http) {
        // $http.get('cities/events.json').success(function(data) {
        //     $scope.events = data;
        // });
        $scope.events = [{
            "name": "KansasCity",
            "Event": "Kansas City Regional Seminar",
            "Date": "September 8-9, 2015",
            "Location": "Kansas City Marriott Downtown",
            "Address": "200 W 12th Street, Kansas City, MO 64105",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - Kansas City",
            "Start": "9/8/2015 @ 8 AM",
            "End": "9/9/2015 @ 1 PM",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Kansas City!  Venue: Kansas City Marriott Downtown (google map link)  Any questions, please contact NAMevents@osisoft.com."
        }, {
            "name": "Memphis",
            "Event": "Memphis Regional Seminar",
            "Date": "September 15-16, 2015",
            "Location": "Sheraton Memphis Downtown",
            "Address": "250 North Main Street, Memphis, TN 38103",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": "2015 OSIsoft Regional Seminar - Memphis",
            "Start": "9/15/2015 @ 8 AM",
            "End": "9/16/2015 @ 1 PM",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Memphis!  Venue: Sheraton Memphis Downtown Hotel (google map link)  Any questions, please contact NAMevents@osisoft.com."
        }, {
            "name": "OKC",
            "Event": "Oklahoma City Regional Seminar",
            "Date": "October 1-2, 2015",
            "Location": "Devon Energy Headquarters",
            "Address": "333 W. Sheridan Avenue, Oklahoma City, OK 73102",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - Oklahoma City",
            "Start": "10/1/2015 @ 8 AM",
            "End": "10/2/2015 @ 1 PM",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Oklahoma City!  Venue: Devon Energy Headquarters (google map link)  Any questions, please contact NAMevents@osisoft.com."
        }, {
            "name": "Calgary",
            "Event": "Calgary Regional Seminar",
            "Date": "October 6-7, 2015",
            "Location": "Hyatt Regency Calgary",
            "Address": "700 Center Street, SE, Calgary, AB T2G 5P6",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.                                                                                                                                                                                      • Innovative and practical ways to use the PI System presented by our customers to achieve energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - Calgary",
            "Start": "10/6/2015 @ 8 AM",
            "End": "10/7/2015 @ 1 PM",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Calgary!  Venue: Hyatt Regency Calgary (google map link)  Any questions, please contact NAMevents@osisoft.com."
        }, {
            "name": "Denver",
            "Event": "Denver Regional Seminar",
            "Date": "October 20-21, 2015",
            "Location": "The Westin Denver Downtown",
            "Address": "1672 Lawrence Street, Denver, CO 80202",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - Denver",
            "Start": "10/20/2015 @ 8 AM",
            "End": "10/21/2015 @ 1 PM",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Denver!  Venue: The Westin Denver Downtown (google map link)  Any questions, please contact NAMevents@osisoft.com."
        }, {
            "name": "Boston",
            "Event": "Boston Regional Seminar",
            "Date": "October 27-28, 2015",
            "Location": "Sheraton Needham Hotel",
            "Address": "100 Cabot Street, Needham, MA 02494",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - Boston",
            "Start": "10/27/2015 @ 8 AM",
            "End": "10/28/2015 @ 1 PM",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Boston!  Venue: Sheraton Needham Hotel (google map link)  Any questions, please contact NAMevents@osisoft.com."
        }, {
            "name": "Charlotte",
            "Event": "Charlotte Regional Seminar",
            "Date": "November 5-6, 2015",
            "Location": "Omni Hotels & Resorts Charlotte",
            "Address": "132 E. Trade Street, Charlotte, NC 28202",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - Charlotte",
            "Start": "11/5/2015 @ 8 AM",
            "End": "11/6/2015 @ 1 PM",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Charlotte!  Venue: Omni Hotels & Resorts Charlotte (google map link)  Any questions, please contact NAMevents@osisoft.com."
        }, {
            "name": "NYC",
            "Event": "New York City Regional Seminar",
            "Date": "November 10-11, 2015",
            "Location": "Microsoft Technology Center",
            "Address": "11 Times Square, 7th Floor, New York City, NY 10036",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - New York City",
            "Start": "11/10/2015 @ 8 AM",
            "End": "11/11/2015 @ 1 PM",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in New York City!  Venue: Microsoft Technology Center (google map link)  Any questions, please contact NAMevents@osisoft.com."
        }, {
            "name": "Houston",
            "Event": "Houston Regional Seminar",
            "Date": "November 12-13, 2015",
            "Location": "The Houstin Westin Oaks at the Galleria",
            "Address": "5011 Westheimer at Post Oak, Houston, TX 77056",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - Houston",
            "Start": "11/12/2015 @ 8 AM",
            "End": "11/13/2015 @ 1 PM",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Houston!  Venue: The Houstin Westin Oaks at the Galleria (google map link)  Any questions, please contact NAMevents@osisoft.com."
        }, {
            "name": "Philadelphia",
            "Event": "Philadelphia Regional Seminar",
            "Date": "November 17-18, 2015",
            "Location": "Valley Forge Casino Resort",
            "Address": "1160 First Avenue, King of Prussia, PA 19406",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - Philadelphia",
            "Start": "11/17/2015 @ 8 AM",
            "End": "11/18/2015 @ 1 PM",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Philadelphia!  Venue: Valley Forge Casino Resort (google map link)  Any questions, please contact NAMevents@osisoft.com."
        }];

    }
]);

// eventcatControllers.controller('EventListCtrl', ['$scope', 'httpEventsFactory',
//     function($scope, httpEventsFactory) {
//         httpEventsFactory.getEvents()
//             .then(function(data) {
//               console.log(data);
//                 $scope.events = data;
//             })
//             .catch(function(err) {
//                 console.log(err);
//             });
//     }
// ]);

eventcatControllers.controller('EventDetailCtrl', ['$scope', '$routeParams', 'httpFactory',
    function($scope, $routeParams, httpFactory) {

        // httpFactory.getCity($routeParams.name)
        //     .then(function(data) {
        //         console.log(data);
        //         $scope.city = data;
        //         $scope.num = $scope.city.mktoId;
        //         console.log($scope.num);
        //         MktoForms2.loadForm("//app-sjh.marketo.com", "494-OYA-934", $scope.num);
        //     })
        //     .catch(function(err) {
        //         console.log(err);
        //     })
        var cities = [{
            "name": "KansasCity",
            "Event": "Kansas City Regional Seminar",
            "Date": "September 8-9, 2015",
            "Location": "Kansas City Marriott Downtown",
            "Address": "200 W 12th Street, Kansas City, MO 64105",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - Kansas City",
            "Start": "9/8/2015 @ 8 AM",
            "End": "9/9/2015 @ 1 PM",
            "calStart": "20150908",
            "calEnd": "20150909",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Kansas City!  Venue: Kansas City Marriott Downtown (google map link)  Any questions, please contact NAMevents@osisoft.com.",
            "blurb": "<p>Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.</p><p>Whether you are a newcomer to OSIsoft technology interested in learning about improving your company\\'s operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. </p><p>This year\\'s Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.</p><p>The following themes will be covered:</p><ul><li>• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily</li>;<li>• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions</li>;<li>• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness;</li> <li>• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes;</li> <li>• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment</li>.</ul><p>Each seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.</p>",
            "content1": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n",
            "contentList": ["How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;", "Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;", "Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; ", "How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; ", "Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment."],
            "content2": "Each seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "mktoId": 2598
        }, {
            "name": "Memphis",
            "Event": "Memphis Regional Seminar",
            "Date": "September 15-16, 2015",
            "Location": "Sheraton Memphis Downtown",
            "Address": "250 North Main Street, Memphis, TN 38103",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": "2015 OSIsoft Regional Seminar - Memphis",
            "Start": "9/15/2015 @ 8 AM",
            "End": "9/16/2015 @ 1 PM",
            "calStart": "20150915",
            "calEnd": "20150916",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Memphis!  Venue: Sheraton Memphis Downtown Hotel (google map link)  Any questions, please contact NAMevents@osisoft.com.",
            "contentList": ["How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;", "Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;", "Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; ", "How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; ", "Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.", "Innovative and practical ways to use the PI System presented by our customers to achieve energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment."],
            "content1": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n",
            "content2": "Each seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "mktoId": 2617
        }, {
            "name": "OKC",
            "Event": "Oklahoma City Regional Seminar",
            "Date": "October 1-2, 2015",
            "Location": "Devon Energy Headquarters",
            "Address": "333 W. Sheridan Avenue, Oklahoma City, OK 73102",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - Oklahoma City",
            "Start": "10/1/2015 @ 8 AM",
            "End": "10/2/2015 @ 1 PM",
            "calStart": "20151001",
            "calEnd": "20151002",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Oklahoma City!  Venue: Devon Energy Headquarters (google map link)  Any questions, please contact NAMevents@osisoft.com.",
            "contentList": ["How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;", "Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;", "Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; ", "How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; ", "Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.", "Innovative and practical ways to use the PI System presented by our customers to achieve energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment."],
            "content1": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n",
            "content2": "Each seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "mktoId": 2618
        }, {
            "name": "Calgary",
            "Event": "Calgary Regional Seminar",
            "Date": "October 6-7, 2015",
            "Location": "Hyatt Regency Calgary",
            "Address": "700 Center Street, SE, Calgary, AB T2G 5P6",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\n• Innovative and practical ways to use the PI System presented by our customers to achieve energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - Calgary",
            "Start": "10/6/2015 @ 8 AM",
            "End": "10/7/2015 @ 1 PM",
            "calStart": "20151006",
            "calEnd": "20151007",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Calgary!  Venue: Hyatt Regency Calgary (google map link)  Any questions, please contact NAMevents@osisoft.com.",
            "contentList": ["How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;", "Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;", "Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; ", "How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; ", "Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.", "Innovative and practical ways to use the PI System presented by our customers to achieve energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment."],
            "content1": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n",
            "content2": "Each seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "mktoId": 2644
        }, {
            "name": "Denver",
            "Event": "Denver Regional Seminar",
            "Date": "October 20-21, 2015",
            "Location": "The Westin Denver Downtown",
            "Address": "1672 Lawrence Street, Denver, CO 80202",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - Denver",
            "Start": "10/20/2015 @ 8 AM",
            "End": "10/21/2015 @ 1 PM",
            "calStart": "20151020",
            "calEnd": "20151021",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Denver!  Venue: The Westin Denver Downtown (google map link)  Any questions, please contact NAMevents@osisoft.com.",
            "contentList": ["How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;", "Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;", "Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; ", "How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; ", "Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.", "Innovative and practical ways to use the PI System presented by our customers to achieve energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment."],
            "content1": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n",
            "content2": "Each seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "mktoId": 2619
        }, {
            "name": "Boston",
            "Event": "Boston Regional Seminar",
            "Date": "October 27-28, 2015",
            "Location": "Sheraton Needham Hotel",
            "Address": "100 Cabot Street, Needham, MA 02494",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - Boston",
            "Start": "10/27/2015 @ 8 AM",
            "End": "10/28/2015 @ 1 PM",
            "calStart": "20151027",
            "calEnd": "20151028",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Boston!  Venue: Sheraton Needham Hotel (google map link)  Any questions, please contact NAMevents@osisoft.com.",
            "contentList": ["How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;", "Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;", "Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; ", "How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; ", "Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment."],
            "content1": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n",
            "content2": "Each seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "mktoId": 2620
        }, {
            "name": "Charlotte",
            "Event": "Charlotte Regional Seminar",
            "Date": "November 5-6, 2015",
            "Location": "Omni Hotels and Resorts Charlotte",
            "Address": "132 E. Trade Street, Charlotte, NC 28202",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - Charlotte",
            "Start": "11/5/2015 @ 8 AM",
            "End": "11/6/2015 @ 1 PM",
            "calStart": "20151105",
            "calEnd": "20151106",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Charlotte!  Venue: Omni Hotels & Resorts Charlotte (google map link)  Any questions, please contact NAMevents@osisoft.com.",
            "contentList": ["How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;", "Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;", "Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; ", "How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; ", "Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.", "Innovative and practical ways to use the PI System presented by our customers to achieve energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment."],
            "content1": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n",
            "content2": "Each seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "mktoId": 2621
        }, {
            "name": "NYC",
            "Event": "New York City Regional Seminar",
            "Date": "November 10-11, 2015",
            "Location": "Microsoft Technology Center",
            "Address": "11 Times Square, 7th Floor, New York City, NY 10036",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - New York City",
            "Start": "11/10/2015 @ 8 AM",
            "End": "11/11/2015 @ 1 PM",
            "calStart": "20151110",
            "calEnd": "20151111",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in New York City!  Venue: Microsoft Technology Center (google map link)  Any questions, please contact NAMevents@osisoft.com.",
            "contentList": ["How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;", "Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;", "Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; ", "How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; ", "Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.", "Innovative and practical ways to use the PI System presented by our customers to achieve energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment."],
            "content1": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n",
            "content2": "Each seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "mktoId": 2622
        }, {
            "name": "Houston",
            "Event": "Houston Regional Seminar",
            "Date": "November 12-13, 2015",
            "Location": "The Houstin Westin Oaks at the Galleria",
            "Address": "5011 Westheimer at Post Oak, Houston, TX 77056",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - Houston",
            "Start": "11/12/2015 @ 8 AM",
            "End": "11/13/2015 @ 1 PM",
            "calStart": "20151112",
            "calEnd": "20151113",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Houston!  Venue: The Houstin Westin Oaks at the Galleria (google map link)  Any questions, please contact NAMevents@osisoft.com.",
            "contentList": ["How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;", "Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;", "Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; ", "How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; ", "Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.", "Innovative and practical ways to use the PI System presented by our customers to achieve energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment."],
            "content1": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n",
            "content2": "Each seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "contentList": ["How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;", "Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;", "Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; ", "How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; ", "Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.", "Innovative and practical ways to use the PI System presented by our customers to achieve energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment."],
            "content1": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n",
            "content2": "Each seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "mktoId": 2623
        }, {
            "name": "Philadelphia",
            "Event": "Philadelphia Regional Seminar",
            "Date": "November 17-18, 2015",
            "Location": "Valley Forge Casino Resort",
            "Address": "1160 First Avenue, King of Prussia, PA 19406",
            "LandingPageContent": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n• How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;\n• Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;\n• Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; \n• How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; \n• Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.\nEach seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "ContactUs": "For general questions, please contact NAM Events at NAMevents@osisoft.com",
            "OutlookSubject": " 2015 OSIsoft Regional Seminar - Philadelphia",
            "Start": "11/17/2015 @ 8 AM",
            "End": "11/18/2015 @ 1 PM",
            "calStart": "20151117",
            "calEnd": "20151118",
            "OutlookContent": "We look forward to seeing you at the 2015 OSIsoft Regional Seminar in Philadelphia!  Venue: Valley Forge Casino Resort (google map link)  Any questions, please contact NAMevents@osisoft.com.",
            "contentList": ["How the PI System helps you reach beyond your walls to realize even more value from your data, by sharing targeted information with colleagues, vendors, partners and customers to do business more easily;", "Add a dimension to your real-time operational data by taking into account its physical location. With Esri ArcGIS® and the PI System, bring space and time together and drive better decisions;", "Real-time accessibility of information can empower your enterprise. Hear how a leading company is combining various systems throughout the enterprise to accelerate informed decisions and empowers local and mobile workers to collaborate and gain real-time business awareness; ", "How modeling your assets and events in the PI System Infrastructure will improve enterprise-wide collaboration and give your users a consistent representation of your assets and processes; ", "Innovative and practical ways to use the PI System by our customers to do energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment.", "Innovative and practical ways to use the PI System presented by our customers to achieve energy management, product quality, asset optimization and Regulatory Compliance including Health, Safety and Environment."],
            "content1": "Join us at the OSIsoft Regional Seminar to learn more about how to \"Transform Your World with Data\" using the PI System.\nWhether you are a newcomer to OSIsoft technology interested in learning about improving your company's operations or a PI System expert looking for ways to better leverage your data infrastructure, our series of Regional Seminars has something for you. \nThis year's Regional Seminars will feature presentations from OSIsoft experts as well as actual users of the PI System, demonstrating how the PI System infrastructure can be used to achieve data-driven decision making in real-time.\nThe following themes will be covered:\n",
            "content2": "Each seminar will be structured as a two day event, with day one being a full day of presentations followed by a networking reception. Day two will feature a half day of product education, where you will have an opportunity to learn about new products and PI System features.",
            "mktoId": 2624
        }];
        for (var i = 0; i < cities.length; i++) {
            if (cities[i].name === $routeParams.name) {
                $scope.city = cities[i];
                $scope.num = $scope.city.mktoId;
                console.log($scope.num);
                MktoForms2.loadForm("//app-sjh.marketo.com", "494-OYA-934", $scope.num);
            }
        }

    }
]);

eventcatControllers.controller('DisplayCtrl', ['$scope', '$location',
    function($scope, $location) {
        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    }
]);

var eventcatFactories = angular.module('eventcatFactories', []);

eventcatFactories.factory('httpFactory', ['$http', function($http) {

    var getCity = function(cityId) {
        return $http.get('cities/' + cityId + '.json')
            .then(function(res) {
                return res.data;
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    return {
        getCity: getCity
    };

}]);

eventcatFactories.factory('httpEventsFactory', ['$http', function($http) {

    var getEvents = function() {
        return $http.get('cities/events.json')
            .then(function(res) {
                return res.data;
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    return {
        getEvents: getEvents
    };

}]);

// eventcatControllers.controller("htmlCtrl", ['$scope', function($scope){
//   this.html = "<h1>" + $scope.num + "</h1>";
// }
// ]);

// eventcatControllers.factory('messages', function(){
//     var messages = {};

//     messages.list = [];

//   messages.add = function(message){
//     messages.list.push({id: messages.list.length, text: message});
//   };

//     return messages;
// });

// eventcatControllers.controller('ListCtrl', function (messages){
//   var self = this;

//   self.messages = messages.list;
// });

// eventcatControllers.controller('PostCtrl', function (messages){
//   var self = this;

//   self.newMessage = 'Hello World!';

//   self.addMessage = function(message){
//     messages.add(message);
//     self.newMessage = '';
//   };
// });

// eventcatControllers.controller('ContentCtrl', ['$scope', '$sce',
//     function($scope, $sce) {

//       // var loc = $scope.city;

//         $scope.skipValidation = function(value) {
//             return $sce.trustAsHtml(value);
//         };

//         // $scope.cityStr = $scope.city.LandingPageContent;

//         $scope.spliceSlice = function(str, index, count, add) {
//             return str.slice(0, index) + (add || "") + str.slice(index + count);
//         };

//         $scope.strHTML = function(string) {
//             var ul = false;
//             var p = false;
//             var strArr = string.split("\n");
//             for (var i = 0; i < strArr.length; i++) {
//                 if (strArr[i].charCodeAt(0) === 8226) {
//                     if (!ul) {
//                         strArr[i] = $scope.spliceSlice(strArr[i], 0, 0, '<ul><li>');
//                         ul = true;
//                     } else {
//                         strArr[i] = $scope.spliceSlice(strArr[i], 0, 0, '<li>');
//                     }
//                     strArr[i] = $scope.spliceSlice(strArr[i], strArr[i].length - 1, 0, '</li>');
//                 } else if (ul) {
//                     strArr[i] = $scope.spliceSlice(strArr[i], 0, 0, '</ul>');
//                     strArr[i] = $scope.spliceSlice(strArr[i], 5, 0, '<p>');
//                     strArr[i] = $scope.spliceSlice(strArr[i], strArr[i].length, 0, '</p>');
//                 } else {
//                     strArr[i] = $scope.spliceSlice(strArr[i], 0, 0, '<p>');
//                     strArr[i] = $scope.spliceSlice(strArr[i], strArr[i].length, 0, '</p>');
//                 }
//             }
//             return $scope.skipValidation(strArr.join(""));
//         };
//         // $scope.contentHTML = $scope.strHTML($scope.blurb);
//     }
// ]);
