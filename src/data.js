const models = [
      {
        id: 1,
        name: "Abby Champion", 
        image: "https://i.pinimg.com/originals/70/f7/f8/70f7f891dcfdcae3036db63c0c6429ae.jpg", 
        agency: "Next", 
        age: 22, 
        city: "Los Angeles", 
        ranking: 1, 
        shows_walked: 96, 
        height: 180, 
        special_skills: "improv", 
        fee: 10000, 
        insta_followers: 343000
      },
      {
        id: 2,
        name: "Achenrin Madit", 
        image: "https://i.mdel.net/i/db/2021/1/1451324/1451324-500w.jpg", 
        agency: "The Industry", 
        age: 18, 
        city: "New York", 
        ranking: 2, 
        shows_walked: 84, 
        height: 180, 
        special_skills: "improv", 
        fee: 10000, 
        insta_followers: 6000
      },
      {
        id: 3,
        name: "Adesuwa Aighewi", 
        image: "https://i.mdel.net/i/db/2019/4/1109713/1109713-500w.jpg", 
        agency: "The Society", 
        age: 33, 
        city: "New York", 
        ranking: 3, 
        shows_walked: 146, 
        height: 173, 
        special_skills: "singing", 
        fee: 10000, 
        insta_followers: 140000
      },
      {
        id: 4,
        name: "Adut Akech", 
        image: "https://booker-media.thesocietymanagement.com/Library/258/20190715_121536944_M.JPG", 
        agency: "The Society", 
        age: 21, 
        city: "New York", 
        ranking: 4, 
        shows_walked: 216, 
        height: 180, 
        special_skills: "singing", 
        fee: 10000, 
        insta_followers: 1200000
      },
      {
        id: 5,
        name: "Ajok Madel", 
        image: "https://booker-media.thesocietymanagement.com/Library/258/20190715_121536944_M.JPG", 
        agency: "The Industry", 
        age: 21, 
        city: "Paris", 
        ranking: 5 , 
        shows_walked: 73, 
        height: 177, 
        special_skills: "rock climbing", 
        fee: 10000, 
        insta_followers: 10000
      },
      {
        id: 6,
        name: "Anok Yai", 
        image: "https://images.fashionmodeldirectory.com/model/000000616909-_-squaremedium.jpg", 
        agency: "Next", 
        age: 23, 
        city: "New York", 
        ranking: 6, 
        shows_walked: 124, 
        height: 177, 
        special_skills: "rock climbing", 
        fee: 10000, 
        insta_followers: 450000
      },
      {
        id: 7,
        name: "Ansley Gulielmi", 
        image: "https://i.mdel.net/i/db/2021/1/1449141/1449141-500w.jpg", 
        agency: "Heroes", 
        age: 17, 
        city: "New York", 
        ranking: 7,
        shows_walked: 52, 
        height: 173, 
        special_skills: "combat training", 
        fee: 10000, 
        insta_followers: 8000
      },
      {
        id: 8,
        name: "Ariel Nicholson", 
        image: "https://3.bp.blogspot.com/-P_L6TK1qhls/WqW7086nI1I/AAAAAAAAAXw/5bPhTtmqxpMXc7h4fHksqYefFGKm-Z-UACLcBGAs/s1600/Ariel%2BNicholson.jpg", 
        agency: "DNA", 
        age: 17, 
        city: "New York", 
        ranking: 8, 
        shows_walked: 14, 
        height: 182, 
        special_skills: "combat training", 
        fee: 10000, 
        insta_followers: 16000
      },
      {
        id: 9,
        name: "Bente Oort", 
        image: "https://i.pinimg.com/originals/3e/55/2e/3e552e7ff6b27abc7d37b7c52ce05253.jpg", 
        agency: "DNA", 
        age: 20, 
        city: "Amsterdam", 
        ranking: 9, 
        shows_walked: 123, 
        height: 177, 
        special_skills: "improv", 
        fee: 5000, 
        insta_followers: 20000
      },
      {
        id: 10,
        name: "Birgit Kos", 
        image: "https://i.mdel.net/i/db/2018/4/898995/898995-500w.jpg", 
        agency: "The Society",
        age: 24, 
        city: "Paris", 
        ranking: 10, 
        shows_walked: 157, 
        height: 177, 
        special_skills: "improv", 
        fee: 5000, 
        insta_followers: 150000
      },
      {
        id: 11,
        name: "Blesnya Minher", 
        image: "https://i.mdel.net/i/db/2017/2/650669/650669-500w.jpg", 
        agency: "The Society", 
        age: 16, 
        city: "New York", 
        ranking: 11, 
        shows_walked: 181, 
        height: 173, 
        special_skills: "singing", 
        fee: 5000, 
        insta_followers: 39000
      },
      {
        id: 12,
        name: "Cara Taylor", 
        image: "https://i.pinimg.com/originals/24/94/85/249485f8cfd06bfdee8c2b8c8573adfa.jpg", 
        agency: "Next", 
        age: 17, 
        city: "New York", 
        ranking: 12, 
        shows_walked: 255, 
        height: 182, 
        special_skills: "singing", 
        fee: 5000, 
        insta_followers: 89000
      },
      {
        id: 13,
        name: "Dilone", 
        image: "https://i.pinimg.com/originals/55/1c/f2/551cf22c2b5526bb0e0bd817cad0dfb9.jpg", 
        agency: "The Society", 
        age: 21, 
        city: "Los Angeles", 
        ranking: 13, 
        shows_walked: 202, 
        height: 180, 
        special_skills: "rock climbing", 
        fee: 5000, 
        insta_followers: 30000
      },
      {
        id: 14,
       name: "Eniola Abioro", 
       image: "https://hautefashionafrica.com/wp-content/uploads/2019/01/eniola-aboro-347x445.jpg", 
       agency: "Next", 
       age: 25, 
       city: "Paris", 
       ranking: 14, 
       shows_walked: 41, 
       height: 182, 
       special_skills: "rock climbing", 
       fee: 5000, 
       insta_followers: 15000
      },
      {
        id: 15,
        name: "Felice Nova Noordhoff", 
        image: "https://elite-v2.s3.amazonaws.com/media/c/i/2020/02/06/16/20/13.7d8eecc52da3.jpg", 
        agency: "Elite", 
        age: 21, 
        city: "Amsterdam", 
        ranking: 15, 
        shows_walked: 89, 
        height: 180, 
        special_skills: "combat training", 
        fee: 5000, 
        insta_followers: 16000
      },
      {
       id: 16,
       name: "Fran Summers", 
       image: "https://i.pinimg.com/736x/66/37/00/66370051102ea960542e5fb11ac42bff.jpg", 
       agency: "The Society", 
       age: 16, 
       city: "London", 
       ranking: 16, 
       shows_walked: 227, 
       height: 180, 
       special_skills: "combat training", 
       fee: 5000, 
       insta_followers: 60000
      },
      {
       id: 17,
       name: "Giedre Dukauskaite", 
       image: "https://elite-v2.s3.amazonaws.com/media/c/i/2020/02/06/16/21/2.e499583394b5.jpg", 
       agency: "Elite", 
       age: 18, 
       city: "London", 
       ranking: 17, 
       shows_walked: 185, 
       height: 180, 
       special_skills: "improv", 
       fee: 5000, 
       insta_followers: 100000
      },
      {
       id: 18,
       name: "Giselle Norman", 
       image: "https://video-images.vice.com/_uncategorized/1522170899833-GiselleNormanCARTERBOWMAN-092.jpeg", 
       agency: "Elite", 
       age: 17, 
       city: "London", 
       ranking: 18, 
       shows_walked: 150, 
       height: 173, 
       special_skills: "improv", 
       fee: 5000, 
       insta_followers: 30000
      },
      {
      id: 19,
      name: "Grace Elizabeth", 
      image: "https://i.pinimg.com/originals/2c/fe/ea/2cfeea649f705ea3e7f8d6b57dad7c87.jpg", 
      agency: "The Society", 
      age: 21, 
      city: "New York", 
      ranking: 19, 
      shows_walked: 200, 
      height: 177, 
      special_skills: "singing", 
      fee: 5000, 
      insta_followers: 1200000
      },
      {
      id: 20,
      name: "Hannah Motler", 
      image: "https://i.mdel.net/i/db/2021/2/1468275/1468275-500w.jpg", 
      agency: "The Society", 
      age: 17, 
      city: "London", 
      ranking: 20, 
      shows_walked: 250, 
      height: 180, 
      special_skills: "singing", 
      fee: 5000, 
      insta_followers: 25000
      },
      {
      id: 21,
      name: "He Cong", 
      image: "https://cdn.asiatatler.com/generationt/i/ap/2019/09/04171903-wechat-image-20180605100722_cover_1333x2000.jpg", 
      agency: "The Society", 
      age: 18, 
      city: "Paris", 
      ranking: 21, 
      shows_walked: 124, 
      height: 182, 
      special_skills: "rock climbing", 
      fee: 5000, 
      insta_followers: 110000
      },
      {
      id: 22,
      name: "Heejung Park", 
      image: "https://i.mdel.net/i/db/2020/2/1293486/1293486-500w.jpg", 
      agency: "DNA", 
      age: 27, 
      city: "Paris", 
      ranking: 22, 
      shows_walked: 166, 
      height: 173, 
      special_skills: "rock climbing", 
      fee: 1000, 
      insta_followers: 33000
      },
      {
      id: 23,
      name: "Hiandra Martinez", 
      image: "https://i.pinimg.com/originals/f2/44/6b/f2446ba25cd9af1c905779ab31bf2875.jpg", 
      agency: "DNA", 
      age: 20, 
      city: "New York", 
      ranking: 23, 
      shows_walked: 98, 
      height: 180, 
      special_skills: "combat training", 
      fee: 1000, 
      insta_followers: 10000
      },
      {
      id: 24,
      name: "Hyun Ji Shin", 
      image: "https://c6oxm85c.cloudimg.io/cdno/n/q85/https://az617363.vo.msecnd.net/imgmodels/models/MD10003908/599a2406_copy7fe439edfa382c33b4a1a99ef7969fbe_thumb.jpg", 
      agency: "IMG", 
      age: 18, 
      city: "Los Angeles", 
      ranking: 24, 
      shows_walked: 352, 
      height: 177, 
      special_skills: "combat training", 
      fee: 1000, 
      insta_followers: 115000
      },
      {
      id: 25,
      name: "Indira Scott", 
      image: "https://i.mdel.net/i/db/2018/6/922874/922874-500w.jpg", 
      agency: "Next", 
      age: 19, 
      city: "New York", 
      ranking: 25, 
      shows_walked: 112, 
      height: 180, 
      special_skills: "improv", 
      fee: 1000, 
      insta_followers: 66000
      },
      {
      id: 26,
      name: "Jill Kortleve", 
      image: "https://dazedimg-dazedgroup.netdna-ssl.com/2000/azure/dazed-prod/1260/6/1266032.jpg", 
      agency: "Women", 
      age: 22, 
      city: "Amsterdam", 
      ranking: 26, 
      shows_walked: 60, 
      height: 180, 
      special_skills: "improv", 
      fee: 1000, 
      insta_followers: 220000
      },
      {
      id: 27,
      name: "Kaia Gerber", 
      image: "https://pbs.twimg.com/media/EVfrvg5XsAAyGI_.jpg", 
      agency: "DNA", 
      age: 19, 
      city: "Los Angeles", 
      ranking: 27, 
      shows_walked: 164, 
      height: 182, 
      special_skills: "singing", 
      fee: 1000, 
      insta_followers: 6000000
      },
      {
      id: 28,
      name: "Kristina Grikaite", 
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kris-grikaite.jpg/445px-Kris-grikaite.jpg", 
      agency: "Ford", 
      age: 20, 
      city: "New York", 
      ranking: 28, 
      shows_walked: 135, 
      height: 173, 
      special_skills: "singing", 
      fee: 1000, 
      insta_followers: 197000
      },
      {
      id: 29,
      name: "Kyla Ramsey", 
      image: "https://i.mdel.net/i/db/2019/10/1212123/1212123-500w.jpg", 
      agency: "Ford", 
      age: 27, 
      city: "Los Angeles", 
      ranking: 29, 
      shows_walked: 78, 
      height: 180, 
      special_skills: "rock climbing", 
      fee: 1000, 
      insta_followers: 6000
      },
      {
      id: 30,
      name: "Lara Mullen", 
      image: "https://mediaslide-europe.storage.googleapis.com/metromodels/pictures/1097/5519/large-1587724368-5393fbfd3f660ef7e884603be9b1915d.jpg", 
      agency: "Ford", 
      age: 30, 
      city: "London", 
      ranking: 30, 
      shows_walked: 300, 
      height: 180, 
      special_skills: "rock climbing", 
      fee: 1000, 
      insta_followers: 18000
      },
      {
      id: 31,
      name: "Lila Moss", 
      image: "https://i.mdel.net/mdx/i/2018/09/modelsdot_SS19_go-sees_william-alden-manning-64-lydia-hunt.jpg", 
      agency: "IMG", 
      age: 24, 
      city: "London", 
      ranking: 31, 
      shows_walked: 43, 
      height: 173, 
      special_skills: "combat training", 
      fee: 1000, 
      insta_followers: 135000
      },
      {
      id: 32,
      name: "Lina Zhang", 
      image: "https://i.mdel.net/i/db/2019/1/1057168/1057168-500w.jpg", 
      agency: "IMG", 
      age: 35, 
      city: "Paris", 
      ranking: 32, 
      shows_walked: 216, 
      height: 177, 
      special_skills: "combat training", 
      fee: 1000, 
      insta_followers: 13000
      },
      {
      id: 33,
      name: "Lineisy Montero", 
      image: "https://4.bp.blogspot.com/-bAkj5WvHiLw/V4RvyUrulEI/AAAAAAAAdG8/QShzrD_UZc0xu0YBCMR6B1q4PAm6LV4ZgCLcB/s1600/lineisymontero.jpg", 
      agency: "IMG", 
      age: 23, 
      city: "New York", 
      ranking: 33, 
      shows_walked: 398, 
      height: 180, 
      special_skills: "horseback riding", 
      fee: 1000, 
      insta_followers: 200000
      },
      {
      id: 34,
      name: "Lulu Tenney", 
      image: "https://i.mdel.net/i/db/2020/2/1293346/1293346-500w.jpg", 
      agency: "Next", 
      age: 20, 
      city: "New York", 
      ranking: 34, 
      shows_walked: 94, 
      height: 180, 
      special_skills: "archery", 
      fee: 10000, 
      insta_followers: 27000
      },
      {
      id: 35,
      name: "Luna Bijl", 
      image: "https://i.pinimg.com/originals/c7/38/f5/c738f579b1c609790281d3a8b645db88.jpg", 
      agency: "The Society", 
      age: 28, 
      city: "Amsterdam", 
      ranking: 35, 
      shows_walked: 178, 
      height: 180, 
      special_skills: "horseback riding", 
      fee: 10000, 
      insta_followers: 235000
      },
      {
      id: 36,
      name: "Maike Inga", 
      image: "https://i.pinimg.com/474x/b3/d0/72/b3d0721c2f6ed6cd91850ed67bac6714.jpg", 
      agency: "Women", 
      age: 25, 
      city: "Paris", 
      ranking: 36, 
      shows_walked: 140, 
      height: 173, 
      special_skills: "archery", 
      fee: 10000, 
      insta_followers: 14000
      },
      {
      id: 37,
      name: "Maty Fall", 
      image: "https://i.pinimg.com/originals/09/4b/a1/094ba1b53cdf2905fff0088ed7e41839.jpg", 
      agency: "Women", 
      age: 16,
      city: "London", 
      ranking: 37, 
      shows_walked: 76, 
      height: 173, 
      special_skills: "horseback riding", 
      fee: 10000, 
      insta_followers: 6000
      },
      {
      id: 38,
      name: "Mayowa Nicholas", 
      image: "https://i.mdel.net/i/db/2016/3/496326/496326-800w.jpg", 
      agency: "Women", 
      age: 23, 
      city: "New York", 
      ranking: 38, 
      shows_walked: 165, 
      height: "6'1", 
      special_skills: "archery", 
      fee: 10000, 
      insta_followers: 183000
      },
      {
      id: 39,
      name: "Mika Schneider", 
      image: "https://i.mdel.net/i/db/2019/10/1205847/1205847-500w.jpg", 
      agency: "Elite", 
      age: 21, 
      city: "Paris", 
      ranking: 39, 
      shows_walked: 70, 
      height: 180, 
      special_skills: "horseback riding", 
      fee: 10000, 
      insta_followers: 70000
      },
      {
      id: 40,
      name: "Miriam Sanchez", 
      image: "https://i.mdel.net/i/db/2020/9/1390290/1390290-500w.jpg", 
      agency: "Ford", 
      age: 26, 
      city: "Barcelona", 
      ranking: 40, 
      shows_walked: 58, 
      height: 177, 
      special_skills: "archery", 
      fee: 10000, 
      insta_followers: 16000
      },
      {
      id: 41,
      name: "Mona Tougaard", 
      image: "https://images.businessoffashion.com/profiles/asset/1645214279476808/mona-tougaard_courtesy-1645214305994579.png?auto=format%2Ccompress&fit=crop&crop=faces&h=256&min-w=256&max-w=256", 
      agency: "Next", 
      age: 20, 
      city: "Amersterdam", 
      ranking: 41, 
      shows_walked: 322, 
      height: 173, 
      special_skills: "horseback riding", 
      fee: 10000, 
      insta_followers: 56000
      },
      {
      id: 42,
      name: "Nina Marker", 
      image: "https://i.mdel.net/i/db/2020/2/1280909/1280909-500w.jpg", 
      agency: "The Society", 
      age: 23, 
      city: "Amersterdam", 
      ranking: 42, 
      shows_walked: 146, 
      height: 177, 
      special_skills: "archery", 
      fee: 5000, 
      insta_followers: 40000
      },
      {
      id: 43,
      name: "Nora Attal", 
      image: "https://64.media.tumblr.com/85fed498687f3d0f0c873a4ea1b55b41/tumblr_p6fka4p1mz1vqkk26o1_540.jpg", 
      agency: "DNA", 
      age: 25, 
      city: "New York", 
      ranking: 43, 
      shows_walked: 278, 
      height: 177, 
      special_skills: "horseback riding", 
      fee: 5000, 
      insta_followers: 20000
      },
      {
      id: 44,
      name: "Paloma Elsesser", 
      image: "https://i.pinimg.com/originals/7d/69/62/7d6962913b83927ba149ef8af9d0c1bc.jpg", 
      agency: "Elite", 
      age: 28, 
      city: "New York", 
      ranking: 44, 
      shows_walked: 39, 
      height: 177, 
      special_skills: "archery", 
      fee: 5000, 
      insta_followers: 357000
      },
      {
      id: 45,
      name: "Rebecca Leigh Longendyke", 
      image: "https://2.bp.blogspot.com/-RAXHwbw2E-w/Wp2XtR8oY7I/AAAAAAAAAXI/gC1bKzdHFI4PvbTLSdY1duxKLdj9Xzk6QCLcBGAs/s1600/Rebecca%2BLongendyke.jpg", 
      agency: "Women", 
      age: 27, 
      city: "New York", 
      ranking: 45, 
      shows_walked: 194, 
      height: 180, 
      special_skills: "horseback riding", 
      fee: 5000, 
      insta_followers: 53000
      },
      {
      id: 46,
      name: "Remington Williams", 
      image: "https://i.mdel.net/i/db/2020/2/1293579/1293579-500w.jpg", 
      agency: "Ford", 
      age: 21, 
      city: "New York", 
      ranking: 46, 
      shows_walked: 110, 
      height: 182, 
      special_skills: "archery", 
      fee: 5000, 
      insta_followers: 8000
      },
      {
      id: 47,
      name: "Sara Grace Wallerstedt", 
      image: "https://i.mdel.net/i/db/2019/4/1109716/1109716-500w.jpg", 
      agency: "The Society", 
      age: 18, 
      city: "New York", 
      ranking: 47, 
      shows_walked: 190, 
      height: 173, 
      special_skills: "horseback riding", 
      fee: 5000, 
      insta_followers: 70000
      },
      {
      id: 48,
      name: "Selena Forrest", 
      image: "https://i.pinimg.com/originals/f8/a9/06/f8a906fbeffd5e2b490c5893b59428a8.png", 
      agency: "The Society", 
      age: 19, 
      city: "Los Angeles", 
      ranking: 48, 
      shows_walked: 231, 
      height: 180, 
      special_skills: "archery", 
      fee: 1000, 
      insta_followers: 60000
      },
      {
      id: 49,
      name: "Signe Veiteberg", 
      image: "https://i.mdel.net/i/db/2020/2/1293662/1293662-500w.jpg", 
      agency: "The Society", 
      age: 24, 
      city: "Los Angeles", 
      ranking: 49, 
      shows_walked: 247, 
      height: 177, 
      special_skills: "horseback riding", 
      fee: 1000, 
      insta_followers: 220000
      },
      {
      id: 50,
      name: "Yoon Young Bae", 
      image: "https://i.mdel.net/i/db/2020/10/1409329/1409329-500w.jpg", 
      agency: "DNA", 
      age: 17, 
      city: "Paris", 
      ranking: 50, 
      shows_walked: 22, 
      height: 173, 
      special_skills: "archery", 
      fee: 1000, 
      insta_followers: 7000
      }
    ]

    const project_questions = [
      {id: 1,
        text: "What is your show called?"
       },
       {id: 2,
         text: "When is your show?"
       },
       {id: 3,
         text: "Where is your show?"
       },
       {id: 4,
        text: "What is your budget?"
       },
    ]

    const questions = [
      {id: 1,
       text: "What is your desired minimum age?",
       model_attr: "age"
      },
      {id: 2,
       text: "What is the height minimum?",
       model_attr: "height"
      },
      {id: 3,
       text: "What is the minimun amount of shows they have walked?",
       model_attr: "shows_walked"
      },
      {id: 4,
        text: "What is your fee limit on a model?",
        model_attr: "fee"
      },
      {id: 5,
        text: "How many instagram followers should she have?",
        model_attr: "insta_followers"
      },
      {id: 6,
        text: "Are you willing to fly models in?",
        model_attr: "city"
      },
      {id: 7,
        text: "Do you hate any agencies?",
        model_attr: "agency"
      },
      {id: 8,
        text: "Enter model special skills?",
        model_attr: "special_skills"

      },
    ]

  export {models, questions, project_questions};