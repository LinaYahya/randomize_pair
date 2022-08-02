const namesOfGroupA = [
  "Aaya M. Elsharief",
  "AbdAl-Ilah Monuir Abu AL-Hussein",
  "Abdalhakim Abumusameh",
  "Abdallah Ibrahim Alshawaf",
  "Abdelhaleem Elderawi",
  "Ahmed B. Abu Sharar",
  "Ali Sadaallah Al Shanti",
  "Ali Shbair",
  "Aseel Abdulsattar Abusahmoud",
  "Asil Mustafa alghoul",
  "Bakeza Saeed Yousef Diazada",
  "Basil fayez hassan Alshiekh",
  "Bayan Abd EL Bary",
  "Fadi H. Zaqout",
  "HusamEddin kamal Ahmad Abu Mughessib",
  " Ibtisam Hemmo",
  "mahmoud hesham hassan hammad",
  "Mai Mohammed Abu Abed",
  "Mai Yahia Ismail Elhajeen",
  "Mohammad Alwadia",
  "mohammed alagha",
  "Mohammed Jaber",
  "Mohammed Omar Khalil Balousha",
  "mohmmed abd Al-rahman al-shorafa",
  "Mostafa Omar Balousha",
  "Mustafa Salem",
  "Nada suhail khalil Ayesh",
  "nader emad shakshak",
  "Nagham Abuwarda",
  "Rabee A. R. ALBHAISI",
  "Riyad Mohammed Salem",
  "Said Mahmoud Said Madi",
  "Saif Al-Din Al-Hayek",
  "Salsabeel omar alnajjar",
  "sami hannoush",
  "Sara Dhaman",
  "Shams Elkoudary",
  "Shatha Khaled Eqdaih",
  " Tareq Hisham Abu Aqlain",
  "Tariq esa mohammed abu sada",
  "Yazeed Sobhi Al-Abed El-Haj Salem",
  "Zayan Hassan Alaraishy",
];

const randomizeNames = (names) => {
  let arr = [];
  let arrOfNames = [...names];
  let length = arrOfNames.length;
  for (let i = names.length; i > 0; i--) {
    const random = Math.floor(Math.random() * arrOfNames.length);
    arr.push(arrOfNames[random]);
    arrOfNames = arrOfNames.filter((ele) => ele !== arrOfNames[random]);
    length = arrOfNames.length;
  }
  return arr;
};

const cells = document.querySelectorAll("th");
const randomABtn = document.getElementById("random-a");
const createTable = (names) => {
  for (let i = 0; i < names.length; i++) {
    cells[i].textContent = names[i];
  }
};
const clearCells = () => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
};
randomABtn.onclick = () => {
  clearCells();
  createTable(randomizeNames(namesOfGroupA));
};

