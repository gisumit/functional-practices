const api1 = [
  { name: 'RHEL', type: 'storage' },
  { name: 'OpenShift', type: 'storage' },
  { name: 'Ansibal', type: 'storage' },
  { name: 'OpenStack', type: 'Cloud' },
  { name: 'Virtualization', type: 'Cloud' },
];


// let res = [{
//     type: 'storage',
//     products: [
//         { name: 'RHEL', type: 'storage' },
//         { name: 'OpenShift', type: 'storage' },
//         { name: 'Ansibal', type: 'storage' }
//     ]
// }, {
//     type: 'Cloud',
//     products: [
//         { name: 'OpenStack', type: 'Cloud' },
//         { name: 'Virtualization', type: 'Cloud' }
//     ]
// }];


const result = api1.reduce((array, line) => {
  const index = array.findIndex(params => params.type === line.type);

  if (index === -1) {
    const products = [];
    products.push(line);
    array.push({ type: line.type, products });
  } else {
    array[index].products.push(line);
  }
  return array;
}, []);

// if arr has obj which has same type then dont push it
// if arr dont has type then push it


const api2 = [{
  name: 'ticket 1',
  status: 'new',
}, {
  name: 'ticket 2',
  status: 'new',
}, {
  name: 'ticket 1',
  status: 'old',
}];

const count = api2.reduce((count, item) => {
  if (item.status == 'new') {
    count++;
  }
  return count;
}, 0);

//   console.log(count)
module.exports = { count, result };

// let api = [
//   { rh_fy_year: 2017, week: "2017-05-15T13:59:56.000Z", no_of_installations: 20 },
//   { rh_fy_year: 2017, week: "2017-05-23T03:27:35.000Z", no_of_installations: 2 },
//   { rh_fy_year: 2017, week: "2017-05-31T14:20:32.000Z", no_of_installations: 10 },
//   { rh_fy_year: 2017, week: "2017-06-07T16:58:32.000Z", no_of_installations: 7 },
//   { rh_fy_year: 2017, week: "2017-06-12T14:54:46.000Z", no_of_installations: 9 },
//   { rh_fy_year: 2016, week: "2017-06-19T20:12:33.000Z", no_of_installations: 1 },
//   { rh_fy_year: 2016, week: "2017-06-27T13:09:35.000Z", no_of_installations: 25 },
//   { rh_fy_year: 2016, week: "2017-07-04T13:37:03.000Z", no_of_installations: 13 },
//   { rh_fy_year: 2016, week: "2017-07-10T12:42:57.000Z", no_of_installations: 5 },
//   { rh_fy_year: 2016, week: "2017-07-17T14:18:47.000Z", no_of_installations: 6 },
//   { rh_fy_year: 2015, week: "2017-07-24T16:48:47.000Z", no_of_installations: 5 },
//   { rh_fy_year: 2015, week: "2017-07-31T14:45:05.000Z", no_of_installations: 9 },
//   { rh_fy_year: 2015, week: "2017-08-07T07:22:40.000Z", no_of_installations: 2 },
//   { rh_fy_year: 2015, week: "2017-08-14T15:10:26.000Z", no_of_installations: 9 },
//   { rh_fy_year: 2015, week: "2017-08-22T15:00:49.000Z", no_of_installations: 4 },
//   { rh_fy_year: 2015, week: "2017-08-28T18:48:57.000Z", no_of_installations: 3 }
// ];

// Expected:
// [{ year: 2017, prods: [{week: "2017-05-15T13:59:56.000Z", no_of_installations: 20}]}]


// let result = api.reduce((t, a) => [...t, {week: a.week, count: a.no_of_installations}], [])

// result
