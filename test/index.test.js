const connection = require('../src/database/config/connection');
const { dbBuild } = require('../src/database/config/build');
const { getMenu, getOrder } = require('../src/database/queries/getData');
const { postData } = require('../src/database/queries/postData');

beforeAll(() => dbBuild());
afterAll(() => connection.end());


test('test getMenufunction', () => getMenu().then((res) => {
  const actual = res.rows[0];
  const expected = {
    id: 1,
    menuname: 'coffee',
    menuimage: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    menudescription: 'choose your favorite coffee and enjoy it fresh',
    price: 8,
  };
  expect(actual).toEqual(expected);
}));

test('test getOrder function', () => getOrder().then((res) => {
  const actual = res.rows[0];
  const expected = {
    id: 1,
    menuname: 'coffee',
    menuimage: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    menudescription: 'choose your favorite coffee and enjoy it fresh',
    price: 8,
    menuid: 1,
    quantity: 3,
    size: 'small',
    suger: 'one',
    total_price: 24,
  };
  expect(actual).toEqual(expected);
}));

test('test post data function', () => {
  const data = {
    menuId: 1, quantity: 2, size: 'small', suger: 'Without', total_price: 16,
  };
  return postData(data).then((res) => {
    const actual = res.rows[0];
    const expected = {
      id: 3, menuid: 1, quantity: 2, size: 'small', suger: 'Without', total_price: 16,
    };
    expect(actual).toEqual(expected);
  });
});
