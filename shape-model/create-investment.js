const Investment = require("../model/investment");
const Transaction = require("../model/transaction");

// const select_investment_end_time = (req) => {

//   switch (req.body.return_time) {
//     case "daily_return":
//       let date = new Date();
//       date.setDate(date.getDate() + 1);
//       let end_date = date.getTime();
//       return end_date;
//       break;

//       case "4_days_return":
//         let date2 = new Date();
//       date2.setDate(date2.getDate() + 4);
//       let end_date2 = date2.getTime();
//       return end_date2;
//       break;

//       case "weekly_return" :
//          let date3 = new Date();
//     date3.setDate(date3.getDate() + 7);
//     let end_date3 = date3.getTime();
//     return end_date3;

//     default:
//       let def_date = new Date();
//       def_date.setDate(date.getDate() + 1);
//       let def_end_date = date.getTime();
//       return def_end_date;
//       break;
//   }

//   // if (req.body.return_time == "daily_return") {
//   //   // let currentdate = new Date();
//   //   // currentdate.setDate(currentdate.getDate() + 1);
//   //   // let datetime = `${currentdate.getFullYear()}-${
//   //   //   currentdate.getMonth() + 1
//   //   // }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
//   //   // return datetime;
//   //   let date = new Date();
//   //   date.setDate(date.getDate() + 1);
//   //   let end_date = date.getTime();
//   //   return end_date;
//   // } else {
//   //   // let currentdate = new Date();
//   //   // currentdate.setDate(currentdate.getDate() + 7);
//   //   // let datetime = `${currentdate.getFullYear()}-${
//   //   //   currentdate.getMonth() + 1
//   //   // }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
//   //   // return datetime;

//   //   let date = new Date();
//   //   date.setDate(date.getDate() + 7);
//   //   let end_date = date.getTime();
//   //   return end_date;
//   // }
// };


const select_investment_end_time = (req) => {
  try {
    // const package = await Investment_package.findOne({
    //   package_name: req.body.investment_plan,
    // });
    // if (!package)
    //   throw new Error(
    //     "there was an error with the investment plan you selected",
    //   );
    //  {
    //   return res.status(400).json({
    //     error: true,
    //     errMessage: "",
    //   });

    switch (req.body.investment_plan) {
      case "Starter Plan":
        let date = new Date();
        date.setDate(date.getDate() + 1);
        let end_date = date.getTime();
        console.log("expires after A day");
        return end_date;

        break;

      case "Business Plan":
        let date2 = new Date();
        date2.setDate(date2.getDate() + 1);
        let end_date2 = date2.getTime();
        console.log("expires after A day");

        return end_date2;
        break;

      case "Gold Plan":
        let date3 = new Date();
        date3.setDate(date3.getDate() + 2);
        let end_date3 = date3.getTime();
        console.log("expires after 48 hours");

        return end_date3;


        case "Exclusive Plan":
        let date4 = new Date();
        date3.setDate(date4.getDate() + 2);
        let end_date4 = date4.getTime();
        console.log("expires after a days");

        return end_date4;


        
        case "Advanced Forex":
        let date5 = new Date();
        date3.setDate(date5.getDate() + 3);
        let end_date5 = date5.getTime();
        console.log("expires after a days");

        return end_date5;


        case "LONG TERM":
        let date6 = new Date();
        date3.setDate(date6.getDate() + 30);
        let end_date6 = date6.getTime();
        console.log("expires after 30 days");

        return end_date6;

      // case "Promo Plan":
      //   let date4 = new Date();
      //   date3.setDate(date3.getDate() + 15);
      //   let end_date4 = date4.getTime();
      //   console.log("expires after 15 days");

      //   return end_date3;

      default:
        let def_date = new Date();
        def_date.setDate(date.getDate() + 1);
        let def_end_date = date.getTime();
        console.log("expires after a day");

        return def_end_date;
        break;
    }
  } catch (error) {
    console.log("caught error");
    return { error: true, errMessage: error.message };
  }


};



const create_investment = async (req) => {
  let currentdate = new Date();
  let datetime = `${currentdate.getFullYear()}-${
    currentdate.getMonth() + 1
  }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
  let ref = Math.floor(Math.random() * 1000);
  console.log("end time", select_investment_end_time(req));

  const investment = await new Investment({
    user: req.body.user,
    transaction_date: datetime,
    refrence_number: `Ref#${++ref} `,
    amount: req.body.investment_amount,
    // currency: req.body.currency,

    return_time: req.body.return_time,
    pending_profit: req.body.profit,
    investment_end_date: select_investment_end_time(req),
  });


  const transaction = await new Transaction({
    user: req.body.user,
    refrence_number: `#Create Investment`,
    transaction_date: datetime,
    debit: `-$${req.body.investment_amount
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
    status: "success",
  });


  Promise.all([transaction.save(),investment.save()])

  return investment;
};
module.exports = create_investment;
