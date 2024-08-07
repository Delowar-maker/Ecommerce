const express = require("express");

const ProductController = require("../controller/ProductController");
const UserController = require('../controllers/UserController')

const router = express.Router();

//Product Router

router.get('/ProductBrandList', ProductController.ProductBrandList)
router.get('/ProductCategoryList', ProductController.ProductCategoryList)
router.get('/ProductSliderList', ProductController.ProductSliderList)
router.get('/ProductListByBrand/:BrandID', ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID', ProductController.ProductListByCategory)
router.get('/ProductListBySmilier/:CategoryID', ProductController.ProductListBySmilier)
router.get('/ProductListByKeyword/:Keyword', ProductController.ProductListByKeyword)
router.get('/ProductListByRemark/:Remark', ProductController.ProductListByRemark)
router.get('/ProductDetails/:ProductID', ProductController.ProductDetails)
router.get('/ProductReviewList/:ProductID', ProductController.ProductReviewList)

router.post('/ProductListByFilter', ProductController.ProductListByFilter);

// user

router.get('/UserOTP/:email', UserController.UserOTP)
router.get('/VerifyLogin/:email/:otp', UserController.VerifyLogin)
router.get('/UserLogout', AuthVerification, UserController.UserLogout)
router.post('/CreateProfile', AuthVerification, UserController.CreateProfile)
router.post('/UpdateProfile', AuthVerification, UserController.UpdateProfile)
router.get('/ReadProfile', AuthVerification, UserController.ReadProfile)

// Wish
router.post('/SaveWishList', AuthVerification, WishListController.SaveWishList)
router.post('/RemoveWishList', AuthVerification, WishListController.RemoveWishList)
router.get('/WishList', AuthVerification, WishListController.WishList)


module.exports = router;