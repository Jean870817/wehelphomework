// Task 1
function findAndPrint(messages, currentStation) {
  const stationDict = {
    Songshan: 1,
    "Nanjing Sanmin": 2,
    "Taipei Arena": 3,
    "Nanjing Fuxing": 4,
    "Songjiang Nanjing": 5,
    Zhongshan: 6,
    Beimen: 7,
    Ximen: 8,
    Xiaonanmen: 9,
    "Chiang Kai-shek Memorial Hal": 10,
    Guting: 11,
    "Taipower Building": 12,
    Gongguan: 13,
    Wanlong: 14,
    Jingmei: 15,
    Dapinglin: 16,
    Qizhang: 17,
    Xiaobitan: 17.1,
    "Xindian City Hall": 18.1,
    Xindian: 19,
  };

  const personPosition = [];

  for (const [person, message] of Object.entries(messages)) {
    for (const [station, value] of Object.entries(stationDict)) {
      if (message.includes(station)) {
        personPosition.push({ name: person, value: value });
      }
    }
  }

  const currentStationValue = stationDict[currentStation];

  const distance = personPosition.map(({ value }) =>
    Math.abs(currentStationValue - value)
  );
  const minDistance = Math.min(...distance);
  const minDistanceIndexes = distance.reduce(
    (acc, cur, idx) => (cur === minDistance ? acc.concat(idx) : acc),
    []
  );

  if (minDistanceIndexes.length > 0) {
    const randomIndex = Math.floor(Math.random() * minDistanceIndexes.length);
    const indexOfMinValue = minDistanceIndexes[randomIndex];
    console.log(personPosition[indexOfMinValue].name);
  } else {
    console.log("No person found");
  }
}

const messages = {
  Leslie: "I'm at home near Xiaobitan station.",
  Bob: "I'm at Ximen MRT station.",
  Mary: "I have a drink near Jingmei MRT station.",
  Copper: "I just saw a concert at Taipei Arena.",
  Vivian: "I'm at Xindian station waiting for you.",
};

findAndPrint(messages, "Wanlong");
findAndPrint(messages, "Songshan");
findAndPrint(messages, "Qizhang"); // print Leslie
findAndPrint(messages, "Ximen"); // print Bob
findAndPrint(messages, "Xindian City Hall"); // print Vivian

// Task 2

let occupied = {
  John: [],
  Bob: [],
  Jenny: [],
};

function book(consultants, hour, duration, criteria) {
  let availableConsultants = [];
  let intendHours = [hour, hour + duration]; // [15, 16]
  for (let consultant in occupied) {
    let bookedTimes = occupied[consultant];
    let available = true;
    for (let i = 0; i < bookedTimes.length; i++) {
      let bookedHours = bookedTimes[i];
      if (
        (bookedHours[0] <= intendHours[0] &&
          intendHours[0] <= bookedHours[1]) ||
        (bookedHours[0] <= intendHours[1] &&
          intendHours[1] <= bookedHours[1]) ||
        (intendHours[0] <= bookedHours[0] && intendHours[1] >= bookedHours[1])
      ) {
        available = false;
        break;
      }
    }
    if (available) {
      availableConsultants.push(consultant);
    }
  }

  if (availableConsultants.length > 0) {
    let availableConsultantsInfo = consultants.filter((person) =>
      availableConsultants.includes(person.name)
    );
    let bestConsultant;
    if (criteria === "price") {
      bestConsultant = availableConsultantsInfo.reduce((prev, curr) =>
        prev.price < curr.price ? prev : curr
      ).name;
    } else if (criteria === "rate") {
      bestConsultant = availableConsultantsInfo.reduce((prev, curr) =>
        prev.rate > curr.rate ? prev : curr
      ).name;
    }
    console.log(bestConsultant);
    occupied[bestConsultant].push(intendHours);
  } else {
    console.log("No Service");
  }
}

let consultants = [
  { name: "John", rate: 4.5, price: 1000 },
  { name: "Bob", rate: 3, price: 1200 },
  { name: "Jenny", rate: 3.8, price: 800 },
];

book(consultants, 15, 1, "price"); // Jenny
book(consultants, 11, 2, "price"); // Jenny
book(consultants, 10, 2, "price"); // John
book(consultants, 20, 2, "rate"); // John
book(consultants, 11, 1, "rate"); // Bob
book(consultants, 11, 2, "rate"); // No Service

// Task 3

function func(...data) {
  let middleNameList = [];

  for (let name of data) {
    let middleName = name[Math.floor(name.length / 2)];
    middleNameList.push(middleName);
  }

  let uniqueMiddleName = [];

  for (let i = 0; i < middleNameList.length; i++) {
    let middleName = middleNameList[i];
    let count = middleNameList.filter((name) => name === middleName).length;
    if (count === 1) {
      uniqueMiddleName.push(data[i]);
    }
  }

  if (uniqueMiddleName.length) {
    for (let result of uniqueMiddleName) {
      console.log(result);
    }
  } else {
    console.log("沒有");
  }
}

func("彭大牆", "陳王明雅", "吳明"); // print 彭大牆
func("郭靜雅", "王立強", "郭林靜宜", "郭立恆", "林花花"); // print 林花花
func("郭宣雅", "林靜宜", "郭宣恆", "林靜花"); // print 沒有
func("郭宣雅", "夏曼藍波安", "郭宣恆"); // print 夏曼藍波安

// Task 4

function getNumber(index) {
  var a = Math.floor(index / 3);
  var b = index % 3;
  var c = 7 * a + b * 4;
  return c;
}
console.log(getNumber(1));
console.log(getNumber(5));
console.log(getNumber(10));
console.log(getNumber(30));
