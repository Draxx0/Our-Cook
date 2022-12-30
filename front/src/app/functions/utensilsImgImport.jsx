function importAll(r) {
  return r.keys().map(r);
}

const utensils = importAll(
  require.context("../assets/utensils", false, /\.(png|jpe?g|svg|webp)$/)
);

export default utensils;
