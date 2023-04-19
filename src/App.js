import './App.css';
import { Product } from './questions/Product';
import { Greeting } from './questions/Greeting';
import { UserProfile } from './questions/UserProfile';
import { Gadgets } from './questions/Gadgets';
import { Phones } from './questions/Phones';
import { Article } from './questions/Article';
import { About } from './questions/About';
import { MyGadgets } from './questions/MyGadgets';
import { ToDo } from './questions/ToDo';
import { ColorPicker } from './questions/ColorPicker';

const userData = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
  
}
const products = [
  {
    id: 1,
    name: 'keyboard',
    description: 'Logitech Mechanical Keyboard',
    price: 2000,
  },
  { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
  {
    id: 3,
    name: 'monitor',
    description: 'Lenovo 32-inch display Monitor',
    price: 10000,
  },
  { id: 4, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
  {
    id: 5,
    name: 'speakers',
    description: 'Creative Desktop Speakers',
    price: 5000,
  },
  {
    id: 6,
    name: 'headphones',
    description: 'Sony over-the-ear wired Headphones with mic',
    price: 1500,
  },
  { id: 7, name: 'mobile', description: 'iPhone 12', price: 90000 },
]

const digitalProducts = [
  {
    id: 1,
    name: 'keyboard',
    description: 'Logitech Mechanical Keyboard',
    price: 2000,
  },
  { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
  { id: 3, name: 'mobile', description: 'iPhone 13', price: 61000 },
  {
    id: 4,
    name: 'monitor',
    description: 'Lenovo 32-inch display Monitor',
    price: 10000,
  },
  { id: 5, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
  {
    id: 6,
    name: 'speakers',
    description: 'Creative Desktop Speakers',
    price: 5000,
  },
  {
    id: 7,
    name: 'headphones',
    description: 'Sony over-the-ear wired Headphones with mic',
    price: 1500,
  },
  { id: 8, name: 'mobile', description: 'iPhone 12', price: 90000 },
]

const productsEight = [
  {
    id: 1,
    name: 'keyboard',
    description: 'Logitech Mechanical Keyboard',
    price: 2000,
  },
  { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
  {
    id: 3,
    name: 'speakers',
    description: 'Bose L1 Pro32 Portable',
    price: 256000,
  },
  { id: 4, name: 'mobile', description: 'iPhone 13', price: 61000 },
  {
    id: 5,
    name: 'monitor',
    description: 'Lenovo 32-inch display Monitor',
    price: 10000,
  },
  { id: 6, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
  {
    id: 7,
    name: 'speakers',
    description: 'Creative Desktop Speakers',
    price: 5000,
  },
  {
    id: 8,
    name: 'headphones',
    description: 'Sony over-the-ear wired Headphones with mic',
    price: 1500,
  },
  { id: 9, name: 'mobile', description: 'iPhone 12', price: 90000 },
]

const title = 'React is awesome'
const content = 'React is a JavaScript library for building user interfaces.'

const heading = 'About Me'
const name = 'Preeti' // you can put your name
const learning = 'I am learning React JS currently at neoG Camp.'

const todoItems = [
  {
    id: 1,
    title: 'Complete practice set',
    description: 'Practice set 1 of React',
    isCompleted: true,
  },
  {
    id: 2,
    title: 'Attend revision session',
    description: 'Revision session of React',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Watch recording',
    description: 'Live session recording of React',
    isCompleted: true,
  },
  {
    id: 4,
    title: 'Attend DSH',
    description: 'Doubt Solving Hours of React',
    isCompleted: false,
  },
  {
    id: 5,
    title: 'Complete practice set',
    description: 'Practice set 2 of React',
    isCompleted: false,
  },
]

const red = '#EE4B2B'
const blue = '#89CFF0'
const green = '#7FFFD4'

function App() {
  return (
    <div className="App">
      <Greeting name={'Tushar'}/>
      <Product name={'TV'} price={30000}/>
      <UserProfile userData={userData}/>
      <Gadgets productsData={products}/>
      <Phones digitalProducts={digitalProducts}/>
      <Article title={title} content={content}/>
      <About heading={heading} name={name} learning={learning}/>
      <MyGadgets products={productsEight} />
      <ToDo todoItems={todoItems}/>
      <ColorPicker red={red} blue={blue} green={green}/>
    </div>
  );
}

export default App;
