import express from 'express';
const router = express.Router();

// テスト用の商品データ
const dummyProducts = [
  {
    id: '1',
    title_ja: '少女たちの午後',
    title_en: 'Afternoon of Girls',
    image_url: 'https://example.com/image1.jpg'
  }
];

// GET /api/products
router.get('/', (req, res) => {
  res.json(dummyProducts);
});

export default router;
