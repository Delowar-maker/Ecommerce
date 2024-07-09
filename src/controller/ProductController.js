const { ListByFilterService, CreateReviewService, BrandListService, CategoryListService, SliderListService,
    ListByCategoryService, ListByBrandService, ListByRemarkService, ListBySmilierService,
    ListByKeywordService, DetailsService, ReviewListService } = require('../services/ProductServices')
exports.ProductBrandList = async (req, res) => {
    let result = await BrandListService();
   //return  res.send(200).json(result)
    res.send(result)
}

exports.ProductCategoryList=async(req,res)=>{
    let result=await CategoryListService();
    return res.status(200).json(result)
}

exports.ProductSliderList=async(req,res)=>{
    let result=await SliderListService();
    return res.status(200).json(result)
}



exports.ProductListByBrand = async (req, res) => {
    let result=await ListByBrandService(req);
    return res.status(200).json(result)
}



exports.ProductListByCategory = async (req, res) => {
    let result=await ListByCategoryService(req);
    return res.status(200).json(result)
}

exports.ProductListBySmilier = async (req, res) => {

}

exports.ProductListByKeyword = async (req, res) => {

}

exports.ProductListByRemark = async (req, res) => {

}



exports.ProductListByFilter = async (req, res) => {

}




exports.ProductDetails = async (req, res) => {

}

exports.ProductReviewList = async (req, res) => {

}



exports.CreateReview = async (req, res) => {

}
