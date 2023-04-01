module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();
    await deploy('Marketplace', {
      from: deployer,
      args: [],
      log: true,
    });
  };
  module.exports.tags = ['Marketplace'];