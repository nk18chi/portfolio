export const portfolioData = [
  {
    id: 1,
    serviceName: "Venture Desk",
    serviceThumbnail: "/portfolio/img/portfolio/vd_thumbnail.jpg",
    serviceDescription: "Users can book a meeting room through this app and apply for a membership that can make use of working space.",
    appIcons: [
      "/portfolio/img/icon/typescript.svg",
      "/portfolio/img/icon/react.svg",
      "/portfolio/img/icon/firebase.svg",
      "/portfolio/img/icon/sass.svg",
    ],
    usages: [
      {
        headline: "User can check all meeting rooms",
        description: "Those meeting room data are fetched from Firebase Database",
        image: "/portfolio/img/portfolio/vd_search_meeting_room.jpg",
      },
      {
        headline: "Book a meeting room via through a form",
        description: "",
        image: "/portfolio/img/portfolio/vd_booking.jpg",
      },
      {
        headline: "Manage booking information that users applied for by admin-user",
        description: "Admin user can read and create, update the booking information on admin-page. This is built by react-admin with Firebase.",
        image: "/portfolio/img/portfolio/vd_admin_booking.jpg",
      },
      {
        headline: "The mail is sent to admin-user when use book a meeting room.",
        description: "This function is for admin-user not to overlook a booking user applied. This mail sending system is used by Firebase Functions",
        image: "/portfolio/img/portfolio/vd_mail.jpg",
      },
      {
        headline: "The booking is going to be fixed if admin-user allow",
        description: "Other users can make sure whether to book the room at time they want or not.",
        image: "/portfolio/img/portfolio/vd_schedule.jpg",
      },
      {
        headline: "User have to register to book the meeting",
        description:
          "The authentication to handle register and log-in, log-out rely on Firebase. This app verifies whether the email that user type in register page is true or not.",
        image: "/portfolio/img/portfolio/vd_register.jpg",
      },
    ],
    features: [
      {
        headline: "Serverless apps",
        description:
          "This is a single page application by only react and firebase. I used React Hooks to handle data instead of Redux. I used react-admin and react-big-calendar that I connect with firebase.",
      },
    ],
    // webUrl: "",
    memo:
      "This app is not published yet because my client is making content and taking a photo. Also, I built this app for my client so that I don't plan to make this code public.",
  },
  {
    id: 2,
    serviceName: "Bizre",
    serviceThumbnail: "/portfolio/img/portfolio/bizre_thumbnail.jpg",
    serviceDescription:
      "This app is intended for a person who deal with real estate. They can advertise their properties that are on sale or rent at no cost.",
    appIcons: ["/portfolio/img/icon/python.svg", "/portfolio/img/icon/django.svg", "/portfolio/img/icon/mysql.svg", "/portfolio/img/icon/centos.svg"],
    usages: [
      {
        headline: "Search for a proprty by filtering area or station, cost and so on",
        description: "Users can store properties as favorites if they are logged-in.",
        image: "/portfolio/img/portfolio/bizre_searchlist.jpg",
      },
      {
        headline: "Check the information of a property in detail",
        description: "User can contact with the advertiser if they are interested in.",
        image: "/portfolio/img/portfolio/bizre_detail.jpg",
      },
      {
        headline: "Register this app by email-authentication",
        description:
          "User can use features of advertising property and storing property if they register. This app requires to verify their email that they input in register page as an authentication.User can use features of advertising property and storing property if they register. This app requires to verify their email that they input in register page as an authentication. This function is used by User authentication in Django.",
        image: "/portfolio/img/portfolio/bizre_register.jpg",
      },
      {
        headline: "Add their property as advertisement",
        description:
          "Users can add their property and advertise them at no cost if they register and admin-user allow. Of course, they update and delete their items. The term of advertising is  for only 40 days. Advertiser can receive notice of expiry date before 10 days and update expiry date during this 10days. If not, it will be automatically deleted on this app.",
        image: "/portfolio/img/portfolio/bizre_add_property.jpg",
      },
      {
        headline: "Set access permission for their property",
        description:
          "If advertiser want only some people to see their property, they can set access permission. If they do not have permit, it appears 403 page. In this If advertiser want only some people to see their property, they can set access permission. If they do not have permit, it appears 403 page. Users can sent an access request to an advertiser and users can watch the property if advertiser accepts the offer.",
        image: "/portfolio/img/portfolio/bizre_ar.jpg",
      },
      {
        headline: "send a mail that users might be interested in",
        description:
          "When a property is added, this app automatically send a mail to user that might have interest in this property according to user's area and needs. User can also register their needs for this mail.",
        image: "/portfolio/img/portfolio/bizre_mail.jpg",
      },
    ],
    features: [
      {
        headline: "Test code by fixture and factory-boy",
        description:
          "This app has a lot of features so that it is more likely to happen bugs. To reduce this possibility, I focussed on writing test codes in particular for user authentication. ",
        image: "/portfolio/img/portfolio/bizre_testcode.jpg",
      },
      {
        headline: "Make the structure of files clean",
        description:
          "Take a look at above image. In general, the bigger a product is, the more complex the code is. To avoid this problem, I strictly followed MVC design pattern. In addition, divided folder by features and separated template files from apps.",
      },
    ],
    webUrl: "https://biz-re.com/",
    memo: "I developed this app for my client. Therefore, I don't plan to make this code public.",
  },

  {
    id: 3,
    serviceName: "Webdirector Blog",
    serviceThumbnail: "/portfolio/img/portfolio/wd_thumbnail.jpg",
    serviceDescription: "Users can book a meeting room through this app and apply for a membership that can make use of working space.",
    appIcons: ["/portfolio/img/icon/python.svg", "/portfolio/img/icon/django.svg", "/portfolio/img/icon/mysql.svg", "/portfolio/img/icon/centos.svg"],
    features: [
      {
        headline: "Get more articles without loading by REST API",
        description: "",
        image: "/portfolio/img/portfolio/wd_restapi.gif",
      },
      {
        headline: "Switch languages by i18n",
        description:
          "This blog can switch between Japanese and English. If an article is written by both languages, the post can switch languages. If not, move to top page in the languages.",
        image: "/portfolio/img/portfolio/wd_i18n.gif",
      },
      {
        headline: "SEO Friendly",
        description:
          "I am taking care of HTML markdown and structure of the URL path. Also, I set alternate tags in HTML because this blog supports two languages. To increase the speed of the blog, I set a cache for static files and reduce the weight of the images.",
      },
    ],
    webUrl: "https://webdirector-blog.com/en/",
    githubUrl: "https://github.com/nk18chi/webdirector-blog/",
  },
  {
    id: 4,
    serviceName: "Portfolio",
    serviceThumbnail: "/portfolio/img/portfolio/portfolio.jpg",
    serviceDescription: "I introduce myself about what I can and my products on this page. This website is built by React and Github Hosting.",
    appIcons: [
      "/portfolio/img/icon/typescript.svg",
      "/portfolio/img/icon/react.svg",
      "/portfolio/img/icon/github.svg",
      "/portfolio/img/icon/sass.svg",
    ],
    webUrl: "https://nk18chi.github.io/portfolio/",
    githubUrl: "https://github.com/nk18chi/portfolio",
  },
];
