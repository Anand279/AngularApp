using AngularApp.Server.Data;
using AngularApp.Server.Entity;
using AngularApp.Server.Models;
using AngularApp.Server.Services.Abstract;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace AngularApp.Server.Services.Concrete
{
    public class CustomerService : ICustomerService
    {

        private readonly Sales_DBContext _DBContext;
        private readonly IMapper mapper;

        public CustomerService(Sales_DBContext dBContext, IMapper mapper)
        {
            _DBContext = dBContext;
            this.mapper = mapper;
        }
        public async Task<List<CustomerEntity>> Getall()
        {
            var customerdata = await this._DBContext.TblCustomers.ToListAsync();
            if (customerdata != null && customerdata.Count > 0)
            {
                return this.mapper.Map<List<TblCustomer>, List<CustomerEntity>>(customerdata);
            }
            return new List<CustomerEntity>();

        }

        public async Task<CustomerEntity> Getbycode(string code)
        {
            int c = Convert.ToInt32(code);
            var customerdata = await this._DBContext.TblCustomers.FirstOrDefaultAsync(item => item.Code == code);
            if (customerdata != null)
            {
                return this.mapper.Map<TblCustomer, CustomerEntity>(customerdata);
            }
            return new CustomerEntity();

        }
    }
}
