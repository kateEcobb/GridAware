var mongoose = require('mongoose'); 

var WattEnergySchema = new mongoose.Schema({ 
  timestamp: String,
  created_at: String, 
  carbon: Number, 
  genmix: [{ 
    fuel: String, 
    gen_MW: Number
  }], 
  url: String, 
  market: String, 
  freq: String, 
  ba: String 
}); 

var WattTotal = mongoose.model('WattTotal', WattEnergySchema);
var TestData = mongoose.model('TestData', WattEnergySchema);

module.exports = { 
  WattTotal: WattTotal, 
  TestData: TestData
};