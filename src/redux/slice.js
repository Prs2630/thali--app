import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: '',
  products:[
    {
      id: 1,
      image:"https://static.toiimg.com/thumb/61203720.cms?width=1200&height=900", 
      name: "Chapati",
      category: "breakfast",
      price: "40",
      description:
      "spicey with garlic and then deep fried to crispy perfection " },
  
    {
      id: 2,
      image: "https://images.hindustantimes.com/rf/image_size_800x600/HT/p2/2016/07/09/Pictures/_90b9dbd2-45c0-11e6-b0f4-7520104944f6.tif",
      name: "Curd",
      category: "evening",
      price: "60",
      description: "spicey with garlic and then deep fried to crispy perfection "
       },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPAw_8Vj19KbkVggNDFE7AQsSQZ4WU0_Foik3mzWIzaTY1CLbgYhBqzuQ5VhCOye1afAw&usqp=CAU",
      name: "Pickele",
      category: "breakfast",
      price: "30",
      description: "spicey with garlic and then deep fried to crispy perfection "
          },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1VuU__I_JtYVAMBKoOTmLxDJAP3mdET4hNRTq3depqqTicMoxi98s8Aw4dP2eXkkrTI&usqp=CAU",
      name: "Rice",
      category: "lunch",
      price: "100",
      description: "spicey with garlic and then deep fried to crispy perfection "
       },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjF_7lnJf_4EJ-p4hM5_ecA_1WElanCYaQ36WhxUw2DzwXKQN5sHqz8HmAh6_ZqjjYhIM&usqp=CAU",
      name: "Sweet",
      category: "evening",
      price: "120",
      description: "spicey with garlic and then deep fried to crispy perfection "
        },
    {
      id: 6,
      image: "http://www.thegreenchilli.in/wp-content/uploads/2021/07/kadaipaneer-800x500.jpg",
       name: "Paneer Dish",
      category: "dinner",
      price: "250",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis . "
      },
    {
      id: 7,
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/flfqio0uxpsfsdvaaejb",
      name: "Dessert-combo",
      category: "dinner",
      price: "150",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis . ",
    },
    {
      id: 8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPa-6Ip7LFjm8b13LMWc-iLw5ChmMcCHmDw&usqp=CAU",
      name: "Salad",
      category: "lunch",
      price: "100",
      description: "spicey with garlic and then deep fried to crispy perfection "
         },
    {
      id: 9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYCi8gKwG5yLvO-X4bavA4zTT0gQe5jLcRA&usqp=CAU",
      name: "Masala Papad",
      category: "evening",
      price: "40",
      description:
        "spicey with garlic and then deep fried to crispy perfection ",
    },
  ],
  thali:[
    
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  
    addTothali: (state, action) => {
   
      state.thali.push(action.payload);
    },
    RemoveItem:(state,action)=>{
       state.thali.splice(action.payload,1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTothali ,RemoveItem } = counterSlice.actions;

export default counterSlice.reducer