const database = [{
    id: 1,
    name: 'Damas',
    company: 'Chevrolet',
    position: '',
    year: '2020 yil',
    region: 'Namangan',
    distance: '80 000 km',
    color: 'oq',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/03/033156f1-cf8d-44a1-a135-d19a7488c342/1-408x306.jpg',
        img2: 'https://kluz-photos-alaps.kcdn.online/webp/03/033156f1-cf8d-44a1-a135-d19a7488c342/7-408x306.jpg',
        img3: 'https://kluz-photos-alaps.kcdn.online/webp/03/033156f1-cf8d-44a1-a135-d19a7488c342/2-408x306.jpg',
    },
    transmission: 'Mexanika',
    price: '8 800 $',
},
{
    id: 2,
    name: 'Lacetti',
    company: 'Chevrolet',
    position: '3',
    year: '2021 yil',
    region: 'Toshkent',
    distance: '34 000 km',
    color: 'oq',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/63/63820ea0-dc3a-41b1-b0a5-7080143eb859/1-408x306.jpg',
        img2: 'https://kluz-photos-alaps.kcdn.online/webp/63/63820ea0-dc3a-41b1-b0a5-7080143eb859/5-408x306.jpg',
        img3: 'https://kluz-photos-alaps.kcdn.online/webp/63/63820ea0-dc3a-41b1-b0a5-7080143eb859/6-408x306.jpg',
    },
    transmission: 'Avtomat',
    price: '17 100 $',
},
{
    id: 3,
    name: 'Gentra',
    company: 'Chevrolet',
    position: '3',
    year: '2021 yil',
    region: 'Toshkent',
    distance: '43 000 km',
    color: 'oq',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/44/442d3d0d-4d51-4087-8729-8db7315b0bff/1-408x306.jpg',
        img2: 'https://kluz-photos-alaps.kcdn.online/webp/44/442d3d0d-4d51-4087-8729-8db7315b0bff/4-full.jpg',
        img3: 'https://kluz-photos-alaps.kcdn.online/webp/44/442d3d0d-4d51-4087-8729-8db7315b0bff/3-full.jpg',
    },
    transmission: 'Avtomat',
    price: '20 400 $',
},
{
    id: 4,
    name: 'Staria',
    company: 'Hyundai',
    position: '  ',
    year: '2022 yil',
    region: 'Toshkent',
    distance: '48 000 km',
    color: 'qora',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/b1/b163ffbc-d0ac-41d7-9a3f-7f7eb59162f3/5-full.jpg',
        img2: 'https://kluz-photos-alaps.kcdn.online/webp/b1/b163ffbc-d0ac-41d7-9a3f-7f7eb59162f3/1-full.jpg',
        img3: 'https://kluz-photos-alaps.kcdn.online/webp/b1/b163ffbc-d0ac-41d7-9a3f-7f7eb59162f3/4-full.jpg',
    },
    transmission: 'Avtomat',
    price: '52 077 $',
}, {
    id: 5,
    name: 'Song Plus EV',
    company: 'BYD',
    position: ' ',
    year: '2022 yil',
    region: 'Toshkent',
    distance: '0 km',
    color: 'qora',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/68/68765e87-83cc-455d-90fe-40fcebaa172b/11-408x306.jpg',
        img2: 'https://kluz-photos-alaps.kcdn.online/webp/68/68765e87-83cc-455d-90fe-40fcebaa172b/12-full.jpg',
    },
    transmission: 'Avtomat',
    price: '37 800 $',
}, {
    id: 6,
    name: 'Niva',
    company: 'Vaz (Lada',
    position: ' ',
    year: '2020 yil',
    region: 'Qashqadaryo',
    distance: '159 000 km',
    color: 'oq',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/fb/fbcdbe99-48e4-4361-bf26-12550c1557ce/1-full.jpg',
        img2: 'https://kluz-photos-alaps.kcdn.online/webp/fb/fbcdbe99-48e4-4361-bf26-12550c1557ce/2-408x306.jpg',
        img3: 'https://kluz-photos-alaps.kcdn.online/webp/fb/fbcdbe99-48e4-4361-bf26-12550c1557ce/3-full.jpg',
    },
    transmission: 'Mexanika',
    price: '14 800 $',
}, {
    id: 7,
    name: 'Tracker',
    company: 'Chevrolet',
    position: '2',
    year: '2022 yil',
    region: 'Toshkent',
    distance: '73 000 km',
    color: 'qora',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/b6/b66c3628-4a24-4a44-8ace-ee49998a2154/1-408x306.jpg',

    },
    transmission: 'Avtomat',
    price: '26 000 $',
}, {
    id: 8,
    name: 'Bestune T77',
    company: 'FAW',
    position: ' ',
    year: '2020 yil',
    region: 'Toshkent',
    distance: '0 km',
    color: 'oq',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/c8/c8819271-c441-483d-b79f-bd90de12a8d4/1-full.jpg',
        img2: 'https://kluz-photos-alaps.kcdn.online/webp/c8/c8819271-c441-483d-b79f-bd90de12a8d4/2-full.jpg',
        img3: 'https://kluz-photos-alaps.kcdn.online/webp/c8/c8819271-c441-483d-b79f-bd90de12a8d4/3-408x306.jpg',
    },
    transmission: 'Avtomat',
    price: '28 900 $',
}, {
    id: 9,
    name: 'Lacetti',
    company: 'Chevrolet',
    position: '3',
    year: '2009 yil',
    region: 'jizzax',
    distance: '437 000 km',
    color: 'oq',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/db/db88cdf8-dc3b-4a81-9f5c-4dd979da37bb/1-full.jpg',
        img2: 'https://kluz-photos-alaps.kcdn.online/webp/db/db88cdf8-dc3b-4a81-9f5c-4dd979da37bb/2-408x306.jpg',
        img3: 'https://kluz-photos-alaps.kcdn.online/webp/db/db88cdf8-dc3b-4a81-9f5c-4dd979da37bb/3-full.jpg',
    },
    transmission: 'Avtomat',
    price: '8 414 $',
}, {
    id: 10,
    name: 'Equinox',
    company: 'Chevrolet',
    position: '3',
    year: '2020 yil',
    region: 'Qarshi',
    distance: '59 000 km',
    color: 'oq',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/27/27741bca-6d03-4666-9eaf-a41d9effe82d/1-408x306.jpg',
        img2: 'https://kluz-photos-alaps.kcdn.online/webp/27/27741bca-6d03-4666-9eaf-a41d9effe82d/2-full.jpg',
        img3: 'https://kluz-photos-alaps.kcdn.online/webp/27/27741bca-6d03-4666-9eaf-a41d9effe82d/3-full.jpg',
    },
    transmission: 'Avtomat',
    price: '32 000 $',
}, {
    id: 11,
    name: 'Cobalt',
    company: 'Chevrolet',
    position: '4',
    year: '2019 yil',
    region: 'Buxoro',
    distance: '56 000 km',
    color: 'oq',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/c3/c35a2f0a-c219-4cef-bd27-da486260ed81/1-408x306.jpg',
    },
    transmission: 'Avtomat',
    price: '13 500 $',
}, {
    id: 12,
    name: 'Malibu',
    company: 'Chevrolet',
    position: '3',
    year: '2012 yil',
    region: 'Buxoro',
    distance: '253 000 km',
    color: 'kok',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/64/64300760-e712-4848-9f3a-e2fae38ab3b8/24-408x306.jpg',
        img2: 'https://kluz-photos-alaps.kcdn.online/webp/64/64300760-e712-4848-9f3a-e2fae38ab3b8/26-full.jpg',
        img3: 'https://kluz-photos-alaps.kcdn.online/webp/64/64300760-e712-4848-9f3a-e2fae38ab3b8/29-408x306.jpg',
    },
    transmission: 'Avtomat',
    price: '18 200 $',
}, {
    id: 13,
    name: 'Spark',
    company: 'Chevrolet',
    position: '3',
    year: '2012 yil',
    region: 'Navoiy',
    distance: '51 231 km',
    color: 'oq',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/80/80229095-eafc-4f8d-b409-8e5532e26cab/2-full.jpg',
        img2: 'https://kluz-photos-alaps.kcdn.online/webp/80/80229095-eafc-4f8d-b409-8e5532e26cab/3-408x306.jpg',
        img3: 'https://kluz-photos-alaps.kcdn.online/webp/80/80229095-eafc-4f8d-b409-8e5532e26cab/4-408x306.jpg',
    },
    transmission: 'Avtomat',
    price: '7 085 $',
}, {
    id: 14,
    name: 'Starex',
    company: 'Hyundai',
    position: ' ',
    year: '2005 yil',
    region: 'Qoqon',
    distance: '239 000 km',
    color: 'oq',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/bd/bde5679f-b8de-45a3-b538-7a6bae6d7556/1-408x306.jpg',
        img2: 'https://kluz-photos-alaps.kcdn.online/webp/bd/bde5679f-b8de-45a3-b538-7a6bae6d7556/2-408x306.jpg',
        img3: 'https://kluz-photos-alaps.kcdn.online/webp/bd/bde5679f-b8de-45a3-b538-7a6bae6d7556/4-408x306.jpg',
    },
    transmission: 'Avtomat',
    price: '8 200 $',
}, {
    id: 15,
    name: ' Range Rover Sport',
    company: 'Land Rover',
    position: '1',
    year: '2009 yil',
    region: 'Toshkent',
    distance: '320 000 km',
    color: 'qora',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/56/56b60066-53e0-44e7-af51-172dd882a6c8/1-408x306.jpg',
        img2: 'https://kluz-photos-alaps.kcdn.online/webp/56/56b60066-53e0-44e7-af51-172dd882a6c8/2-408x306.jpg',
        img3: 'https://kluz-photos-alaps.kcdn.online/webp/56/56b60066-53e0-44e7-af51-172dd882a6c8/3-408x306.jpg',
    },
    transmission: 'Avtomat',
    price: '22 000 $',
}, {
    id: 16,
    name: 'Captiva',
    company: 'Chevrolet',
    position: '4',
    year: '2008 yil',
    region: 'Samarqand',
    distance: '200 000 km',
    color: 'oq',
    image: {
        img1: 'https://kluz-photos.kcdn.online/webp/73/73b21880-53bc-4508-8792-0fb66975686d/1-408x306.jpg',
        img2: 'https://kluz-photos.kcdn.online/webp/73/73b21880-53bc-4508-8792-0fb66975686d/3-408x306.jpg',
        img3: 'https://kluz-photos.kcdn.online/webp/73/73b21880-53bc-4508-8792-0fb66975686d/4-full.jpg',
    },
    transmission: 'Avtomat',
    price: '20 400 $',
}, {
    id: 17,
    name: ' (Lada) 2106',
    company: 'VAZ',
    position: ' ',
    year: '1985 yil',
    region: 'Jizzax',
    distance: '444 444 km',
    color: 'kok',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/d6/d64f45c0-e5f3-4c4d-9dcd-cebcd7647bfc/1-408x306.jpg',
        img2: 'https://kluz-photos-alaps.kcdn.online/webp/d6/d64f45c0-e5f3-4c4d-9dcd-cebcd7647bfc/2-408x306.jpg',
        img3: 'https://kluz-photos-alaps.kcdn.online/webp/d6/d64f45c0-e5f3-4c4d-9dcd-cebcd7647bfc/4-408x306.jpg',
    },
    transmission: 'Mexanika',
    price: '2 214 $',
}, {
    id: 18,
    name: 'Damas',
    company: 'Chevrolet',
    position: '3',
    year: '2022 yil',
    region: 'Fargona',
    distance: '93 000 km',
    color: 'oq',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/77/7727781c-5bee-4a28-b40e-4e04d65900d7/1-full.jpg',
    },
    transmission: 'Avtomat',
    price: '9 850 $',
}, {
    id: 19,
    name: 'Gentra',
    company: 'Chevrolet',
    position: '1',
    year: '2018 yil',
    region: 'Samarqand',
    distance: '143 000 km',
    color: 'qizil',
    image: {
        img1: 'https://kluz-photos-alaps.kcdn.online/webp/1c/1ccb746a-dac2-4f3e-97e2-c4eef8609e88/1-408x306.jpg',
        img2: 'https://kluz-photos-alaps.kcdn.online/webp/1c/1ccb746a-dac2-4f3e-97e2-c4eef8609e88/3-408x306.jpg',
        img3: 'https://kluz-photos-alaps.kcdn.online/webp/1c/1ccb746a-dac2-4f3e-97e2-c4eef8609e88/3-408x306.jpg',
    },
    transmission: 'Mexanika',
    price: '13 000 $',
},
{
    id: 20,
    name: 'Pajero',
    company: 'Mitsubishi',
    position: '2',
    year: '2008 yil',
    region: 'Toshkent',
    distance: '170 000 km',
    color: 'qora',
    image: 'https://kluz-photos.kcdn.online/webp/31/31d03e67-81a1-4079-9a58-3e0da82cf163/1-408x306.jpg',
    // image: {
    //     img1: 'https://kluz-photos.kcdn.online/webp/31/31d03e67-81a1-4079-9a58-3e0da82cf163/1-408x306.jpg',
    //     img2: 'https://kluz-photos.kcdn.online/webp/31/31d03e67-81a1-4079-9a58-3e0da82cf163/2-408x306.jpg',
    //     img3: 'https://kluz-photos.kcdn.online/webp/31/31d03e67-81a1-4079-9a58-3e0da82cf163/4-408x306.jpg',
    // },
    transmission: 'Avtomat',
    price: '24 000 $',
},]

console.log(database);

let elCards = document.querySelector(".div")
database.forEach((value) => {
    let card =
        `


        <img src=${value.image}/>

        <h2>${value.id}<h2/>
        <h1>${value.name}</h1>
        <h3>${value.cc}</h3>
        <p>${value.position} pozitsiya</p>
        <p>viloyat: ${value.region}</p>
        <p>yurgani: ${value.distance}</p>
        <p>rangi: ${value.color}</p>
        <p>uzatma qutisi: ${value.transmission}</p>
        <h4>narxi:${value.price}</h4>
 `
    elCards.insertAdjacentHTML("beforeend", card)
})
let div=document.querySelector(".div")
let elkomp = document.querySelector("komp")
function companys(database) {
    for (let i = 0; i < database.length; i++) {
        if (database[i].company === 
            "Chevrolet") {
            div.innerHTML +=
        `
        <img src=${value.image}/>
        <h2>${value.id}<h2/>
        <h1>${value.name}</h1>
        <h3>${value.company}</h3>
        <p>${value.position} 
        pozitsiya</p>
        <p>viloyat: ${value.region}</p>
        <p>yurgani: ${value.distance}</p>
        <p>rangi: ${value.color}</p>
        <p>uzatma qutisi: 
        ${value.transmission}</p>
        <h4>narxi:${value.price}</h4>
        `
        }
    }
}


// let box = document.querySelector('.box');
// let breakfast = document.getElementById('break');

// function renderData(arr) {
//   for (let i = 0; i < arr.length; i++){
//     box.innerHTML += `
//     <img class="rasm" src=${arr[i].img} />
//     <h2>${arr[i].title}</h2>
//     `
//   }
// }

// // renderData(menu)






// function showBreakfast(menu) {
//   for (let i = 0; i < menu.length; i++){
//     if (menu[i].category === "breakfast") {
//       box.innerHTML += `
//       <img class="rasm" src=${menu[i].img} />
//       <h2>${menu[i].title}</h2>
//       `
//     }
//   }
// }
// // showBreakfast(menu)


// let input = document.getElementById('value');

// function getInput() {
//   console.log(input.value);
// }
