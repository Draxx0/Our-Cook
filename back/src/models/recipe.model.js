const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    default: null,
  },
  calorie: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    default: null,
  },
  preparationTime: {
    type: Number,
    required: true,
  },
  cookingTime: {
    type: Number,
    required: true,
  },
  cost: {
    type: String,
    required: true,
    enum: ["Bon marché", "Abordable", "Coûteux"],
  },
  category: {
    type: String,
    required: true,
    enum: ["Petit-déjeuner", "Entrée", "Plat", "Dessert", "Apéritif"],
  },
  difficulty: {
    type: String,
    required: true,
    enum: ["Facile", "Moyen", "Difficile"],
  },
  numberOfPeople: {
    type: Number,
    required: true,
  },
  ingredients: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
    },
  ],
  steps: [
    {
      name: {
        type: String,
        required: true,
      },
    },
  ],
  utensils: [
    {
      name: {
        type: String,
        enum: [
          "Casserole",
          "Poêle",
          "Couteau",
          "Four",
          "Moule",
          "Saladier",
          "Cuillère",
          "Passoire",
          "Couvercle",
          "Pince",
          "Cuillère à soupe",
          "Cuillère à café",
          "Mixeur",
          "Râpe",
          "Économe",
          "Éplucheur",
          "Égouttoir",
          "Cocotte",
          "Couteau à pain",
          "Pinceau",
          "Papier sulfurisé",
          "Cuillère en bois",
          "Mijoteuse",
          "Balance de cuisine",
        ],
      },
      imageUrl: {
        type: String,
      },
    },
  ],
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Favorite",
    },
  ],
  chef: {
    type: Schema.Types.ObjectId,
    ref: "Chef",
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
