using AngularApp.Server.Entity;

namespace AngularApp.Server.Services.Abstract
{
    public interface ICustomerService
    {
        Task<List<CustomerEntity>> Getall();
        Task<CustomerEntity> Getbycode(string code);

    }
}
