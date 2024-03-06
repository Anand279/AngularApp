using AngularApp.Server.Entity;
using AngularApp.Server.Services.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp.Server.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class CustomerController : Controller
    {
        private ICustomerService customerService;
        public CustomerController(ICustomerService customerService)
        {
            this.customerService = customerService;
        }
        [HttpGet("GetAll")]
        public async Task<List<CustomerEntity>> GetAll()
        {
            return await this.customerService.Getall();

        }
        [HttpGet("GetByCode")]
        public async Task<CustomerEntity> GetByCode(string Code)
        {
            return await this.customerService.Getbycode(Code);

        }
    }
}
