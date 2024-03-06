namespace AngularApp.Server.Models
{
    public class TblProduct
    {
        public string Code { get; set; } = null!;
        public string? Name { get; set; }
        public decimal? Price { get; set; }
        public int? Category { get; set; }
        public string? Remarks { get; set; }
    }
}
