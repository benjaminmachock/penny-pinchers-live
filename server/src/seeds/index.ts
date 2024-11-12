import { seedProducts } from "./product-seed.js";

import sequelize from "../config/connection.js";

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synced. Seeding data...");

    await seedProducts();
    console.log("Products seeded");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding data: ", error);
    process.exit(1);
  }
};

seedAll();
