import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../types/Product";
import { productsData } from "../../mocks/productsData";

interface Data {
  data: Product[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ data: productsData })
}
