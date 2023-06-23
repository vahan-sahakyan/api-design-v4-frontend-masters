import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { handleInputErrors } from './modules/middleware';

const router = Router();

/**
 * Product
 */
router.get('/product', (req, res) => {
  res.json({ message: 'hello' });
});
router.get('/product/:id', () => {});
router.put('/product/:id', body('name').isString(), handleInputErrors, (req, res) => {
  //
});
router.post('/product', body('name').isString(), handleInputErrors, (req, res) => {});
router.delete('/product/:id', () => {});

/**
 * Update
 */
router.get('/update', () => {});
router.get('/update/:id', () => {});

const updateIdPutFields = [
  body('title').optional(),
  body('body').optional(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
  body('version').optional(),
] as const;
router.put('/update/:id', ...updateIdPutFields, () => {});

const updatePostFields = [
  body('title').exists().isString(),
  body('body').exists().isString(),
  //
] as const;
router.post('/update', ...updatePostFields, () => {});

router.delete('/update/:id', () => {});

/**
 * UpdatePoint
 */
router.get('/updatepoint', () => {});
router.get('/updatepoint/:id', () => {});

const updatePointIdPutFields = [
  body('name').optional().isString(),
  body('description').optional().isString(),
  //
] as const;
router.put('/updatepoint/:id', ...updatePointIdPutFields, () => {});

const updatePointPostFields = [
  body('name').isString(),
  body('description').isString(),
  body('updateId').exists().isString(),
  //
] as const;
router.post('/updatepoint', ...updatePointPostFields, () => {});
router.delete('/updatepoint/:id', () => {});

export default router;
