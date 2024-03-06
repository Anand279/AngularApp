using AngularApp.Server.Entity;

namespace AngularApp.Server.Services.Abstract
{
    public interface IProductService
    {
        Task<List<ProductEntity>> Getall();
        Task<ProductEntity> Getbycode(string code);
        Task<List<ProductEntity>> Getbycategory(int Category);

        Task<ResponseType> SaveProduct(ProductEntity product);
    }
}
