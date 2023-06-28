/* 
The following codes are to allow you to suggest modifications on the Uork Web App.

Follow the GET redirects:



Obs: Remember to PR the repository :)
*/




const configs = {
    redirects: {
      login: ["login","LoginForm"],
      register: "registro",
      show_worker_profile: ["exibir","SearchExibir"],
      home: "inicio",
      notifications: "notifications",
      profile: "perfil",
    },
    payments: {
     pix: ["adicionarsaldo/Pix", "adicionarsaldo"],
     gift_card: ["reedemcode"]
    },
    admin: {
        admin: ["admin"]
    },
    articles: {
        example: ["example"]
    },
    smartphones_home: {
        ios_start: "ios-tutorial",
        android_start: "https://play.google.com/store/apps/details?id=com.app.youworkapp2",
    },
    smartphone_notifications: { 
        ios_notifications: "notifications",
        android_notifications: "noticications"
    },
     smartphone_laara: { 
        ios: "female",
        android: "female",
        standart: "male"
    }

}
console.log("Redirect´s uork:");
console.log(configs)
