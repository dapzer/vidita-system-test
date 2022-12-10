import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../types/Product";
import { productsData2 } from "../../mocks/productsData2";

interface Data {
  data: Product[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ data: productsData2 })
}
