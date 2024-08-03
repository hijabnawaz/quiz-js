// given object is empty
  function Empty(obj) {
    return Object.keys(obj).length === 0;
  }
  const obj1 = {};
  const obj2 = { key: 'value' };

  console.log(Empty(obj1)); 
  console.log(Empty(obj2)); 

  // fun to print property and its values of object
const person = {
    name: 'Hijab',
    age: 19,
    occupation: 'Engineer'
  };
  function printProperties(obj) {
    for (const key in obj)
         {
      if (obj.hasOwnProperty(key))
         {
        console.log(`${key}: ${obj[key]}`);
        }
        }
    }
    printProperties(person);

  // function to  mergre two objects
function mergeObj(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  const obj1 = { name: 'Hijab', age: 18 };
  const obj2 = { occupation: 'Engineer', location: 'New York' };

const newobj = mergeObj(obj1, obj2);

console.log(newobj);

//return array of keys

function getObj(obj) {
    return Object.keys(obj);
  }
  const person = {
    name: 'hania',
    age: 15,
    designation: 'student'
  };
  
  const keys = getObj(person);
  console.log(keys); 

// to get values of array
  function getObj(obj) {
    return Object.values(obj);
  }
  const person = {
    name: 'hania',
    age: 15,
    designation: 'student'
  };
  
  const values = getObj(person);
  console.log(values); 
  
  
  // to get values-keys pairs
  function getObj(obj) {
    return Object.entries(obj);
  }
  const person = {
    name: 'hania',
    age: 15,
    designation: 'student'
  };
  
  const entries = getObj(person);
  console.log(entries); 
  
  // function to deeply merge two nested objects
  function deepMerge(obj1, obj2) {
    return Object.keys(obj2).reduce((acc, key) => {
      if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
        acc[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        acc[key] = obj2[key];
      }
      return acc;
    }, { ...obj1 });
  }
  const obj1 = {
    name: 'Hania',
    age: 30,
    address: {
      city: 'Pakistan',
      zip: '10001'
    },
    hobbies: ['reading']
  };
  
  const obj2 = {
    age: 31,
    address: {
      city: 'Lahore',

    },
    hobbies: ['travelling']
  };
  
  const merged = deepMerge(obj1, obj2);
  console.log(merged);

  //update properties of objects
function updateObject(target, source) {
    Object.assign(target, source);
    return target;
  }
  const target = {
    name: 'Hania',
    age: 30,
    occupation: 'Engineer'
  };
  
  const source = {
    age: 31,
    occupation: 'Manager',
    location: 'Austrilla'
  };
  
  const updated = updateObject(target, source);
  console.log(updated);
 
  //
  
  
  
  
  
  
  