using AngularApp.Server.Data;
using AngularApp.Server.Entity;
using AngularApp.Server.Models;
using AngularApp.Server.Services.Abstract;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace AngularApp.Server.Services.Concrete
{
    public class MasterService : IMasterService
    {
        private readonly Sales_DBContext _DBContext;
        private readonly IMapper mapper;

        public MasterService(Sales_DBContext dBContext, IMapper mapper)
        {
            this._DBContext = dBContext;
            this.mapper = mapper;
        }
        public async Task<List<VariantEntity>> GetAllVariant(string variantType)
        {
            var customerdata = await this._DBContext.TblMastervariants.Where(item => item.VarinatType == variantType).ToListAsync();
            if (customerdata != null && customerdata.Count > 0)
            {
                return this.mapper.Map<List<TblMastervariant>, List<VariantEntity>>(customerdata);
            }
            return new List<VariantEntity>();

        }

        public async Task<List<CategoryEntity>> GetCategory()
        {
            var customerdata = await this._DBContext.TblCategories.ToListAsync();
            if (customerdata != null && customerdata.Count > 0)
            {
                return this.mapper.Map<List<TblCategory>, List<CategoryEntity>>(customerdata);
            }
            return new List<CategoryEntity>();

        }
    }
}
