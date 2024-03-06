using AngularApp.Server.Entity;
using AngularApp.Server.Models;
using AutoMapper;

namespace AngularApp.Server.Handler
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<TblCustomer, CustomerEntity>().ForMember(item => item.StatusName, item => item.MapFrom(s => s.IsActive == true ? "Active" : "In Active"));
            CreateMap<TblSalesHeader, InvoiceHeader>().ReverseMap();
            CreateMap<TblSalesProductInfo, InvoiceDetail>().ReverseMap();
            CreateMap<TblProduct, ProductEntity>().ReverseMap();
            CreateMap<TblProductvarinat, ProductVariantEntity>().ReverseMap();
            CreateMap<TblMastervariant, VariantEntity>().ReverseMap();
            CreateMap<TblCategory, CategoryEntity>().ReverseMap();
            CreateMap<TblSalesHeader, InvoiceInput>().ReverseMap();
        }
    }
}
