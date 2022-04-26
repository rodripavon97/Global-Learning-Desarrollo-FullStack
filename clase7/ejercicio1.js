const list = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Java' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Java' } 
  ];

  function exerciseOne (array) {
    const copyList= array.map(obj => { return obj.language});
    const newSetObj = new Set(copyList)
    const verify= newSetObj.size == 1 ? true : false;
    return verify
  }

  let example = exerciseOne(list);
  console.log(example)
