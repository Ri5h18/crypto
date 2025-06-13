const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("FraudDetectionModule", (m) => {
  const fraudDetection = m.contract("FraudLog"); // <- THIS MUST MATCH Solidity contract name
  return { fraudDetection };
});
