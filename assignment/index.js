import data from "" assert { type: "json" };

// console.log(data);
// loop through all data
const loopJSON = (data) => {
  //check if data exists
  data &&
    data.forEach((item, index) => {
      console.log(`Id ${item.name}: ${item.username} - ${item.email}`);
    });
};

loopJSON(data);
