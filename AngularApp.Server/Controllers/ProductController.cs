using AngularApp.Server.Entity;
using AngularApp.Server.Services.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp.Server.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ProductController : Controller
    {
        private readonly IProductService productService;
        private readonly IWebHostEnvironment _environment;
        public ProductController(IProductService productService, IWebHostEnvironment environment)
        {
            this.productService = productService;
            _environment = environment;
        }

        [HttpGet("GetAll")]
        public async Task<List<ProductEntity>> GetAll()
        {
            var productlist = await this.productService.Getall();
            if (productlist != null && productlist.Count > 0)
            {
                productlist.ForEach(item =>
                {
                    item.productImage = GetImagebyProduct(item.Code);
                });
            }
            else
            {
                return new List<ProductEntity>();
            }
            return productlist;

        }
        [HttpGet("GetByCode")]
        public async Task<ProductEntity> GetByCode(string Code)
        {
            return await this.productService.Getbycode(Code);

        }

        [NonAction]
        private string GetFilePath(string ProductCode)
        {
            return this._environment.WebRootPath + "\\Uploads\\Product\\" + ProductCode;
        }
        [NonAction]
        private string GetImagebyProduct(string productcode)
        {
            string ImageUrl = string.Empty;
            string HostUrl = "https://localhost:52397/";
            string Filepath = GetFilePath(productcode);
            string Imagepath = Filepath + "\\image.png";
            if (!System.IO.File.Exists(Imagepath))
            {
                ImageUrl = HostUrl + "/uploads/common/noimage.png";
            }
            else
            {
                ImageUrl = HostUrl + "/uploads/Product/" + productcode + "/image.png";
            }
            return ImageUrl;

        }
    }
}
