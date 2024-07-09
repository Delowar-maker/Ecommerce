
const BrandModel = require("../models/BrandModel")
const CategoryModel=require('../models/CategoryModel')
const ProductSliderModel=require('../models/ProductSliderModel')
const ProductModel=require('../models/ProductModel')
const ProductDetailModel=require('../models/ProductDetailModel')
const ReviewModel=require('../models/ReviewModel')

const mongoose =require('mongoose');
// string to ObjectId convert
const ObjectId=mongoose.Types.ObjectId;

const BrandListService = async () => {
    try {
        let data = await BrandModel.find();
        return { status: "success", data: data }
    }
    catch (e) {
        return { status: "fail", data: e }.toString()
    }

}

const CategoryListService = async () => {
    try {
        let data= await CategoryModel.find();
        return {status:"success",data:data}
    }
    catch (e) {
        return {status:"fail",data:e}.toString()
    }
}

const SliderListService = async () => {
    try {
        let data= await ProductSliderModel.find();
        return {status:"success",data:data}
    }
    catch (e) {
        return {status:"fail",data:e}.toString()
    }
}


const ListByBrandService = async (req) => {
    let BrandId=req.params.BrandId;

}

const ListByCategoryService = async (req) => {

}



//


const ListByRemarkService = async (req) => {

}

const ListBySmilierService = async (req) => {



}


const DetailsService = async (req) => {




}


const ListByKeywordService = async (req) => {

}





const ReviewListService = async (req) => {

}


const CreateReviewService = async (req) => {

}


const ListByFilterService = async (req) => {

}


module.exports = {
    ListByFilterService,
    CreateReviewService,
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByCategoryService,
    ListByBrandService,
    ListByRemarkService,
    ListBySmilierService,
    ListByKeywordService,
    DetailsService,
    ReviewListService
}