// ============
// 1-masala:
//  1 dan 100 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 50 ga yetganda tsiklni to‘xtating (break).
for (let i = 1; i <= 100; i++) {
  if (i === 51) {
    break;
  }

  console.log(i);
}
// ============
// 2-masala:
//  1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 3 ga bo‘linadigan sonlarni tashlab o‘ting (continue).
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
// ============
// 3-masala:
//  1 dan 30 gacha bo‘lgan sonlarni chiqarib, faqat 5 ta son chiqargandan keyin tsiklni to‘xtating (break).
let count3 = 0;
for (let i = 1; i <= 30; i++) {
  console.log(i);
  count++;
  if (count === 5) {
    break;
  }
}
// ============
// 4-masala:
//  1 dan 50 gacha bo‘lgan sonlar orasida 7 ga bo‘linadigan birinchi 3 ta sonni ekranga chiqaring, so‘ngra tsiklni to‘xtating.
let count4 = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 7 === 0) {
    console.log(i);
    count4++;
  }
  if (count4 === 3) {
    break;
  }
}
// ============
// 5-masala:
//  Foydalanuvchi kiritgan haftaning raqamiga (1-7) mos ravishda haftaning kunini (dushanba-yakshanba) chiqarib bering.
let firstNumber5 = +prompt("Hafta kuninig raqamini kriting");
if (isNaN(firstNumber5) || firstNumber5 <= 1 || firstNumber5 >= 7) {
  alert("Iltimos faqat raqam kriting, va hafta kuniga mos bolsin");
}
switch (firstNumber5) {
  case 1: {
    console.log("Siz dushanba hafta kuninig raqamini kritingiz");
    break;
  }
  case 2: {
    console.log("Siz seshanba hafta kunining raqamini kritingiz");
    break;
  }
  case 3: {
    console.log("Siz chorshanba hafta kuning raqamini kritingiz");
    break;
  }
  case 4: {
    console.log("Siz payshanba hafta kuniniп raqamini kritingiz");
    break;
  }
  case 5: {
    console.log("Siz juma hafta kuninig raqamini kritingiz");
    break;
  }
  case 6: {
    console.log("Siz shanba kunining raqamini kritingiz");
    break;
  }
  case 7: {
    console.log("Siz yakshanba hafta kunini kritingiz");
    break;
  }
}

// ============
// 6-masala:
//  Foydalanuvchi kiritgan oy raqamiga (1-12) mos ravishda faslni (qish, bahor, yoz, kuz) aniqlang.
let firstNumber6 = +prompt("Oy raqamini kriting");
if (isNaN(firstNumber6) || firstNumber6 < 0) {
  alert("Iltimos faqat raqam kriting, va musbat bolsin");
}

switch (firstNumber6) {
  case 12:
  case 1:
  case 2: {
    console.log("siz qish faslining oy raqamini kritingiz");
    break;
  }
  case 3:
  case 4:
  case 5: {
    console.log("Siz bahor faslining oy raqamini kritingiz");
    break;
  }
  case 6:
  case 7:
  case 8: {
    console.log("Siz yoz faslining oy raqamini kritingiz");
    break;
  }
  case 9:
  case 10:
  case 11: {
    console.log("Siz kuz faslining oy raqamni kritingiz");
    break;
  }
  default: {
    console.log("Siz notogri oy raqamini kritingiz");
  }
}

// ============
// 7-masala:
//  Foydalanuvchi kiritgan songa mos ravishda “juft son” yoki “toq son” ekanligini aniqlang.
let firstNumber7 = +prompt("son kriting");

firstNumber7 = parseInt(firstNumber7, 10);

if (!isNaN(firstNumber7)) {
  if (firstNumber7 % 2 == 0) {
    console.log("Siz kritgan son juft son");
  } else {
    console.log("Siz kritgan son toq son");
  }
} else {
  console.log("iltimos faqat son kriting");
}
// ============
// 8-masala:
//  Foydalanuvchi kiritgan baho (1-5) bo‘yicha izoh chiqarib bering. Masalan: 5 – “A’lo”, 4 – “Yaxshi”, va hokazo.
let firstNumber8 = +prompt("Bahoni kriting");

if (!isNaN(firstNumber8) || firstNumber8 <= 0) {
  console.log("Iltimos faqat musbat son kriting");
} else {
  switch (firstNumber8) {
    case 1: {
      console.log(`Sizning bahoyingiz: ${firstNumber8} - juda yomon`);
      break;
    }
    case 2: {
      console.log(`Sizning bahoyingiz: ${firstNumber8} - yomon`);
      break;
    }
    case 3: {
      console.log(`Sizning bahoyingiz: ${firstNumber8} - ortacha`);
      break;
    }
    case 4: {
      console.log(`Sizning bahoyingiz: ${firstNumber8} - yaxshi`);
      break;
    }
    case 5: {
      console.log(`Sizning bahoyingiz: ${firstNumber8} - alo`);
      break;
    }
    default: {
      console.log("Iltimos faqat baholash sistemasi boyicha bahoni kriting");
    }
  }
}
// ============
// 9-masala:
// 1 dan 10 gacha bo‘lgan sonlarni ekranga chiqaring.
let i9 = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);
// ============
// 10-masala:
//  10 dan 1 gacha bo‘lgan sonlarni ekranga chiqarib bering.
let i10 = 10;

do {
  console.log(i10);
  i10--;
} while (i10 >= 1);
// ============
// 11-masala:
//  Foydalanuvchi 0 kiritmaguncha tsiklni davom ettiring va kiritilgan sonlarning yig‘indisini hisoblang.
let firstNumber11;
let sum11 = 0;

do {
  firstNumber11 = parseInt(+prompt("Kiyingi sonni kriting"), 10);
  if (!isNaN(firstNumber11)) {
    sum11 += firstNumber11;
  } else if (isNaN(firstNumber11)) {
    console.log("iltimos haqiqiy son kriting");
  }
} while (firstNumber11 !== 0);
console.log(`Siz kritgan sonlarning yigindisi ${sum11}`);

// ============
// 12-masala:
//  Foydalanuvchi musbat son kiritmaguncha tsiklni davom ettiring va oxirgi kiritilgan sonni chiqarib bering.
let firstNumber12;

do {
  firstNumber12 = parseInt(+prompt("Kiyingi sonni kriting"), 10);
  if (isNaN(firstNumber12)) {
    console.log("iltimos haqiqiy son kriting");
  }
} while (isNaN(firstNumber12) || firstNumber12 <= 0);
console.log(`Siz kritgan ohirgi son ${firstNumber12}`);

// ============
// 13-masala:
//  Foydalanuvchidan raqam kiritishni so‘rang va raqamning raqamlar yig‘indisini hisoblang.
let firstNumber13 = +prompt("son kriting");
let sum13 = 0;
do {
  firstNumber13 = parseInt(firstNumber13, 10);
  if (!isNaN(firstNumber13)) {
    if (firstNumber13 > 0) {
      sum13 += firstNumber13;
      firstNumber13--;
    } else {
      sum13 += firstNumber13;
      firstNumber13++;
    }
  } else {
    console.log("Iltimos faqat song kriting");
  }
} while (firstNumber13 !== 0);
console.log(sum13);
// ============
// 14-masala:
//  Foydalanuvchi manfiy son kiritguncha tsiklni davom ettiring va kiritilgan juft sonlar sonini hisoblang.
let firstNumber14;
let count14 = 0;

do {
  firstNumber14 = parseInt(+prompt("son kriting"), 10);
  if (!isNaN(firstNumber14)) {
    if (firstNumber14 % 2 == 0) {
      count14++;
    }
  } else {
    console.log("Iltimos faqat son kriting");
  }
} while (firstNumber14 > 0);
console.log(count14);
// ============
// 15-masala:
//  1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin faqat toq sonlarni.
let i15 = 1;

do {
  i15++;
  if (i15 % 2 != 0) {
    console.log(i15);
  }
} while (i15 !== 20);
// ============
// 16-masala:
//  1 dan 50 gacha bo‘lgan sonlardan 5 ga karrali sonlarni chiqaring.
let i16 = 1;

do {
  i16++;
  if (i16 % 5 === 0) {
    console.log(i16);
  }
} while (i16 !== 50);
// ============
// 17-masala:
//  Foydalanuvchidan butun son kiritishni so‘rang va bu sonni teskari ko‘rinishda chiqarib bering.
let firstNumber17 = 65;
let reverseNumber17 = 0;

while (firstNumber17 > 0) {
  let lastNumber17 = firstNumber17 % 10;

  reverseNumber17 = reverseNumber17 * 10 + lastNumber17;

  firstNumber17 = Math.floor(firstNumber17 / 10);
}

console.log(reverseNumber17);

// ============
// 18-masala:
//  100 dan 1 gacha bo‘lgan sonlarni, faqat 10 ga bo‘linadiganlarini chiqaring.
let i18 = 1;
do {
  i18++;
  if (i18 % 10 == 0) {
    console.log(i18);
  }
} while (i18 <= 100);
// ============
// 19-masala:
//  1 dan 100 gacha bo‘lgan barcha sonlarning kvadratini chiqarib bering.
let i19 = 1;
let multi19;
do {
  i19++;
  multi19 = i ** 2;
  console.log(multi19);
} while (i <= 100);
// ============
// 20-masala:
//  Foydalanuvchidan raqam kiritishni so‘rang. Agar kiritilgan son 5 ga bo‘linmasa, yana son kiritishni so‘rang.
let firstNumber20;

do {
  firstNumber20 = +prompt("son kriting");
  if (isNaN(firstNumber20)) {
    console.log("iltimos faqat son kriting");
  } else {
    console.log(`siz kritgan son: ${firstNumber20}`);
  }
} while (firstNumber20 % 5 !== 0);
// ============
// 21-masala:
//  Foydalanuvchi 10 dan katta son kiritmaguncha davom eting. Oxirida kiritilgan sonni chiqaring.
let firstNumber21;
let checkNumber21;
do {
  firstNumber21 = +prompt("son kriting");
  if (isNaN(firstNumber21)) {
    console.log("Iltimos faqat son kriting");
  }
  if (firstNumber21 >= 10 && !isNaN(firstNumber21)) {
    checkNumber21 = false;
  } else {
    checkNumber21 = true;
  }
} while (checkNumber21);
console.log(`Siz kritgan son: ${firstNumber21}`);
// ============
// 22-masala:
//  Foydalanuvchi “stop” so‘zini yozmaguncha davom eting. Oxirida nechta son kiritganini hisoblang.
let inputUser22;
let inputStopUser22;
let count22 = 0;
do {
  inputUser22 = prompt("raqam yoki stop sozi kriting");
  if (isNaN(inputUser22)) {
    if (inputUser22 === "stop") {
      inputStopUser22 = false;
    } else {
      inputStopUser22 = true;
    }
  } else {
    inputStopUser22 = true;
    count22++;
  }
} while (inputStopUser22);
console.log(`Siz ${count22}ta raqam kritingiz`);

// ============
// 23-masala:
//  Foydalanuvchi kiritgan sonlarning o‘rtacha qiymatini hisoblang (nol kiritilganda tsikl to‘xtaydi).
let inputUser23;
let sum23 = 0;
let count23 = 0;
do {
  inputUser23 = +prompt("son kriting");
  if (isNaN(inputUser23)) {
    console.log("Iltimos faqat son kriting");
  } else {
    sum23 += inputUser23;
    count23++;
  }
} while (inputUser23 !== 0);
if (count23 < 0) {
  sum23 = sum23 / count23;
  console.log(`Siz kritgan sonlarning ortacha qiymati: ${sum23}`);
} else {
  console.log("siz hali hech qanday raqm kiritmadingiz");
}

// ============
// 24-masala:
//  Foydalanuvchi kiritgan son musbat yoki manfiy ekanligini aniqlang.
let inputUser24 =
  +prompt("Son kriting") > 0
    ? "siz musbat son kritingiz"
    : "siz manfiy son kritingiz";
console.log(inputUser24);

// ============
// 25-masala:
//  Foydalanuvchi kiritgan son juft yoki toq ekanligini aniqlang.
let inputUser25 =
  +prompt("son kriting") % 2 == 0
    ? "siz juft son kritingiz"
    : "siz toq son kritingiz";
console.log(inputUser25);
// ============
// 26-masala:
//  Foydalanuvchi kiritgan son 100 dan katta yoki kichik ekanligini aniqlang.
let inputUser26 =
  +prompt("son kriting") > 100
    ? "siz kritgan son 100 dan katta"
    : "siz kritgan son 100 dan kichik";
console.log(inputUser26);
// ============
// 27-masala:
//  Foydalanuvchidan ikkita son so‘rang va ularning kattasini aniqlang.
let firstInputUser27 = +prompt("son kriting");
let secondInputUser27 = +prompt("son kriting");
let checkNumbers27 =
  firstInputUser27 > secondInputUser27
    ? "Siz kritgan birnchi son eng katta"
    : "Siz kritgan ikkinchi son en katta";
console.log(checkNumbers27);
// ============
// 28-masala:
//  Foydalanuvchi kiritgan son 3 ga va 5 ga bo‘linadigan yoki bo‘linmaydiganligini tekshiring.
let inputUser28 =
  +prompt("son kriting") % 15 == 0
    ? "Siz kritgan son 3ga va 5ga bolinadi"
    : "siz kritgan son shartlarga javob bermaydi";
console.log(inputUser28);
// ============
// 29-masala:
//0 dan 100 gacha tasodifiy son hosil qiling (Math.random) va uni ekranga chiqarib bering.
let createRandomNumber29 = Math.trunc(Math.random() * 100);
console.log(createRandomNumber29);
// ============
// 30-masala:
//Foydalanuvchidan haqiqiy son kiritishni so‘rang va uning faqat butun qismini chiqarib bering (Math.trunc).
let inputUser30 = +prompt("Haqiqiy son kriting");
if (isNaN(inputUser30)) {
  console.log("iltimos faqat son kriting");
} else {
  Math.trunc(inputUser23);
  console.log(inputUser30);
}

// ============
// 31-masala:
//Foydalanuvchidan haqiqiy son kiritishni so‘rang va uni yuqoriga qarab yaxlitlang (Math.ceil).
let inputUser31 = +prompt("Haqiqiy son kriting");
if (isNaN(inputUser31) || inputUser31 === "") {
  console.log("Iltimos faqat son kriting");
} else {
  Math.ceil(inputUser31);
  console.log(inputUser31);
}
// ============
// 32-masala:
//Foydalanuvchidan son kiritishni so‘rang va uning modulini toping (Math.abs).
let inputUser32 = +prompt("Son kriting");
if (isNaN(inputUser32) || inputUser33 === "") {
  console.log("Iltimos faqat son kriting");
} else {
  Math.abs(inputUser32);
  console.log(inputUser32);
}
// ============
// 33-masala:
//1 dan 50 gacha bo‘lgan sonlarni ekranga chiqaring.
for (let i = 1; i <= 50; i++) {
  console.log(i);
}
// ============
// 34-masala:
//10 dan 1 gacha bo‘lgan sonlarni ekranga chiqaring.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// ============
// 35-masala:
//1 dan 100 gacha bo‘lgan faqat toq sonlarni chiqarib bering.
for (let i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
// ============
// 36-masala:
//1 dan 50 gacha bo‘lgan faqat juft sonlarni chiqarib bering.
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// ============
// 37-masala:
//1 dan 100 gacha bo‘lgan barcha sonlarning yig‘indisini hisoblang.
let sum37 = 0;
for (let i = 1; i <= 100; i++) {
  sum37 += i;
}
console.log(sum37);
// ============
// 38-masala:
//Foydalanuvchidan son kiritishni so‘rang va 1 dan shu songacha bo‘lgan barcha sonlarning ko‘paytmasini hisoblang.
let multi38 = 1;
let check38;
do {
  let inputUser38 = +prompt("Iltimos son kriting");
  if (isNaN(inputUser38) || inputUser38 === "") {
    console.log("Iltimos faqat son kriting");
    check38 = true;
  } else {
    if (inputUser38 > 0) {
      for (inputUser38; inputUser38 >= 1; inputUser38--) {
        multi38 *= inputUser38;
      }
    } else {
      for (inputUser38; inputUser38 <= -1; inputUser38++) {
        multi38 *= inputUser38;
      }
    }
    check38 = false;
  }
} while (check38);
console.log(multi38);

// ============
// 39-masala:
//1 dan 20 gacha bo‘lgan sonlarning kvadratini chiqarib bering.
let multi39 = 1;
for (let i = 1; i <= 20; i++) {
  multi39 = i ** 2;
  console.log(multi39);
}
// ============
// 40-masala:
//Foydalanuvchi kiritgan sonning faktorialini hisoblang.
let multi40 = 1;
let check40;
do {
  let inputUser40 = +prompt("Iltimos son kriting");
  if (isNaN(inputUser40) || inputUser40 === "") {
    console.log("Iltimos faqat son kriting");
    check40 = true;
  } else {
    if (inputUser40 > 0) {
      for (inputUser40; inputUser40 >= 1; inputUser40--) {
        multi40 *= inputUser40;
      }
    } else {
      for (inputUser40; inputUser40 <= -1; inputUser40++) {
        multi40 *= inputUser40;
      }
    }
    check40 = false;
    console.log(multi40);
  }
} while (check40);
// ============
// 41-masala:
//1 dan 100 gacha bo‘lgan barcha 5 ga karrali sonlarni chiqarib bering.
for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    console.log(i);
  }
}
// ============
// 42-masala:
//Foydalanuvchidan musbat son kiritishni so‘rang va 1 dan shu songacha bo‘lgan sonlarning kubini chiqarib bering.
let inputUser42 = +prompt("Faqat musbat son kriting");
for (inputUser42; inputUser42 >= 1; inputUser42--) {
  console.log(inputUser42 ** 3);
}
// ============
// 43-masala:
//1 dan 100 gacha bo‘lgan barcha juft sonlarning yig‘indisini hisoblang.
let sum43 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    sum43 += i;
  }
}
console.log(sum43);
// ============
// 44-masala:
//1 dan 50 gacha bo‘lgan sonlar orasida 3 ga bo‘linadigan birinchi 10 ta sonni ekranga chiqaring.
let count44 = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 10 == 0) {
    count44++;
    console.log(i);
  }
  if (count44 >= 3) {
    break;
  }
}
// ============
// 45-masala:
//Foydalanuvchidan musbat butun son kiritishni so‘rang va shu songacha bo‘lgan sonlar yig‘indisini toping.
let userInput45 = +prompt("Iltimos faqat musbat son kriting");
let sum45 = 0;
for (userInput45; userInput45 >= 1; userInput45--) {
  sum45 += userInput45;
}
console.log(sum45);
// ============
// 46-masala:
//1 dan 10 gacha bo‘lgan barcha sonlarning kvadratlar yig‘indisini toping.
let multi46 = 1;
for (let i = 1; i <= 10; i++) {
  multi46 *= i;
}
console.log(multi46);
// ============
// 47-masala:
//Foydalanuvchi kiritgan musbat butun sonning barcha bo‘luvchilarini chiqarib bering.
let division47;
let check47;
do {
  let inputUser47 = +prompt("son kriting");
  if (
    isNaN(inputUser47) ||
    inputUser47 === "" ||
    inputUser47 < 0 ||
    Math.ceil(inputUser47) != inputUser47
  ) {
    console.log("Iltimos faqat musbat va butun son kriting");
    check47 = true;
  } else {
    for (let i = 1; i <= inputUser47; i++) {
      if (inputUser47 % i == 0) {
        console.log(`Siz kritgan sonning barcha boluvchilari: ${i}`);
      }
      check47 = false;
    }
  }
} while (check47);
// ============
// 48-masala:
//Foydalanuvchidan son kiritishni so‘rang va bu son 3 ga bo‘linadiganmi yoki yo‘qligini ternary operator yordamida aniqlang. Keyin 1 dan shu songacha bo‘lgan barcha sonlarni chiqarib bering.
let check48;

do {
  let inputUser48 = +prompt("Iltimos faqat musbat son kriting");
  if (
    isNaN(inputUser48) ||
    inputUser48 === "" ||
    Math.ceil(inputUser48) != inputUser48
  ) {
    console.log(
      "Ozbekcha chushunmaytakn bosez inglischa aytaman PLS DONT INPUT NEGATIV NUMBER NIGA!!!"
    );
    check48 = true;
  } else {
    let checked48 =
      inputUser48 % 3 != 0
        ? "Siz kritgan son 3ga bolinmaydi"
        : "Siz kritgan son 3ga bolinadi";
    console.log(checked48);
    for (let i = 1; i <= inputUser48; i++) {
      console.log(i);
    }
    check48 = false;
  }
} while (check48);
// ============
// 49-masala:
//Foydalanuvchi kiritgan oy raqamiga mos faslni (switch-case) aniqlang va 1 dan shu oy raqamigacha bo‘lgan sonlarni (for) ekranga chiqaring.

let inputUser49 = +prompt("Oy fasilining raqamini kriting");
if (isNaN(inputUser49) || inputUser49 === "" || inputUser49 >= 13) {
  console.log("Iltimos faqat raqam va oy ramlariga mos raqamlarni kriting");
  for (let i = 1; i <= inputUser49; i++) {
    console.log(i);
  }
}
switch (inputUser49) {
  case 1: {
    console.log("Siz Yanvar oyining raqamini kritingiz");
    break;
  }
  case 2: {
    console.log("Siz Fevral oyining raqamini kritingiz");
    break;
  }
  case 3: {
    console.log("Siz Mart oyining raqamini kritingiz");
    break;
  }
  case 4: {
    console.log("Siz Aprel oyining raqamini kritingiz");
    break;
  }
  case 5: {
    console.log("Siz May oyining raqamini kritingiz");
    break;
  }
  case 6: {
    console.log("Siz Iyun oyining raqamini kritingiz");
    break;
  }
  case 7: {
    console.log("Siz Iyul oyining raqamini kritingiz");
    break;
  }
  case 8: {
    console.log("Siz Avgust oyining raqamini kritingiz");
    break;
  }
  case 9: {
    console.log("Siz Sentyabr oyining raqamini kritingiz");
    break;
  }
  case 10: {
    console.log("Siz Oktyabr oyining raqamini kritingiz");
    break;
  }
  case 11: {
    console.log("Siz Noyabr oyining raqamini kritingiz");
    break;
  }
  case 12: {
    console.log("Siz Dekabr oyining raqamini kritingiz");
    break;
  }
  default: {
    console.log("Siz kritgan qiymat mavjud emas");
  }
}

// ============
// 50-masala:
//Tasodifiy son hosil qiling va bu son juft yoki toq ekanligini aniqlang. Agar son juft bo‘lsa, 1 dan 20 gacha bo‘lgan juft sonlarni chiqarib bering (for).

let createRandomNumber50 = Math.trunc(Math.random() * 100000000);
if (createRandomNumber50 % 2 == 0) {
  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
}

// ============
// 51-masala:
//Foydalanuvchidan musbat son kiritishni so‘rang va uning faktorialini hisoblang (while). Keyin sonning modul qiymatini toping (Math.abs).

let inputUser51 = +prompt("Iltimos faqat musbat son kriting");
let multi51 = 1;
while (inputUser51 >= 1) {
  multi51 *= inputUser51;
  inputUser51--;
}

console.log(multi51);

// ============
// 52-masala:
//Foydalanuvchidan hafta kuni raqamini kiritishni so‘rang (switch-case) va unga mos kun nomini chiqaring. Agar kun raqami juft bo‘lsa, qo‘shimcha ravishda 1 dan 10 gacha bo‘lgan sonlarni chiqarib bering (for).

let inputUser52 = +prompt(
  "Iltimos faqat musbat va hafta kuniga mos son kriting"
);
switch (inputUser52) {
  case 1: {
    console.log("Siz Dushanba hafta kunining raqamini kritingiz");
    break;
  }
  case 2: {
    console.log("Siz Seshanba hafta kunining kritingiz");
    break;
  }
  case 3: {
    console.log("Siz Chorshanba hafta kunining kritingiz");
    break;
  }
  case 4: {
    console.log("Siz Payshanba hafta kunining kritingiz");
    break;
  }
  case 5: {
    console.log("Siz Juma hafta kunining kritingiz");
    break;
  }
  case 6: {
    console.log("Siz Shanba hafta kunining kritingiz");
    break;
  }
  case 7: {
    console.log("Siz Yakshanba hafta kunining kritingiz");
    break;
  }
  default: {
    console.log("Siz kritgan qiymat mavjud emas");
  }
}
if (inputUser52 % 2 == 0) {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// ============
// 53-masala:
//Tasodifiy son hosil qilib, uni butun qismiga keltiring (Math.trunc) va bu songacha bo‘lgan barcha sonlarning yig‘indisini hisoblang (while).

let randomNumber53 = Math.trunc(Math.random() * 1000);
let sum53 = 0;
while (randomNumber53 >= 1) {
  sum53 += randomNumber53;
  randomNumber53--;
}
console.log(sum53);

// ============
// 54-masala:
//Foydalanuvchi manfiy son kiritmaguncha sonlarni kiritishni davom ettiring (do...while). Yakunida barcha kiritilgan sonlarning o‘rtacha qiymatini hisoblang.
let inputLastNumber;
let lastCount = 0;
let lastSum = 0;
let lastCheck;
do {
  inputLastNumber = +prompt("son kriting");
  if (isNaN(inputLastNumber) || inputLastNumber === "") {
    console.log("Iltimos faqat musbat son kriting");
    lastCheck = true;
  } else if (inputLastNumber > 0) {
    lastSum += inputLastNumber;
    lastCount++;
    console.log(`Siz kritgan son: ${inputLastNumber}`);
    lastCheck = true;
  } else {
    lastCheck = false;
    console.log(`Siz kritgan son: ${inputLastNumber} . . . . Cikl toxtatildi`);
  }
} while (lastCheck);
if (!isNaN(inputLastNumber) || inputLastNumber !== "") {
  console.log(lastSum / lastCount);
}
