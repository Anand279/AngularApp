using AngularApp.Server.Entity;

namespace AngularApp.Server.Services.Abstract
{
    public interface IMasterService
    {
        Task<List<VariantEntity>> GetAllVariant(string variantType);
        Task<List<CategoryEntity>> GetCategory();
    }
}
