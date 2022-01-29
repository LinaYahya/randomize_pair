const namesOfGroupA = [
  "Abdallah Rabah",
  "Abdulrahman Kallousa",
  "Amjad Hassan",
  "Deena Alghazali",
  "Fady Alwazir",
  "Farah Shaqoura",
  "Ghada Attallah",
  "Hani Olwan",
  "Ibrahim Jarada",
  "Khaled EL-Khudary",
  "Mahmoud AlDabba",
  "Mayar Kabaja",
  "Mohammed Hamada",
  "Monther Alzamli",
  "Rand AbuAlArraj",
  "Saleh Marouf",
  "Salma issa",
  "Wessal Elkhatib",
  "Yosra Jaradh",
  "Zaher Abuamro",
];
const namesOfGroupB = [
  "Abedalrahman Shamia",
  "Ahmed Qeshta",
  "Ayman Fahgan",
  "Braa ferwana",
  "Emran Elmasri",
  "IBRAHIM ALHELOU",
  "Israa Rayya",
  "Jehad Abushaqra",
  "Karam Zomlut",
  "Mahmoud Alhato",
  "Manar Abedalhadi",
  "Maram Msabeh",
  "Mohamed Helles",
  "Mohammad AlHabil",
  "mostafa qanoo",
  "Nabil AbuShaban",
  "Nada Abuzaid",
  "Najlaa Abuouda",
  "Rawan Algharabli",
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
const randomBBtn = document.getElementById("random-b");

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
randomBBtn.onclick = () => {
  clearCells();
  createTable(randomizeNames(namesOfGroupB));
};
