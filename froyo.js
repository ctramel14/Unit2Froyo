const userInputString = prompt(
    "Please enter flavors with spaces between flavors!",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
  );

  const stringArray = userInputString.split(", ");
  console.log(stringArray);

  const addValues = (obj, key) => {
    const order = {};
    for (let i = 0; i < stringArray.length; i++) {
       if (order.hasOwnProperty(stringArray[i]) === false) {
        order[stringArray[i]] = 1;
       } else {
        order[stringArray[i]] += 1;
       }
      } return order;
  };
 const completeOrder = addValues();


 console.log(completeOrder);
