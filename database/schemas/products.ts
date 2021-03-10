import * as Mongoose from 'mongoose';

const productsSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    stock: {
      type: Number,
    },
    isStock: {
      type: Boolean,
    },
    photoUrl: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    versionKey: false,
  },
);

export const products = <any>Mongoose.model('products', productsSchema);
