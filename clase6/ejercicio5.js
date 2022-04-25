const list1 = [
    { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
  ];

  function ejercicio5(array, ){
    const countryObj = array.map((obj) => obj.country);
    const nameObj = array.map((obj) => obj.firstName);
    const languageObj = array.map((obj) => obj.language);

    for (let i = 0; i < array.length; i++) {
     
      if (languageObj) {
        array[i].message= `${nameObj[i]} from ${countryObj[i]} was the first ${languageObj[i]} developer in the conference`;
      } else {
        array[i].message = `There are not ${languageObj[i]} in the conference`;
      }

    }
    return array
  }

  let example = ejercicio5(list1)
  console.table(example)
