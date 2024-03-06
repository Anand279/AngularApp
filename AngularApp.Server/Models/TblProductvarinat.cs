namespace AngularApp.Server.Models
{
    public partial class TblProductvarinat
    {
        public int Id { get; set; }
        public string ProductCode { get; set; } = null!;
        public string? Remarks { get; set; }
        public decimal? Price { get; set; }

        //public int? ColorId { get; set; }
        //public int? SizeId { get; set; }
        //public bool? Isactive { get; set; }
    }
}
