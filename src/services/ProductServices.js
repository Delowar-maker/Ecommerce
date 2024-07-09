
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

    try {

        let BrandID=new ObjectId(req.params.BrandID);

        let MatchStage={$match:{brandID:BrandID}}
            // join mongodb lookup
        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};

        // join mongodb lookup
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};

        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}

        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}


        // Query using aggregate
        let data= await  ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage

        ])
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
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