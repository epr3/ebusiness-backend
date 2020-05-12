const router = require('express').Router();
const passport = require('../config/passport');
const reviewController = require('../controllers/review_controller');
const role = require('../utils/role');
const roleMiddleware = require('../middlewares/role_middleware');
const validationMiddleware = require('../middlewares/validation_middleware');
const request = require('../requests/review_request');

router.get('/products/:productId/reviews', reviewController.getReviews);
router.get('/products/:productId/reviews/:id', reviewController.getReview);
router.post(
  '/products/:productId/reviews',
  validationMiddleware(request),
  passport.authenticate('jwt'),
  roleMiddleware([role.ADMIN, role.CLIENT]),
  reviewController.postReview
);
router.patch(
  '/products/:productId/reviews/:id',
  validationMiddleware(request),
  passport.authenticate('jwt'),
  roleMiddleware([role.ADMIN, role.CLIENT]),
  reviewController.patchReview
);
router.delete(
  '/products/:productId/reviews/:id',
  passport.authenticate('jwt'),
  roleMiddleware([role.ADMIN, role.CLIENT]),
  reviewController.deleteReview
);

module.exports = router;