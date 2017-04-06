var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function addSales(array) {
  var sum = 0
  for (var i in array) {
    sum += array[i];
  }
  return sum;
}


function calculateSalesTax(salesData, taxRates) {
  var company = {};
  for (var i = 0; i < salesData.length; i++) {
    saleRecord = salesData[i]
    var totalSales = addSales(saleRecord.sales)
    var totalTaxes = totalSales * taxRates[saleRecord.province]
    if (!company[saleRecord.name]) {
        company[saleRecord.name] = {
            totalSales: totalSales,
            totalTaxes: totalTaxes
        };
    } else {
        var companyRecord = company[saleRecord.name]
        companyRecord.totalSales += totalSales
        companyRecord.totalTaxes += totalTaxes
    }
  }
  return company;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results)


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/