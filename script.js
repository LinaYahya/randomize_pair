/*





*/
const namesOfGroupA = [
  "Mohammed Yosri Mahmoud Mahani",
  "Alaa Rafat Ahmad",
  "Raghda N. Abu Rizq",
  "Basel Hassan Alsharif",
  "Mohammed Rabee Albattrawi",
  "Farah Alhalimi",
  "Ahmed Abumughessib",
  "Abeer Ayyad",
  "Abdullah Alsharif",
  "Shathaa Khalafallh",
  "Mohammed Zuhair Sallout",
  "Khaled Dawod",
  "Heleena jawad darwish",
  "Khaled Aref Ahmed Al-Nabaheen",
  "Aya Mohammad Al-Jalees",
  "Mohammed Majed Mostafa Sbeata",
  "Aya husam qunoo",
  "Khaled Fayez Abu Toha",
  "Ahmed Izz Murtaja",
  "Momen Qudaih",
  "Wesam Awad",
  "Ahmed Irheem",
  "momen algaga",
  "Heba Wael Adwan",
  "Hamdi Hani Redwan",
  "Abd Elrhman Jabr Mait",
  "Mohannad Nayif Sabea",
  "Amal Mousa Ibrahim Alsattari",
  "Abdallah Abujazar",
  "Nour-eldin Nemer Alagha",
  "Haitham Akram Abu Lamdi",
  "Basel Aburamadan",
  "Eman Hatem Alabsi",
  "Yasser Alaa Abu Amro",
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

