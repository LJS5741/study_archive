// JSON 데이터
const jsonData = `
[
    {
        "name": "안유진",
        "age": 20,
        "isStudent": false,
        "courses": ["음악", "댄스", "연기"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    },
    {
        "name": "가을",
        "age": 20,
        "isStudent": false,
        "courses": ["음악", "댄스", "연기"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    },
    {
        "name": "레이",
        "age": 19,
        "isStudent": true,
        "courses": ["음악", "일본어", "연기"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    }
]
`;

// 1. 역직렬화
const objectJson = JSON.parse(jsonData);
console.log(objectJson);

// 2. 각 멤버의 이름만 출력 : forEach
objectJson.forEach((item) => {
  console.log(item.name);
});

// 3. 도시가 서울인 멤버만 출력 : filter().forEach()
objectJson
  .filter(e => e.address.city === "서울")
  .forEach(item => {
    console.log(item.name);

  });