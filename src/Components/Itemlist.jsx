import { useState } from 'react';

function Lists() {
    const [lists, setLists] = useState([]);
    const [newListItem, setNewListItem] = useState(''); 
    const [editIndex, setEditIndex] = useState(null);   

    
    function addLists() {
        if (newListItem.trim()) {
            setLists([...lists, newListItem]);
            setNewListItem(''); 
        }
    }

    
    const removeItem = (index) => {
        const updatedLists = [...lists];
        updatedLists.splice(index, 1);
        setLists(updatedLists);
    };

    
    const updateItem = (index) => {
        if (editIndex === index) {
            
            setEditIndex(null); 
        } else {
           
            setEditIndex(index);
        }
    };

    
    const handleEditChange = (e, index) => {
        const updatedLists = [...lists];
        updatedLists[index] = e.target.value;
        setLists(updatedLists);
    };

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="border border-gray-200 shadow w-[30vw] h-[40vh] flex flex-col justify-between items-center bg-white p-6">
                    <h1 className="text-blue-800 font-bold text-xl mb-4">Create List</h1>

                    <div className="w-full mb-4 flex items-center">
                        <input
                            type="text"
                            value={newListItem}
                            onChange={(e) => setNewListItem(e.target.value)}
                            placeholder="Enter new list item"
                            className="border p-2 w-full shadow-md rounded-md"
                        />
                        <button
                            onClick={addLists}
                            className="bg-black text-white p-2 ml-4 rounded-md shadow w-[100px]"
                        >
                            Add
                        </button>
                    </div>



                    <ul className="overflow-auto h-[50%] w-full px-4">
                        {lists.map((val, i) => (
                            <li key={i} className="flex justify-between items-center mb-2">
                                {editIndex === i ? (

                                    <input
                                        type="text"
                                        value={val}
                                        onChange={(e) => handleEditChange(e, i)}
                                        className="border p-2 w-full shadow-md rounded-md"
                                    />
                                ) : (
                                    val
                                )}
                                <div className="flex ml-2 gap-4">
                                    <button
                                        onClick={() => removeItem(i)}
                                        className="bg-red-700 text-white p-2 rounded-md shadow"
                                    >
                                        Remove
                                    </button>
                                    <button
                                        onClick={() => updateItem(i)}
                                        className="bg-green-700 text-white p-2 rounded-md shadow"
                                    >
                                        {editIndex === i ? 'Update' : 'Update'}
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>


                </div>
            </div>
        </>
    );
}

export default Lists;
