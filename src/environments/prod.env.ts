import { Environment } from "./env";

export const ProdEnvironment: Environment = {
  db_url:
    "mongodb+srv://swarnav:Swarnav294@cluster0.zl39t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  jwt_secret: "prodSecret",
  base_url: "https://dynamic-blog-backend.onrender.com/",
};
