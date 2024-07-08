import dotenv from "dotenv"
dotenv.config({
  path: `.env.${process.env.ENV}`,
  override: true
})

const testConfig = {
  functional: process.env.FUNCTIONAL_URL,
  // Add other configurations if needed
};

export default testConfig
