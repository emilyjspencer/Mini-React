import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BucketList from './components/BucketList/BucketList';
import AddItem from './components/AddItem/AddItem';

const App = () =>  {

  const [bucketListItems, setBucketListItems] = useState([
    {id: 'i1', text: 'Karen Blixen Museum, Kenya'},
    {id: 'i1', text: 'NYC'},
    {id: 'i3', text: 'Bali'},
    {id: 'i4', text: 'Northern Lights'}
  ]);

const addNewItemHandler = (newItem) => {
  setBucketListItems(bucketListItems.concat(newItem));
};

  return (
    <div className="bucket-list">
      <h2>Bucket List</h2>
      <AddItem onAddItem={addNewItemHandler} />
      <BucketList items={bucketListItems} />
    </div>
  );
};

export default App;
