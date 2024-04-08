import MenuItem from "./MenuItem";


function MenuList({ foodItems }) {

  return (
    <>
      { foodItems.map((el) => {
          return (
          <MenuItem 
          key={el.itemName} 
          itemName={el.itemName}
          foodImage={el.foodImage}
          description={el.description}
          price={el.price}
          />
          )
        }) 
      }

    </>
  );
}

export default MenuList;