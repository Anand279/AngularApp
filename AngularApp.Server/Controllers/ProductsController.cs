using AngularApp.Server.Data;
using AngularApp.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace AngularApp.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly ProductDbContext _context;
        public ProductsController(ProductDbContext context)
        {
            _context = context;
        }
        [HttpGet("GetPaginatedProducts/{pageNo:int}/{pageSize:int}")]
        public async Task<IActionResult> GetPaginatedProducts(int pageNo, int pageSize)
        {
            var products = await _context.Products //Data Source
                                    .Skip((pageNo - 1) * pageSize) //Skip Logic
                                    .Take(pageSize).ToListAsync();
            return Ok(products);
        }
        [HttpGet("GetAllProducts")]
        public async Task<IActionResult> GetAllProducts()
        {
            var products = await _context.Products.ToListAsync();
            return Ok(products);
        }
        [HttpPost("AddProduct")]
        public async Task<IActionResult> AddProduct([FromBody] Product product)
        {
            await _context.Products.AddAsync(product);
            await _context.SaveChangesAsync();
            return Ok(product);
        }
        [HttpGet("GetProduct/{id:int}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var product = await _context.Products.FirstOrDefaultAsync(x=>x.Id==id);
            if(product == null)
                return NotFound();
            return Ok(product);
        }
        [HttpPut("UpdateProduct/{id:int}")]
        public async Task<IActionResult> UpdateProduct([FromRoute] int id,Product updateProductReq)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
                return NotFound();
            product.Name = updateProductReq.Name;
            product.Color = updateProductReq.Color;
            product.Type = updateProductReq.Type;
            product.Price = updateProductReq.Price;
            await _context.SaveChangesAsync();
            return Ok(product);
        }
        [HttpDelete("DeleteProduct/{id:int}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if(product == null)
                return NotFound();
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
            return Ok(product);
        }
        [HttpGet("GetAllProductsCount")]
        public async Task<IActionResult> GetAllProductsCount()
        {
            var count = await _context.Products.CountAsync();
            return Ok(count);
        }
    }
}
