using AngularApp.Server.Entity;
using AngularApp.Server.Services.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp.Server.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class MasterController : Controller
    {
        private readonly IMasterService _service;
        public MasterController(IMasterService service)
        {
            _service = service;
        }
        [HttpGet("GetAllVariant/{type}")]
        public async Task<List<VariantEntity>> GetAllVariant(string type)
        {

            return await this._service.GetAllVariant(type);

        }

        [HttpGet("GetCategory")]
        public async Task<List<CategoryEntity>> GetCategory()
        {

            return await this._service.GetCategory();

        }
    }
}
