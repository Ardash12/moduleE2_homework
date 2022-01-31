let map = new Map();
map.set('str', 'value1');
map.set(12, 'value2');
map.set('23', 'value3');
map.set(true, 'value4');

for (let name of map.keys()){
  console.log(`Ключ - ${name}, значение - ${map.get(name)}`);
}
