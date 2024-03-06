using AngularApp.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularApp.Server.Data
{
    public class ProductDbContext :DbContext
    {
        public ProductDbContext(DbContextOptions<ProductDbContext> options) : base(options) { }
        public DbSet<Product> Products { get; set; }
    }
}
