import MenuItem from "./MenuItem";


function MenuList({ foodItems }) {


  /* 
  array.map((toto) => { })
  
  1. Function anonyme FUNCTION
    function () {}
  2. Function anonyme ARROW
    () => {}

  1. Function FUNCTION
    function nomDeFunction() {}
  2. Function ARROW
    const nomDeFunction = () => {}

  */

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